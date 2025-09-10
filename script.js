// ===== Smooth scrolling for navbar links =====
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('active');
    });
});

// ===== Mobile menu toggle (hamburger) =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// ===== Animate skill bars when scrolling =====
const skillBars = document.querySelectorAll('.skill-bar');
function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < triggerBottom) {
            bar.style.width = bar.getAttribute('data-skill');
        }
    });
}

// ===== Animate elements on scroll =====
const animatedElements = document.querySelectorAll('.animate');
function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    animatedElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

// ===== Certificate Lightbox =====
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const closeBtn = document.createElement('span');
closeBtn.innerHTML = "&times;";
closeBtn.classList.add('close-btn');
lightbox.appendChild(closeBtn);

const img = document.createElement('img');
lightbox.appendChild(img);

document.querySelectorAll('.achievement-item img').forEach(certificate => {
    certificate.addEventListener('click', () => {
        lightbox.classList.add('active');
        img.src = certificate.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== img && e.target !== closeBtn) {
        lightbox.classList.remove('active');
    }
});

// ===== Typewriter Effect for Hero Section =====
const typewriterText = document.querySelector('.typewriter');
const sentence = "Creative, Passionate, and Driven to Make an Impact.";
let i = 0;

function typeWriter() {
    if (i < sentence.length) {
        typewriterText.textContent += sentence.charAt(i);
        i++;
        setTimeout(typeWriter, 80); // speed of typing
    }
}
window.addEventListener('load', typeWriter);

// ===== Run animations on scroll & load =====
window.addEventListener('scroll', () => {
    animateSkills();
    animateOnScroll();
});
window.addEventListener('load', () => {
    animateSkills();
    animateOnScroll();
});
