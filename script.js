document.documentElement.classList.add("js-enabled");

document.addEventListener("DOMContentLoaded", () => {
  /* --- SHORTENED CINEMATIC LOADING ANIMATION --- */
  const loaderOverlay = document.getElementById("loader-overlay");
  const loaderText = document.getElementById("loader-text");

  const LOADER_DURATION = 4800;

  // The 4 stages mapping to ~0-4.8 seconds
  const stages = [
    { text: "KSHITIZ MISHRA", time: 0 },
    { text: "APP & WEB DEVELOPER", time: 1200 },
    { text: "GENERATIVE AI SPECIALIST", time: 2400 },
    { text: "WELCOME TO MY WEBSITE", time: 3600 }
  ];

  stages.forEach((stage) => {
    setTimeout(() => {
      if (!loaderText) return;
      loaderText.classList.remove("active");
      setTimeout(() => {
        loaderText.textContent = stage.text;
        loaderText.classList.add("active");
      }, 250);
    }, stage.time);
  });

  // End loader at ~4.8 seconds
  setTimeout(() => {
    if (!loaderOverlay) {
      document.body.style.overflow = "";
      return;
    }
    loaderOverlay.style.opacity = "0";
    setTimeout(() => {
      loaderOverlay.classList.add("hidden");
      document.body.style.overflow = "";
    }, 600);
  }, LOADER_DURATION);

  // Prevent scrolling during loader animation
  if (loaderOverlay) {
    document.body.style.overflow = "hidden";
  }

  /* --- NAVIGATION & MOBILE MENU --- */
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navLinks) navLinks.classList.remove("active");
      if (hamburger) {
        const icon = hamburger.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  });

  /* --- SCROLL REVEAL ANIMATIONS --- */
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  setTimeout(revealOnScroll, LOADER_DURATION + 200); // Initial check after intro loader completes

  /* --- CONTACT FORM SUBMISSION HANDLER --- */
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.textContent = "Message sent successfully! I will get back to you soon.";
        formStatus.classList.add("success");
      }
      contactForm.reset();

      setTimeout(() => {
        if (formStatus) {
          formStatus.classList.remove("success");
          formStatus.textContent = "";
        }
      }, 5000);
    });
  }
  const lightbox = document.getElementById("cert-lightbox");

  function closeCertModal() {
    if (lightbox) {
      lightbox.classList.add("hidden");
    }
    document.body.style.overflow = "";
  }

  window.openCertModal = function openCertModal(imageSrc) {
    if (!lightbox || !imageSrc) return;
    const lightboxImg = document.getElementById("lightbox-img");
    if (!lightboxImg) return;
    lightboxImg.src = imageSrc;
    lightbox.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  };

  window.closeCertModal = closeCertModal;

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeCertModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.classList.contains("hidden")) {
      closeCertModal();
    }
  });
});
