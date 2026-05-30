/**
 * ============================================================================
 * KSHITIZ MISHRA PORTFOLIO - CORE APPLICATION LOGIC
 * Architecture: Optimized event architecture handling interactions safely.
 * ============================================================================
 */

class AppController {
    constructor() {
        this.DOM = {
            preloader: document.getElementById('preloader'),
            progressBar: document.getElementById('progress-bar'),
            loadingText: document.getElementById('loading-text'),
            cursor: document.getElementById('cursor'),
            cursorBlur: document.getElementById('cursor-blur'),
            header: document.getElementById('header'),
            mobileBtn: document.getElementById('mobile-menu-btn'),
            mobileMenu: document.getElementById('mobile-menu'),
            canvas: document.getElementById('aurora-canvas')
        };
        
        this.state = {
            isLoaded: false,
            scrollY: window.scrollY,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            mouseX: window.innerWidth / 2,
            mouseY: window.innerHeight / 2,
            isMobileMenuOpen: false
        };

        this.bindEvents();
        this.initPreloader();
    }

    /**
     * ENHANCED PRELOADER LOADING PATTERN
     */
    initPreloader() {
        let progress = 0;
        
        // Simulates step loading architecture till 100%
        const interval = setInterval(() => {
            progress += Math.floor(Math.random() * 12) + 6;
            
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.finishLoading();
            }
            
            this.DOM.progressBar.style.width = `${progress}%`;
            this.DOM.loadingText.textContent = `${progress}%`;
        }, 80);
    }

    finishLoading() {
        setTimeout(() => {
            this.DOM.preloader.classList.add('fade-out');
            this.state.isLoaded = true;
            this.initCoreFeatures();
            setTimeout(() => this.DOM.preloader.remove(), 800);
        }, 400);
    }

    initCoreFeatures() {
        this.initCursor();
        this.initScrollReveal();
        this.initWebGLAurora();
        this.checkHeaderScroll();
    }

    bindEvents() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            this.state.scrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.checkHeaderScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });

        window.addEventListener('resize', () => {
            this.state.windowWidth = window.innerWidth;
            this.state.windowHeight = window.innerHeight;
            if (this.glCanvas) this.resizeCanvas();
        });

        if (this.DOM.mobileBtn) {
            this.DOM.mobileBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (this.state.isMobileMenuOpen) this.toggleMobileMenu();
            });
        });
    }

    /**
     * EXPERIMENTAL DESKTOP CURSOR INTERACTION
     */
    initCursor() {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        window.addEventListener('mousemove', (e) => {
            this.state.mouseX = e.clientX;
            this.state.mouseY = e.clientY;
            this.DOM.cursor.style.transform = `translate(${this.state.mouseX}px, ${this.state.mouseY}px)`;
        });

        const renderCursorBlur = () => {
            const currentX = parseFloat(this.DOM.cursorBlur.dataset.x || this.state.mouseX);
            const currentY = parseFloat(this.DOM.cursorBlur.dataset.y || this.state.mouseY);
            
            const lerpX = currentX + (this.state.mouseX - currentX) * 0.14;
            const lerpY = currentY + (this.state.mouseY - currentY) * 0.14;
            
            this.DOM.cursorBlur.dataset.x = lerpX;
            this.DOM.cursorBlur.dataset.y = lerpY;
            this.DOM.cursorBlur.style.transform = `translate(${lerpX}px, ${lerpY}px)`;
            
            requestAnimationFrame(renderCursorBlur);
        };
        requestAnimationFrame(renderCursorBlur);

        const interactables = document.querySelectorAll('a, button, .project-card, .contact-item, .image-circular-frame');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.DOM.cursor.classList.add('hovering');
                this.DOM.cursorBlur.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                this.DOM.cursor.classList.remove('hovering');
                this.DOM.cursorBlur.classList.remove('hovering');
            });
        });
    }

    /**
     * INTERSECTION OBSERVER FOR CONTENT ANIMATION
     */
    initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.05
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
    }

    checkHeaderScroll() {
        if (this.state.scrollY > 40) {
            this.DOM.header.classList.add('scrolled');
        } else {
            this.DOM.header.classList.remove('scrolled');
        }
        this.updateActiveNav();
    }

    updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (this.state.scrollY >= sectionTop && this.state.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    toggleMobileMenu() {
        this.state.isMobileMenuOpen = !this.state.isMobileMenuOpen;
        this.DOM.mobileBtn.classList.toggle('active');
        this.DOM.mobileMenu.classList.toggle('active');
        document.body.style.overflow = this.state.isMobileMenuOpen ? 'hidden' : '';
    }

    /**
     * INTERACTIVE AURORA CANVAS SYSTEM
     */
    initWebGLAurora() {
        const ctx = this.DOM.canvas.getContext('2d');
        this.glCanvas = { ctx, time: 0 };
        this.resizeCanvas();
        this.animateAurora();
    }

    resizeCanvas() {
        this.DOM.canvas.width = this.state.windowWidth;
        this.DOM.canvas.height = this.state.windowHeight;
    }

    animateAurora() {
        const { ctx } = this.glCanvas;
        const w = this.state.windowWidth;
        const h = this.state.windowHeight;
        
        ctx.clearRect(0, 0, w, h);
        this.glCanvas.time += 0.004;
        
        // Purple Cluster
        const x1 = w * 0.5 + Math.cos(this.glCanvas.time) * w * 0.25;
        const y1 = h * 0.5 + Math.sin(this.glCanvas.time * 0.7) * h * 0.25;
        const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, w * 0.65);
        grad1.addColorStop(0, 'rgba(112, 0, 255, 0.35)');
        grad1.addColorStop(1, 'rgba(112, 0, 255, 0)');
        ctx.fillStyle = grad1;
        ctx.fillRect(0, 0, w, h);

        // Cyan Cluster
        const x2 = w * 0.75 + Math.cos(this.glCanvas.time * 1.1) * w * 0.15;
        const y2 = h * 0.35 + Math.sin(this.glCanvas.time * 0.8) * h * 0.3;
        const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, w * 0.55);
        grad2.addColorStop(0, 'rgba(0, 242, 255, 0.25)');
        grad2.addColorStop(1, 'rgba(0, 242, 255, 0)');
        ctx.fillStyle = grad2;
        ctx.fillRect(0, 0, w, h);

        // Ambient Mouse Glow Track
        if (this.state.isLoaded) {
            const rx = this.state.mouseX;
            const ry = this.state.mouseY;
            const grad3 = ctx.createRadialGradient(rx, ry, 0, rx, ry, w * 0.25);
            grad3.addColorStop(0, 'rgba(176, 0, 255, 0.12)');
            grad3.addColorStop(1, 'rgba(176, 0, 255, 0)');
            ctx.fillStyle = grad3;
            ctx.fillRect(0, 0, w, h);
        }

        requestAnimationFrame(() => this.animateAurora());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.PortfolioApp = new AppController();
});
