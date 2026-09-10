// Renders cv.md (the single source of truth) into the CV page.
document.addEventListener('DOMContentLoaded', function() {
    const body = document.getElementById('cv-body');
    const toc = document.getElementById('cv-toc');

    const slugify = text => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    function showFallback() {
        // fetch() is blocked on file:// URLs, so a local preview needs a web server
        const hint = window.location.protocol === 'file:'
            ? 'This page was opened directly from disk, and browsers block loading cv.md that way. Serve the folder over HTTP (for example <code>python3 -m http.server</code>) and open it via localhost, or view it on fabianheng.me.'
            : 'The CV could not be loaded here.';
        body.innerHTML = `
            <p>${hint} Read the plain-text Markdown version at
            <a href="cv.md">fabianheng.me/cv.md</a>, or download the <a href="files/Fabian_CV.pdf" target="_blank">PDF</a>.</p>`;
    }

    function render(markdown) {
        marked.setOptions({ gfm: true, breaks: false });
        body.innerHTML = marked.parse(markdown);

        // The hero already provides the page's h1; keep the document title visual only
        const docTitle = body.querySelector('h1');
        if (docTitle) {
            const title = document.createElement('p');
            title.className = 'cv-doc-title big-font';
            title.innerHTML = docTitle.innerHTML;
            docTitle.replaceWith(title);
        }

        // Section anchors + table of contents chips
        const headings = body.querySelectorAll('h2');
        headings.forEach(h2 => {
            h2.id = slugify(h2.textContent);
            const link = document.createElement('a');
            link.href = `#${h2.id}`;
            link.textContent = h2.textContent;
            toc.appendChild(link);
        });

        // Tables scroll inside their own container on narrow screens
        body.querySelectorAll('table').forEach(table => {
            const wrap = document.createElement('div');
            wrap.className = 'cv-table-wrap';
            table.parentNode.insertBefore(wrap, table);
            wrap.appendChild(table);
        });

        // External links open in a new tab
        body.querySelectorAll('a[href^="http"]').forEach(a => {
            if (a.hostname !== window.location.hostname) {
                a.target = '_blank';
                a.rel = 'noopener';
            }
        });

        // Highlight the section currently in view
        if ('IntersectionObserver' in window && headings.length) {
            const links = toc.querySelectorAll('a');
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
                });
            }, { rootMargin: '-160px 0px -70% 0px' });
            headings.forEach(h2 => observer.observe(h2));
        }

        // Honour a deep link once content exists
        if (window.location.hash) {
            const target = document.getElementById(window.location.hash.slice(1));
            if (target) target.scrollIntoView();
        }
    }

    fetch('cv.md', { cache: 'no-cache' })
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.text();
        })
        .then(render)
        .catch(showFallback);
});
