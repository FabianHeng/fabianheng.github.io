(function() {
    const root = document.documentElement;
    const motion = root.classList.contains('motion');

    const pad = n => String(n).padStart(2, '0');
    const inline = text => (window.marked ? marked.parseInline(text) : text);

    function paragraphs(text) {
        return text.split(/\n\s*\n/).map(p => `<p class="small-font">${inline(p.trim())}</p>`).join('');
    }

    function note(section) {
        if (!section.note) return '';
        const label = section.note.label || 'Side story';
        const text = section.note.text || section.note;
        return `
            <aside class="chapter-note" style="--d: 420ms">
                <span class="chapter-note-label">${label}</span>
                <p>${inline(text)}</p>
            </aside>`;
    }

    // Render

    const id = new URLSearchParams(window.location.search).get('id');
    const trips = typeof travelData !== 'undefined' ? travelData : [];
    const index = trips.findIndex(trip => trip.id === id);
    const trip = trips[index];

    if (!trip) {
        document.querySelector('.trip-page').innerHTML = `
            <div class="trip-missing small-font">
                <h1 class="big-font">Trip Not Found</h1>
                <p>Sorry, I couldn't find that stop.</p>
                <a href="life.html#sep">Go back to the map</a>
            </div>`;
        return;
    }

    const sections = trip.sections || [];
    document.title = `Fabian Heng | ${trip.locationName.split(',')[0]} Trip`;
    document.getElementById('trip-kicker').textContent = `Stop ${pad(index + 1)} of ${pad(trips.length)}`;
    document.getElementById('trip-title').textContent = trip.title;
    document.getElementById('trip-location').textContent = trip.locationName;
    document.getElementById('trip-date').textContent = trip.date;
    const heroImg = document.getElementById('trip-hero-img');
    heroImg.src = trip.heroImage;
    heroImg.alt = trip.locationName;

    document.getElementById('trip-chapter-list').innerHTML = sections.map((section, i) =>
        `<li><a href="#chapter-${i + 1}"><b>${pad(i + 1)}</b>${section.title}</a></li>`
    ).join('');

    document.getElementById('trip-chapters').innerHTML = '<div class="trip-route"><span></span></div>' + sections.map((section, i) => `
        <section class="chapter${i % 2 ? ' is-flipped' : ''}" id="chapter-${i + 1}">
            <span class="chapter-marker"></span>
            <figure class="chapter-media">
                <img src="${section.img}" alt="${section.title}" loading="${i < 1 ? 'eager' : 'lazy'}" decoding="async">
            </figure>
            <div class="chapter-copy">
                <span class="chapter-num" aria-hidden="true">${pad(i + 1)}</span>
                <h2 class="big-font" style="--d: 200ms">${section.title}</h2>
                <div class="chapter-text" style="--d: 300ms">${paragraphs(section.text)}</div>
                ${note(section)}
            </div>
        </section>`
    ).join('');

    const next = trips[index + 1];
    const prev = trips[index - 1];
    const nextBlock = next ? `
        <span class="trip-next-label">Up next</span>
        <a class="trip-next-card" href="sep.html?id=${next.id}">
            <img src="${next.heroImage}" alt="${next.locationName}" loading="lazy">
            <div class="trip-next-body">
                <div>
                    <small>${next.locationName} &middot; ${next.date}</small>
                    <h3>${next.title}</h3>
                </div>
                <span class="trip-next-arrow"><i class="fa fa-long-arrow-right"></i></span>
            </div>
        </a>` : `
        <span class="trip-next-label">That's a wrap</span>
        <a class="trip-next-card" href="life.html#sep">
            <img src="${trips[0].heroImage}" alt="${trips[0].locationName}" loading="lazy">
            <div class="trip-next-body">
                <div>
                    <small>Last stop of the exchange</small>
                    <h3>Back to the map</h3>
                </div>
                <span class="trip-next-arrow"><i class="fa fa-map-o"></i></span>
            </div>
        </a>`;
    document.getElementById('trip-next').innerHTML = nextBlock + `
        <div class="trip-next-links">
            ${prev ? `<a href="sep.html?id=${prev.id}"><i class="fa fa-long-arrow-left"></i> ${prev.locationName}</a>` : '<span></span>'}
            <a href="life.html#sep"><i class="fa fa-map-marker"></i> All stops</a>
        </div>`;
    document.getElementById('trip-next').setAttribute('data-reveal', '');

    // Scroll effects

    const hero = document.querySelector('.trip-hero');
    const heroMedia = document.querySelector('.trip-hero-media');
    const heroContent = document.querySelector('.trip-hero-content');
    const progress = document.querySelector('.trip-progress');
    const chaptersEl = document.getElementById('trip-chapters');
    const route = chaptersEl.querySelector('.trip-route');
    const chapters = Array.from(chaptersEl.querySelectorAll('.chapter'));
    const visible = new Set();
    // Hero parallax is handled in CSS where scroll-driven animations exist
    const cssParallax = window.CSS && CSS.supports('animation-timeline: view()');
    let ticking = false;

    function update() {
        ticking = false;
        const vh = window.innerHeight;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - vh;
        progress.style.setProperty('--progress', max > 0 ? Math.min(y / max, 1) : 0);

        // Route line fills up to the middle of the screen
        const routeRect = route.getBoundingClientRect();
        const fill = (vh * 0.55 - routeRect.top) / routeRect.height;
        route.style.setProperty('--route', Math.max(0, Math.min(fill, 1)));
        chapters.forEach(ch => {
            const marker = ch.querySelector('.chapter-marker').getBoundingClientRect();
            ch.classList.toggle('is-passed', marker.top < vh * 0.55);
        });

        if (!motion) return;

        if (!cssParallax && y < hero.offsetHeight) {
            const ratio = y / hero.offsetHeight;
            heroMedia.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
            heroContent.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
            heroContent.style.opacity = 1 - ratio * 1.4;
        }

        visible.forEach(ch => {
            const rect = ch.getBoundingClientRect();
            const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
            ch.querySelector('.chapter-media img').style.setProperty('--shift', `${offset * -24}px`);
        });
    }

    function requestUpdate() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    update();

    if (!motion) return;

    const parallax = new IntersectionObserver(entries => {
        entries.forEach(e => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    });
    chapters.forEach(ch => parallax.observe(ch));

    const revealer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            revealer.unobserve(e.target);
            e.target.classList.add('is-in');
            setTimeout(() => e.target.classList.add('is-settled'), 1700);
        });
    }, { rootMargin: '0px 0px -18% 0px' });

    // Hold chapter reveals until the page fade-in has started
    function startReveals() {
        chapters.forEach(ch => revealer.observe(ch));
    }

    if (root.classList.contains('is-loaded')) {
        startReveals();
    } else {
        const watch = new MutationObserver(() => {
            if (!root.classList.contains('is-loaded') && root.classList.contains('motion')) return;
            watch.disconnect();
            startReveals();
        });
        watch.observe(root, { attributes: true, attributeFilter: ['class'] });
    }
})();
