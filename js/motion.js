(function() {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const enabled = root.classList.contains('motion') && !reduceMotion;

    const LOAD_DELAY = 150;
    const LOAD_STAGGER = 150;
    const SCROLL_STAGGER = 90;
    const MAX_STAGGER_STEPS = 6;
    const REVEAL_DURATION = 1200;
    const IMAGE_TIMEOUT = 800;

    let loaded = false;
    let observer = null;
    const observed = new WeakSet();

    const byTop = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;

    function inView(el, margin) {
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight * (margin || 1);
    }

    // Prerendered pages wait until they are actually shown
    function whenActive(fn) {
        if (document.prerendering) {
            document.addEventListener('prerenderingchange', fn, { once: true });
        } else {
            fn();
        }
    }

    // Scroll reveal

    function reveal(el, delay) {
        el.style.setProperty('--reveal-delay', `${delay}ms`);
        el.classList.add('is-revealed');
        // Restore the element's own styles once settled
        setTimeout(() => {
            el.removeAttribute('data-reveal');
            el.classList.remove('is-revealed');
            el.style.removeProperty('--reveal-delay');
            el.style.removeProperty('--reveal-y');
        }, delay + REVEAL_DURATION + 100);
    }

    function revealBatch(elements, baseDelay, stagger) {
        elements.sort(byTop).forEach((el, i) => {
            reveal(el, baseDelay + Math.min(i, MAX_STAGGER_STEPS) * stagger);
        });
    }

    function refresh(scope) {
        if (!enabled) return;
        (scope || document).querySelectorAll('[data-reveal]').forEach(el => {
            if (observed.has(el)) return;
            observed.add(el);
            observer.observe(el);
        });
    }

    function revealChildren(container, offset) {
        if (!container) return;
        Array.from(container.children).forEach(child => {
            child.setAttribute('data-reveal', '');
            if (offset) child.style.setProperty('--reveal-y', offset);
        });
        refresh(container);
    }

    // Page transitions

    const samePage = url => normalisePath(url.pathname) === normalisePath(window.location.pathname)
        && url.search === window.location.search;

    function normalisePath(path) {
        return path.endsWith('/') ? `${path}index.html` : path;
    }

    function navigate(href, options) {
        const opts = options || {};
        if (!enabled) {
            window.location.href = href;
            return;
        }
        if (opts.liftNav) root.classList.add('is-leaving-up');
        root.classList.add('is-leaving');
        setTimeout(() => { window.location.href = href; }, opts.delay || 450);
    }

    function isInternalPage(link) {
        if (link.target && link.target !== '_self') return false;
        if (link.hasAttribute('download')) return false;
        const url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin) return false;
        if (!/(\.html|\/)$/.test(url.pathname)) return false;
        if (samePage(url) && url.hash) return false;
        return true;
    }

    document.addEventListener('click', event => {
        const link = event.target.closest('a[href]');
        if (!link || event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (!isInternalPage(link)) return;

        const url = new URL(link.href, window.location.href);
        event.preventDefault();

        if (samePage(url)) {
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            return;
        }

        const toggle = link.closest('.nav-pill-toggle');
        if (toggle) {
            pill.moveTo(toggle);
            pill.holdHover();
            navigate(link.href, { delay: 600 });
        } else if (link.closest('.projects-content')) {
            navigate(link.href, { delay: 600, liftNav: true });
        } else {
            navigate(link.href);
        }
    });

    // Warm the cache on intent where speculation rules aren't supported
    if (!(HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules'))) {
        const warmed = new Set();
        const warm = event => {
            const link = event.target.closest && event.target.closest('a[href]');
            if (!link || !isInternalPage(link) || warmed.has(link.href)) return;
            warmed.add(link.href);
            fetch(link.href, { credentials: 'same-origin' }).catch(() => {});
        };
        document.addEventListener('pointerover', warm, { passive: true });
        document.addEventListener('touchstart', warm, { passive: true });
        document.addEventListener('focusin', warm);
    }

    // Back/forward cache restores the page mid-transition
    window.addEventListener('pageshow', event => {
        if (!event.persisted) return;
        root.classList.remove('is-leaving', 'is-leaving-up');
        pill.reset();
    });

    // Sliding nav pill

    const pill = (function() {
        const middle = document.querySelector('.nav-middle');
        const track = middle && middle.querySelector('.nav-pill');
        const glow = middle && middle.querySelector('.nav-pill-glow');
        if (!middle || !track || !glow) return { moveTo() {}, reset() {}, holdHover() {} };

        const toggles = Array.from(track.querySelectorAll('.nav-pill-toggle'));
        const active = toggles.find(t => samePage(new URL(t.href, window.location.href)));
        if (active) active.setAttribute('aria-current', 'page');

        function place(toggle) {
            const middleRect = middle.getBoundingClientRect();
            const toggleRect = toggle.getBoundingClientRect();
            const glowX = toggleRect.left - middleRect.left + (toggleRect.width - glow.offsetWidth) / 2;
            middle.style.setProperty('--pill-x', `${toggle.offsetLeft - 5}px`);
            middle.style.setProperty('--pill-w', `${toggle.offsetWidth + 10}px`);
            middle.style.setProperty('--glow-x', `${glowX}px`);
        }

        function snap(toggle) {
            middle.classList.add('no-transition');
            place(toggle);
            middle.getBoundingClientRect();
            middle.classList.remove('no-transition');
        }

        function reset() {
            middle.classList.toggle('is-empty', !active);
            snap(active || toggles[0]);
        }

        function moveTo(toggle) {
            if (middle.classList.contains('is-empty')) {
                snap(toggle);
                middle.classList.remove('is-empty');
            } else {
                place(toggle);
            }
        }

        // Carry the hover state across the page swap so the pill doesn't blink
        function holdHover() {
            if (!window.matchMedia('(hover: hover)').matches) return;
            try { sessionStorage.setItem('pill-hover', '1'); } catch (e) {}
        }

        function restoreHover() {
            try {
                if (!sessionStorage.getItem('pill-hover')) return;
                sessionStorage.removeItem('pill-hover');
            } catch (e) {
                return;
            }
            track.classList.add('is-hovered');
            document.addEventListener('pointermove', () => track.classList.remove('is-hovered'), { once: true });
        }

        middle.classList.add('is-ready');
        reset();
        whenActive(restoreHover);
        window.addEventListener('resize', () => snap(active || toggles[0]));
        if (document.fonts) document.fonts.ready.then(() => snap(active || toggles[0]));

        return { moveTo, reset, holdHover };
    })();

    // Init

    function start() {
        if (loaded) return;
        loaded = true;
        root.classList.add('is-loaded');
        const visible = Array.from(document.querySelectorAll('[data-reveal]'))
            .filter(el => observed.has(el) && inView(el, 0.9));
        visible.forEach(el => observer.unobserve(el));
        revealBatch(visible, LOAD_DELAY, LOAD_STAGGER);
    }

    // Only hold the entrance for images that are on screen
    function waitForImages() {
        const images = Array.from(document.querySelectorAll('[data-reveal] img')).filter(img => inView(img));
        const decoded = Promise.all(images.map(img => img.decode().catch(() => {})));
        return Promise.race([decoded, new Promise(resolve => setTimeout(resolve, IMAGE_TIMEOUT))]);
    }

    function init() {
        if (!enabled) {
            document.querySelectorAll('[data-reveal]').forEach(el => el.removeAttribute('data-reveal'));
            root.classList.remove('motion');
            return;
        }

        observer = new IntersectionObserver(entries => {
            const visible = entries.filter(e => e.isIntersecting).map(e => e.target);
            if (!loaded || !visible.length) return;
            visible.forEach(el => observer.unobserve(el));
            revealBatch(visible, 0, SCROLL_STAGGER);
        }, { rootMargin: '0px 0px -10% 0px' });

        refresh();
        whenActive(() => waitForImages().then(start));
    }

    window.Motion = { refresh, revealChildren, navigate };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
