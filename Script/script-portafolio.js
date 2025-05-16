//! Sección de portafolio

// Boton demo

const button0 = document.getElementById('btnDemo0');
button0.addEventListener('click', function() {
  // Cambia la ubicación del navegador a la URL deseada
    window.location.href = 'https://github.com/Kilerwin/hakaton-1-generation';
});

const button1 = document.getElementById('btnDemo1');
button1.addEventListener('click', function() {
  // Cambia la ubicación del navegador a la URL deseada
    window.location.href = 'https://github.com/Llnavarreteg23/HobbVerse';
});

const button2 = document.getElementById('btnDemo2');
button2.addEventListener('click', function() {
  // Cambia la ubicación del navegador a la URL deseada
    window.location.href = 'https://github.com/Llnavarreteg23/Conv-Temperature';
});

//Modal

// 1. Datos de tus proyectos
const projects = {
    FitNation: {
        img: '/Imagenes/Proyecto0.png',
        title: 'Fit Nation',
        desc: 'Landing page dinámica diseñada para impulsar las ventas de productos deportivos, equipando a los usuarios para alcanzar sus metas de fitness.',
        tags: ['Javascript', 'Bootstrap', 'CSS'],
        demo: 'https://github.com/Kilerwin/hakaton-1-generation'
    },
    HobbVerse: {
        img: '/Imagenes/Proyecto1.png',
        title: 'HobbVerse',
        desc: 'Plataforma de e-commerce robusta para el mundo de los hobbies. Implementación backend con Spring Boot Java y gestión de datos a través de una base de datos dedicada para una experiencia de usuario escalable y eficiente',
        tags: ['Javascript', 'CSS', 'Bootstrap', 'Java', 'SQL'],
        demo: 'https://github.com/Llnavarreteg23/HobbVerse'
    },

    ConversorT: {
        img: '/Imagenes/Proyecto2.png',
        title: 'Conversor de Temperatura',
        desc: 'Conversor de Temperatura: Una utilidad web minimalista para convertir valores entre grados Celsius, Fahrenheit y Kelvin de forma instantánea.',
        tags: ['Javascript', 'CSS', 'Bootstrap'],
        demo: 'https://github.com/Llnavarreteg23/Conv-Temperature'
    }

};

// 2. Función para abrir el modal y rellenar los datos
function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;
    document.getElementById('modalImg').src = project.img;
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDesc').textContent = project.desc;

  // Render tags
    const tagsDiv = document.getElementById('modalTags');
    tagsDiv.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        tagsDiv.appendChild(span);
});

  // Demo link
document.getElementById('modalDemo').href = project.demo;

  // Mostrar modal
document.getElementById('projectModal').style.display = 'block';
}

// 3. Cerrar el modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('projectModal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
};

// 4. Asignar evento a todos los botones "View More"
document.querySelectorAll('.btnviewMore').forEach(btn => {
    btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        openModal(id);
    });
});
