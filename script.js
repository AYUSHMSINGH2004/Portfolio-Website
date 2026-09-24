// Main JavaScript for Interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight active navigation link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Intersection Observer for Fade-in Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animateElements = document.querySelectorAll('.glass-card, .hero-content, .hero-image');
    animateElements.forEach(el => {
        el.style.opacity = '0'; // hide initially
        observer.observe(el);
    });
});
