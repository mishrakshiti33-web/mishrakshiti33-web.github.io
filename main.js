/* ============================================================
   KSHITIZ MISHRA — PORTFOLIO JS
   Modular, performant, no dependencies
   ============================================================ */

'use strict';

/* ── Tab Content Definitions ──────────────────────────────── */
const tabContent = {

  about: `
    <div class="section-header reveal">
      <span class="section-label">Introduction</span>
      <h3>About Me</h3>
    </div>

    <p class="bio-text reveal">
      Hello — I'm <strong>Kshitiz Mishra</strong>, an <strong>AI Agent Developer</strong> and
      <strong>Web Developer</strong> based in Nepal. I build intelligent automation systems and
      modern digital products that solve real problems with precision and craft.
    </p>
    <p class="bio-text reveal">
      My work sits at the intersection of language models, agentic frameworks, and high-quality
      web engineering. I focus on delivering systems that are not only powerful under the hood,
      but refined in experience and reliable in production.
    </p>
    <p class="bio-text reveal">
      I am committed to continuous learning, clean architecture, and creating solutions that
      last. Whether building an intelligent agent or a customer-facing product, I bring the
      same standard of craft to every line of code.
    </p>

    <div class="skills reveal">
      <span>AI Agents</span>
      <span>LangChain</span>
      <span>JavaScript</span>
      <span>React</span>
      <span>Node.js</span>
      <span>Python</span>
      <span>REST APIs</span>
      <span>NLP</span>
      <span>Web Development</span>
      <span>UI / UX Design</span>
    </div>
  `,

  services: `
    <div class="section-header reveal">
      <span class="section-label">What I Do</span>
      <h3>Services</h3>
    </div>

    <div class="services-grid">
      <article class="service-card reveal">
        <div class="service-icon" aria-hidden="true">&#9881;</div>
        <div class="service-title">AI Agent Development</div>
        <p class="service-desc">
          Custom intelligent agents built with LangChain, tool-use pipelines, and
          multi-step reasoning. From task automation to conversational interfaces.
        </p>
      </article>

      <article class="service-card reveal">
        <div class="service-icon" aria-hidden="true">&#9734;</div>
        <div class="service-title">Web Development</div>
        <p class="service-desc">
          Responsive, performant websites and web applications built with modern
          standards. Clean code, scalable architecture, and polished design.
        </p>
      </article>

      <article class="service-card reveal">
        <div class="service-icon" aria-hidden="true">&#9670;</div>
        <div class="service-title">NLP Integration</div>
        <p class="service-desc">
          Integrating natural language processing capabilities into existing products —
          chatbots, document analysis, intent classification, and more.
        </p>
      </article>

      <article class="service-card reveal">
        <div class="service-icon" aria-hidden="true">&#9672;</div>
        <div class="service-title">API & Backend Systems</div>
        <p class="service-desc">
          Robust REST API design and backend services using Node.js and Python.
          Reliable, documented, and built for scale.
        </p>
      </article>
    </div>
  `,

  projects: `
    <div class="section-header reveal">
      <span class="section-label">Selected Work</span>
      <h3>Projects</h3>
    </div>

    <div class="project-list">

      <article class="project-item reveal">
        <div class="project-accent"></div>
        <div class="project-header">
          <span class="project-name">Zynora AI</span>
          <span class="project-tag">Flagship</span>
        </div>
        <p class="project-desc">
          A powerful AI agent built with LangChain and advanced NLP pipelines. Zynora
          provides intelligent conversation, task automation, and data-driven insights — 
          showcasing cutting-edge agentic capabilities in a production environment.
        </p>
      </article>

      <article class="project-item reveal">
        <div class="project-accent"></div>
        <div class="project-header">
          <span class="project-name">Portfolio Platform</span>
          <span class="project-tag">Web</span>
        </div>
        <p class="project-desc">
          A modern, animated portfolio with tab-based navigation, scroll-driven
          animations, and a premium design system. Built from scratch with vanilla
          HTML, CSS, and JavaScript.
        </p>
      </article>

      <article class="project-item reveal">
        <div class="project-accent"></div>
        <div class="project-header">
          <span class="project-name">Weather Dashboard</span>
          <span class="project-tag">API</span>
        </div>
        <p class="project-desc">
          Real-time weather application aggregating data from multiple APIs. Features
          location-aware forecasts, dynamic UI states, and full mobile responsiveness.
        </p>
      </article>

      <article class="project-item reveal">
        <div class="project-accent"></div>
        <div class="project-header">
          <span class="project-name">TaskManager Pro</span>
          <span class="project-tag">Productivity</span>
        </div>
        <p class="project-desc">
          An AI-enhanced task management system with smart scheduling, priority
          inference, and productivity analytics. Built with React and Node.js.
        </p>
      </article>

      <article class="project-item reveal">
        <div class="project-accent"></div>
        <div class="project-header">
          <span class="project-name">Business Landing Pages</span>
          <span class="project-tag">Design</span>
        </div>
        <p class="project-desc">
          Conversion-focused landing pages for startups and enterprises. SEO-optimised,
          analytics-integrated, and built to perform under real traffic conditions.
        </p>
      </article>

    </div>
  `,

  stack: `
    <div class="section-header reveal">
      <span class="section-label">Tools & Technologies</span>
      <h3>Tech Stack</h3>
    </div>

    <div class="stack-section reveal">
      <p class="stack-category">AI & Machine Learning</p>
      <div class="stack-grid">
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">LangChain</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">OpenAI API</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">NLP</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">Prompt Eng.</span></div>
      </div>
    </div>

    <div class="stack-section reveal">
      <p class="stack-category">Frontend</p>
      <div class="stack-grid">
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">React</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">JavaScript</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">HTML / CSS</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">UI / UX</span></div>
      </div>
    </div>

    <div class="stack-section reveal">
      <p class="stack-category">Backend & Infrastructure</p>
      <div class="stack-grid">
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">Node.js</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">Python</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">REST APIs</span></div>
        <div class="stack-item"><span class="stack-icon">&#9679;</span><span class="stack-name">Git</span></div>
      </div>
    </div>

    <div class="stack-section reveal">
      <p class="stack-category">Core Proficiencies</p>
      <div class="proficiency-list">
        <div class="prof-row reveal">
          <div class="prof-meta">
            <span class="prof-name">AI Agent Development</span>
            <span class="prof-pct">92%</span>
          </div>
          <div class="prof-track"><div class="prof-fill" data-width="92"></div></div>
        </div>
        <div class="prof-row reveal">
          <div class="prof-meta">
            <span class="prof-name">Web Development</span>
            <span class="prof-pct">88%</span>
          </div>
          <div class="prof-track"><div class="prof-fill" data-width="88"></div></div>
        </div>
        <div class="prof-row reveal">
          <div class="prof-meta">
            <span class="prof-name">NLP & LLM Integration</span>
            <span class="prof-pct">85%</span>
          </div>
          <div class="prof-track"><div class="prof-fill" data-width="85"></div></div>
        </div>
        <div class="prof-row reveal">
          <div class="prof-meta">
            <span class="prof-name">UI / UX Design</span>
            <span class="prof-pct">78%</span>
          </div>
          <div class="prof-track"><div class="prof-fill" data-width="78"></div></div>
        </div>
      </div>
    </div>
  `,

  contact: `
    <div class="section-header reveal">
      <span class="section-label">Get In Touch</span>
      <h3>Contact</h3>
    </div>

    <p class="contact-intro reveal">
      Have a project in mind or want to explore a collaboration? I respond promptly
      and am always open to meaningful conversations about technology and opportunity.
    </p>

    <div class="contact-grid">
      <div class="contact-card reveal">
        <div class="contact-icon-box" aria-hidden="true">&#9993;</div>
        <div class="contact-info">
          <span class="contact-label">Email</span>
          <span class="contact-value">kshitizmishra528@gmail.com</span>
        </div>
      </div>

      <div class="contact-card reveal">
        <div class="contact-icon-box" aria-hidden="true">&#9918;</div>
        <div class="contact-info">
          <span class="contact-label">Instagram</span>
          <span class="contact-value">@kshitiz.god</span>
        </div>
      </div>
    </div>

    <div class="cta-block reveal">
      <p class="cta-heading">Ready to build something exceptional?</p>
      <p class="cta-sub">
        Send a detailed message about your project and I will get back to you within 24 hours.
      </p>
      <div class="cta-actions">
        <a
          href="mailto:kshitizmishra528@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20Portfolio&body=Hello%20Kshitiz%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%0A%0AProject%20Overview%3A%0A%0ABudget%20Range%3A%0A%0ATimeline%3A%0A%0ALooking%20forward%20to%20hearing%20from%20you."
          class="btn btn-primary"
          aria-label="Send email to Kshitiz Mishra"
        >
          Send Message
        </a>
        <a
          href="https://instagram.com/kshitiz.god"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-secondary"
          aria-label="Visit Kshitiz on Instagram"
        >
          Instagram
        </a>
        <button
          id="shareBtn"
          class="btn btn-secondary"
          aria-label="Share this portfolio"
        >
          Share Portfolio
        </button>
      </div>
    </div>
  `

};

/* ── Tab Manager ──────────────────────────────────────────── */
const TabManager = (() => {
  let currentTab = null;
  let indicatorInitialised = false;

  function moveIndicator(btn) {
    const indicator = document.getElementById('tabIndicator');
    if (!indicator || !btn) return;
    const tabsRect = btn.closest('.tabs').getBoundingClientRect();
    const btnRect  = btn.getBoundingClientRect();
    indicator.style.left  = (btnRect.left - tabsRect.left) + 'px';
    indicator.style.width = btnRect.width + 'px';
    if (!indicatorInitialised) {
      indicator.style.transition = 'none';
      indicatorInitialised = true;
      requestAnimationFrame(() => {
        indicator.style.transition = '';
      });
    }
  }

  function show(name) {
    if (currentTab === name) return;
    currentTab = name;

    /* Update button states */
    const buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(btn => {
      const isActive = btn.dataset.tab === name;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
      if (isActive) moveIndicator(btn);
    });

    /* Inject content */
    const contentEl = document.getElementById('tab-content');
    contentEl.innerHTML = tabContent[name] || '';
    contentEl.classList.remove('tab-enter');
    void contentEl.offsetWidth; /* force reflow */
    contentEl.classList.add('tab-enter');

    /* Post-render hooks */
    requestAnimationFrame(() => {
      initReveal();
      initProficiencyBars();

      if (name === 'about') {
        animateCounters();
      }

      if (name === 'contact') {
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) shareBtn.addEventListener('click', shareProfile);
      }
    });
  }

  return { show };
})();

/* ── Scroll Reveal (IntersectionObserver) ─────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Proficiency Bar Animation ────────────────────────────── */
function initProficiencyBars() {
  const fills = document.querySelectorAll('.prof-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.dataset.width || '0';
        entry.target.style.width = target + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

/* ── Counter Animation ────────────────────────────────────── */
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }

    requestAnimationFrame(step);
  });
}

/* ── Tab Indicator on Resize ──────────────────────────────── */
function syncIndicatorOnResize() {
  const activeBtn = document.querySelector('.tabs button.active');
  if (!activeBtn) return;
  const indicator = document.getElementById('tabIndicator');
  if (!indicator) return;
  const tabsRect = activeBtn.closest('.tabs').getBoundingClientRect();
  const btnRect  = activeBtn.getBoundingClientRect();
  indicator.style.transition = 'none';
  indicator.style.left  = (btnRect.left - tabsRect.left) + 'px';
  indicator.style.width = btnRect.width + 'px';
  requestAnimationFrame(() => { indicator.style.transition = ''; });
}

/* ── Share Profile ────────────────────────────────────────── */
function shareProfile() {
  const url   = window.location.href;
  const title = 'Kshitiz Mishra — AI Agent & Web Developer';
  const text  = 'Check out this developer portfolio — AI agents, modern web development, Nepal.';

  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url).then(() => {
      showToast('Portfolio URL copied to clipboard.');
    }).catch(() => {
      showToast('Copy this URL: ' + url);
    });
  }
}

/* ── Toast Notification ───────────────────────────────────── */
function showToast(message) {
  const existing = document.getElementById('portfolioToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'portfolioToast';
  toast.textContent = message;
  Object.assign(toast.style, {
    position:        'fixed',
    bottom:          '28px',
    left:            '50%',
    transform:       'translateX(-50%) translateY(20px)',
    background:      'rgba(19,118,255,0.95)',
    color:           '#fff',
    padding:         '12px 24px',
    borderRadius:    '999px',
    fontSize:        '0.88rem',
    fontWeight:      '600',
    fontFamily:      'DM Sans, sans-serif',
    boxShadow:       '0 8px 32px rgba(0,0,0,0.4)',
    zIndex:          '9998',
    opacity:         '0',
    transition:      'opacity 0.3s ease, transform 0.3s ease',
    backdropFilter:  'blur(8px)',
    border:          '1px solid rgba(255,255,255,0.15)',
    pointerEvents:   'none',
    whiteSpace:      'nowrap',
  });

  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity   = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  setTimeout(() => {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 3000);
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {

  /* Year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Tab clicks */
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => TabManager.show(btn.dataset.tab));
  });

  /* Default tab */
  TabManager.show('about');

  /* Counter animation fires on first load (about tab) */
  animateCounters();

  /* Resize sync */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncIndicatorOnResize, 80);
  });

});
