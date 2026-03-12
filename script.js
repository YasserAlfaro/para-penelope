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


// --- Función para crear la lluvia de corazones ---

function createHeartShower() {
    // 1. Crear el contenedor principal si no existe
    let container = document.querySelector('.heart-container');
    if (!container) {
        container = document.createElement('div');
        container.classList.add('heart-container');
        document.body.appendChild(container);
    }

    // 2. Función interna para generar UN corazón
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart-emoji');
        heart.innerText = '❤️'; // Puedes cambiarlo por 💖 o 🌸 si prefieres

        // Posición horizontal aleatoria (0% a 100% del ancho)
        heart.style.left = Math.random() * 100 + 'vw';

        // Tamaño aleatorio (entre 15px y 35px)
        const size = Math.random() * 20 + 15;
        heart.style.fontSet = size + 'px';

        // Duración de la caída aleatoria (entre 3s y 6s) para que no caigan todos igual
        const duration = Math.random() * 3 + 3;
        heart.style.animationDuration = duration + 's';

        // Un pequeño retraso aleatorio para que no salgan todos a la vez
        heart.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(heart);

        // 3. Limpieza: Eliminar el elemento del DOM después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, (duration + 2) * 1000); // Duración + delay + margen de seguridad
    }

    // 4. Generar muchos corazones al inicio
    for (let i = 0; i < 50; i++) {
        createHeart();
    }

    // 5. Opcional: Seguir generando corazones poco a poco cada segundo
    const intervalId = setInterval(createHeart, 300);

    // 6. Opcional: Detener la generación continua después de 10 segundos
    // (Para no saturar el navegador si se queda mucho tiempo en el inicio)
    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);
}

// --- Ejecutar el efecto cuando la página cargue ---
window.addEventListener('load', createHeartShower);