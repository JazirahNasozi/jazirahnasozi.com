// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars when scrolling
const skillBars = document.querySelectorAll('.skill-bar');
function animateSkills() {
    const triggerBottom = window.innerHeight * 0.8;
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if(barTop < triggerBottom) {
            bar.style.width = bar.getAttribute('data-skill');
        }
    });
}

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animate');
function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    animatedElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if(elTop < triggerBottom) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', () => {
    animateSkills();
    animateOnScroll();
});
window.addEventListener('load', () => {
    animateSkills();
    animateOnScroll();
});
