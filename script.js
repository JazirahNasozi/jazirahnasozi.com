// Wait until DOM ready
document.addEventListener('DOMContentLoaded', () => {

  /* ------------------ Smooth scrolling for internal links ------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (!target || target === '#') return;
      const el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // close mobile menu if open
      const navLinks = document.getElementById('nav-links');
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });

  /* ------------------ Mobile menu toggle ------------------ */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  /* ------------------ Animate skill bars ------------------ */
  const skillBars = document.querySelectorAll('.skill-bar');
  function animateSkills() {
    const triggerBottom = window.innerHeight * 0.85;
    skillBars.forEach(bar => {
      const top = bar.getBoundingClientRect().top;
      if (top < triggerBottom) {
        const value = bar.getAttribute('data-skill') || '0%';
        bar.style.width = value;
      }
    });
  }

  /* ------------------ Animate elements on scroll ------------------ */
  const animatedEls = document.querySelectorAll('.animate');
  function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    animatedEls.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) el.classList.add('visible');
    });
  }

  /* ------------------ Lightbox for certificates ------------------ */
  const viewBtns = document.querySelectorAll('.view-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = lightbox ? lightbox.querySelector('.close-btn') : null;
  const backBtn = document.getElementById('back-btn');

  function openLightbox(src, altText = 'Certificate') {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = altText;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // prevent background scroll
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = ''; // restore
  }

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-img');
      openLightbox(src);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backBtn) backBtn.addEventListener('click', closeLightbox);

  // click outside image to close
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ------------------ Typewriter effect ------------------ */
  const typingEl = document.getElementById('typing-text');
  const typingText = "Creative Tech Enthusiast | Digital Literacy Advocate";
  let ti = 0;
  function typeWriter() {
    if (!typingEl) return;
    if (ti < typingText.length) {
      typingEl.textContent += typingText.charAt(ti);
      ti++;
      setTimeout(typeWriter, 80);
    } else {
      // keep caret blinking by removing border after done or you can keep it
      // typingEl.style.borderRight = '2px solid rgba(244,196,48,0.9)';
    }
  }

  /* ------------------ Back to Home button ------------------ */
  const backToTopBtn = document.getElementById('back-to-top');
  function handleScrollButtons() {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) backToTopBtn.classList.add('show');
    else backToTopBtn.classList.remove('show');
  }
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      const home = document.getElementById('home');
      if (home) home.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------ Initial run and listeners ------------------ */
  function onScrollHandlers() {
    animateSkills();
    animateOnScroll();
    handleScrollButtons();
  }

  // start on load
  typeWriter();
  onScrollHandlers();

  // on scroll
  window.addEventListener('scroll', onScrollHandlers);
  // on resize (run again so percentages can adapt)
  window.addEventListener('resize', onScrollHandlers);

});

// ===== Close mobile menu after clicking a link =====
const navLinks = document.querySelectorAll('nav ul li a');
const navMenu = document.querySelector('nav ul');
const menuToggle = document.getElementById('menu-toggle');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close only if mobile menu is open
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

