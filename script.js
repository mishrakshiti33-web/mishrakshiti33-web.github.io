document.addEventListener("DOMContentLoaded", () => {
  /* --- 8-SECOND CINEMATIC LOADING ANIMATION --- */
  const loaderOverlay = document.getElementById("loader-overlay");
  const loaderText = document.getElementById("loader-text");

  // The 4 stages mapping to 0-8 seconds
  const stages = [
    { text: "KSHITIZ MISHRA", time: 0 },
    { text: "APP & WEB DEVELOPER", time: 2000 },
    { text: "GENERATIVE AI SPECIALIST", time: 4000 },
    { text: "WELCOME TO MY WEBSITE", time: 6000 }
  ];

  stages.forEach((stage) => {
    setTimeout(() => {
      if (loaderText) {
        loaderText.classList.remove("active");
        setTimeout(() => {
          loaderText.textContent = stage.text;
          loaderText.classList.add("active");
        }, 400); // 400ms blur transition before text switch
      }
    }, stage.time);
  });

  // End loader at exactly 8 seconds
  setTimeout(() => {
    if (loaderOverlay) {
      loaderOverlay.style.opacity = '0';
      setTimeout(() => {
        loaderOverlay.classList.add("hidden");
        document.body.style.overflow = "auto";
      }, 1200);
    }
  }, 8000);

  // Prevent scrolling during loader animation
  document.body.style.overflow = "hidden";

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
  setTimeout(revealOnScroll, 8500); // Initial check after intro loader completes

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
});

/* --- CERTIFICATE LIGHTBOX FUNCTIONS --- */
function openCertModal(imageSrc) {
  const lightbox = document.getElementById("cert-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightboxImg) lightboxImg.src = imageSrc;
  if (lightbox) lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const lightbox = document.getElementById("cert-lightbox");
  if (lightbox) lightbox.classList.add("hidden");
  document.body.style.overflow = "auto";
}

const certLightbox = document.getElementById('cert-lightbox');
if (certLightbox) {
  certLightbox.addEventListener('click', function(e) {
    if (e.target === this) {
      closeCertModal();
    }
  });
}
