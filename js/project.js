(function() {
    const root = document.documentElement;
    const motion = root.classList.contains('motion');
    const pad = n => String(n).padStart(2, '0');

    function el(tag, className, html) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (html !== undefined) node.innerHTML = html;
        return node;
    }

    function reveal(node, offset) {
        node.setAttribute('data-reveal', '');
        node.style.setProperty('--reveal-y', offset || '32px');
        return node;
    }

    // "- **Title**: text" lists become cards
    function renderFeatures(list) {
        const grid = el('div', 'p-features');
        list.items.forEach((item, i) => {
            const [, title, text] = item.text.match(/^\*\*(.+?)\*\*:\s*([\s\S]*)$/);
            const card = reveal(el('div', 'p-feature'));
            card.appendChild(el('span', 'p-feature-num', pad(i + 1)));
            card.appendChild(el('h3', 'p-feature-title', marked.parseInline(title)));
            card.appendChild(el('p', 'p-feature-text', marked.parseInline(text)));
            grid.appendChild(card);
        });
        return grid;
    }

    // "- Label: a, b, c" lists become spec rows
    function renderSpecs(list) {
        const table = reveal(el('div', 'p-specs'));
        list.items.forEach(item => {
            const match = item.text.replace(/\*\*/g, '').match(/^([^:]+):\s*([\s\S]+)$/);
            const row = el('div', 'p-spec');
            if (!match) {
                row.appendChild(el('div', 'p-spec-value', marked.parseInline(item.text)));
                table.appendChild(row);
                return;
            }
            const [, label, value] = match;
            const parts = value.split(/,\s*(?![^()]*\))/);
            const chips = parts.every(part => part.split(/\s+/).length <= 4 && !/\.$/.test(part));
            row.appendChild(el('div', 'p-spec-label', label));
            row.appendChild(chips
                ? el('div', 'p-spec-value p-chips', parts.map(part => `<span class="p-chip">${marked.parseInline(part)}</span>`).join(''))
                : el('div', 'p-spec-value', marked.parseInline(value)));
            table.appendChild(row);
        });
        return table;
    }

    // "> **Label**: text" quotes become thought bubbles
    function renderBubble(token) {
        const text = token.text.trim();
        const match = text.match(/^\*\*(.+?)\*\*:?\s*([\s\S]*)$/);
        const label = match ? match[1].replace(/:$/, '') : 'Note';
        const body = match ? match[2] : text;
        return reveal(el('aside', 'p-bubble',
            `<span class="p-bubble-label">${label}</span><p>${marked.parseInline(body)}</p>`));
    }

    // Split markdown into one section per heading
    function parseSections(markdown) {
        const sections = [];
        let current = null;
        marked.lexer(markdown).forEach(token => {
            if (token.type === 'heading') {
                current = { title: token.text, tokens: [] };
                sections.push(current);
            } else if (token.type !== 'hr' && token.type !== 'space') {
                if (!current) {
                    current = { title: '', tokens: [] };
                    sections.push(current);
                }
                current.tokens.push(token);
            }
        });
        return sections;
    }

    function renderBody(section) {
        const body = el('div', 'p-section-body');
        section.tokens.forEach(token => {
            if (token.type === 'list' && /tech/i.test(section.title)) {
                body.appendChild(renderSpecs(token));
            } else if (token.type === 'list' && token.items.every(item => /^\*\*.+?\*\*:/.test(item.text))) {
                body.appendChild(renderFeatures(token));
            } else if (token.type === 'blockquote') {
                body.appendChild(renderBubble(token));
            } else {
                const wrap = el('div', null, marked.parse(token.raw));
                Array.from(wrap.children).forEach(child => body.appendChild(reveal(child)));
            }
        });
        if (/overview/i.test(section.title)) {
            const lead = body.querySelector('p');
            if (lead) lead.classList.add('p-lead');
        }
        return body;
    }

    // Render

    const keys = Object.keys(projects);
    const key = new URLSearchParams(window.location.search).get('name');
    const project = projects[key];

    if (!project) {
        document.getElementById('p-title').textContent = 'Project Not Found';
        document.getElementById('p-description').textContent = 'Sorry, the project you are looking for does not exist.';
        ['.p-hero-row', '.p-stage', '.p-intro', '#p-kicker'].forEach(sel => document.querySelector(sel).remove());
        return;
    }

    const index = keys.indexOf(key);
    document.title = `Fabian Heng | ${project.title}`;
    document.querySelector('.p-back').href = `index.html#${key}`;
    document.getElementById('p-kicker').textContent = `Project ${pad(index + 1)} of ${pad(keys.length)}`;
    document.getElementById('p-title').textContent = project.title;
    document.getElementById('p-description').textContent = project.description;

    document.querySelector('.p-hero .tech-stack').innerHTML = project.tech.map(tech =>
        `<span class="${tech.type}"><img src="img/svg/${tech.icon}" alt="">${tech.name}</span>`
    ).join('');

    const buttons = document.querySelector('.p-buttons');
    [['.button-blue', project.demoUrl], ['.button-dark-blue', project.githubUrl]].forEach(([sel, url]) => {
        const wrap = buttons.querySelector(sel);
        if (!url) return wrap.remove();
        wrap.querySelector('a').href = url;
        wrap.querySelector('a').target = '_blank';
        wrap.querySelector('a').rel = 'noopener';
    });

    const video = document.querySelector('.p-media video');
    if (project.video) {
        video.src = `img/work/video/${project.video}`;
        video.poster = `img/work/${project.image}`;
    } else {
        const img = el('img', 'p-splash-image');
        img.src = `img/work/${project.image}`;
        img.alt = project.title;
        video.replaceWith(img);
    }

    const sections = parseSections(project.content);
    const fineprint = sections.filter(s => /disclaimer/i.test(s.title));
    const numbered = sections.filter(s => !/disclaimer/i.test(s.title));
    const content = document.getElementById('p-content');

    numbered.forEach((section, i) => {
        const node = el('section', 'p-section');
        node.id = `section-${i + 1}`;
        if (section.title) {
            const head = reveal(el('div', 'p-section-head'), '24px');
            head.appendChild(el('span', 'p-section-num', pad(i + 1)));
            head.appendChild(el('h2', 'p-section-title', section.title));
            node.appendChild(head);
        }
        node.appendChild(renderBody(section));
        content.appendChild(node);
    });

    const titled = numbered.map((s, i) => [s, i]).filter(([s]) => s.title);
    document.getElementById('p-index').innerHTML = titled.map(([s, i]) =>
        `<li><a href="#section-${i + 1}"><b>${pad(i + 1)}</b>${s.title}</a></li>`
    ).join('');
    if (!titled.length) document.querySelector('.p-intro').remove();

    if (fineprint.length) {
        const fine = reveal(el('div', 'p-fineprint'), '16px');
        fineprint.forEach(s => s.tokens.forEach(token => {
            fine.insertAdjacentHTML('beforeend', marked.parse(token.raw));
        }));
        content.after(fine);
    }

    content.querySelectorAll('a[href^="http"]').forEach(a => {
        a.target = '_blank';
        a.rel = 'noopener';
    });

    const nextKey = keys[(index + 1) % keys.length];
    const prevKey = keys[(index - 1 + keys.length) % keys.length];
    const next = projects[nextKey];
    const nextEl = reveal(document.getElementById('p-next'));
    nextEl.innerHTML = `
        <span class="p-next-label">Up next</span>
        <a class="p-next-card" href="project.html?name=${nextKey}">
            <div class="p-next-text">
                <small>Project ${pad(keys.indexOf(nextKey) + 1)}</small>
                <h3>${next.title}</h3>
                <p>${next.description}</p>
                <span class="p-next-arrow"><i class="fa fa-long-arrow-right"></i></span>
            </div>
            <div class="p-next-shot"><img src="img/work/${next.image}" alt="${next.title}" loading="lazy"></div>
        </a>
        <div class="p-next-links">
            <a href="project.html?name=${prevKey}"><i class="fa fa-long-arrow-left"></i> ${projects[prevKey].title}</a>
            <a href="index.html#projects-container"><i class="fa fa-th-large"></i> All projects</a>
        </div>`;

    // Scroll effects

    const progress = document.querySelector('.p-progress');
    const media = document.querySelector('.p-media');
    const sectionEls = Array.from(content.querySelectorAll('.p-section'));
    let ticking = false;

    function update() {
        ticking = false;
        const vh = window.innerHeight;
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - vh;
        progress.style.setProperty('--progress', max > 0 ? Math.min(y / max, 1) : 0);

        // Demo grows to full size as it rises into view
        if (motion) {
            const rect = media.getBoundingClientRect();
            const t = Math.max(0, Math.min((vh - rect.top) / (vh * 0.7), 1));
            media.style.setProperty('--stage', (0.9 + t * 0.1).toFixed(4));
        }
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

    const revealer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            revealer.unobserve(e.target);
            e.target.classList.add('is-in');
        });
    }, { rootMargin: '0px 0px -15% 0px' });

    function startReveals() {
        sectionEls.forEach(s => revealer.observe(s));
    }

    // Hold section reveals until the page fade-in has started
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
