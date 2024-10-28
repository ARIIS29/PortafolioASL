function showStep(stepNumber) {
    // Ocultar todas las secciones
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Mostrar la sección seleccionada
    document.getElementById('step' + stepNumber).classList.add('active');
}
// Función para agregar la clase "active" al enlace de navegación correspondiente
function highlightNavigation() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // Ajusta el valor según el diseño de tu página
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}
//Funcion para abarcar toda la sección
document.addEventListener('DOMContentLoaded', () => {
    highlightNavigation();

    window.addEventListener('scroll', highlightNavigation);
});

//Funcion para añadir la linea y poner los h2 en negrita
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const h2 = section.querySelector('h2.underline'); // Buscar el h2 con la clase underline dentro de la sección
        
        if (h2) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        h2.classList.add('active');
                    } else {
                        h2.classList.remove('active');
                    }
                });
            }, { threshold: 0.5 }); // Detecta cuando el 50% de la sección es visible

            observer.observe(section);
        }
    });
});

// Funcion para wizard "PROYECTOS"
function showStep(stepNumber) {
    // Ocultar todas las secciones
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Mostrar la sección seleccionada
    document.getElementById('step' + stepNumber).classList.add('active');

    // Actualizar los botones del menú
    const buttons = document.querySelectorAll('.menu-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Añadir clase 'active' al botón correspondiente
    buttons[stepNumber - 1].classList.add('active');
}

// Mostrar la primera sección al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    showStep(1); // Muestra la primera sección
});
