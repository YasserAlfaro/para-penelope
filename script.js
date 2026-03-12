// Animación al hacer scroll para que las fotos aparezcan suavemente
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.style.opacity = "1";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.photo-card').forEach((card) => {
    observer.observe(card);
});