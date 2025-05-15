//! Sección de nav



//! Sección de Home
//Typing effect (animación de máquina de escribir)

const animacion = ["Desarrolladora Web", "Laura Navarrete"]; 

let indice = 0; //Indice de control (indice 0 - array animacion)
let posicion = 0;// Indice de control (posicion del cursor)
let typing = true; // Interruptor (Escribir (True) o borrar(False))

const typingElemento = document.getElementById('typing'); //Conexión con HTML (id)
const cursor = document.getElementById('cursor'); //Conexión con HTML (id)

function typeRole() {
    if (typing) { 

        if (posicion < animacion[indice].length) {
            typingElemento.textContent += animacion[indice][posicion];//Si hay caracteres por escribir
            posicion++; //Incrementa posicion
            setTimeout(typeRole, 90); //Tiempo de duración
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else { //Borrar
        if (posicion > 0) {
            typingElemento.textContent = animacion[indice].substring(0, posicion - 1);
            posicion--;
            setTimeout(typeRole, 40);
        } else {
            typing = true;
            indice = (indice + 1) % animacion.length;
            setTimeout(typeRole, 400);
        }
    }
}
document.addEventListener("DOMContentLoaded", typeRole);

document.getElementById('btnLeerMas').addEventListener('click', function() {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

//! Sección de About Me

//*Boton Portafolio

document.getElementById('btnPortafolio').addEventListener('click', function() {
    document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' });
});

//* Boton CV

document.getElementById('btnDescargar').addEventListener('click', function() {
    // Ruta relativa al archivo PDF en tu carpeta de desarrollo
    const pdfUrl = '/CV/CV-LauraNavarrete.pdf';
    const fileName = 'CV-LauraNavarrete.pdf'; // nombre con que se guardará

    // Crear enlace temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;

    // Agregar al DOM, disparar clic y luego remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});




//!Sección de Herramientas y Habilidades

// Animacion de skillbar

const skills = {
    frontend: [
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS', percentage: 65 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'Bootstrap5', percentage: 70 }
    ],
    backend: [
        { name: 'Java', percentage: 65 },
        { name: 'SQL', percentage: 65 },
        { name: 'Python', percentage: 70 },
        { name: 'C#', percentage: 50 },

    ]
};

const skillsContainer = document.getElementById('skills-container');
const categoryButtons = document.querySelectorAll('.category-button'); 

function createSkillBar(skill) {
    const skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');
    skillBar.innerHTML = `
        <span class="skill-name">${skill.name}</span>
        <div class="bar-container">
            <div class="bar" style="width: 0%;"></div>
            <span class="skill-percentage">${skill.percentage}%</span>
        </div>
    `;
    return skillBar;
}

function animateSkillBar(skillBar, percentage) {
    const bar = skillBar.querySelector('.bar');
    bar.style.width = `${percentage}%`;
    bar.style.transition = 'width 1s ease-out';
}

function displaySkills(category) {
    skillsContainer.innerHTML = '';
    skills[category].forEach(skill => {
        const skillBar = createSkillBar(skill);
        skillsContainer.appendChild(skillBar);
    });

      // Animación
    setTimeout(() => {
        const skillBars = skillsContainer.querySelectorAll('.skill-bar');
        skillBars.forEach((skillBar, index) => {
            animateSkillBar(skillBar, skills[category][index].percentage);
        });
    }, 50); 
}

categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        categoryButtons.forEach(btn => btn.classList.remove('active')); 
        this.classList.add('active');
        const category = this.dataset.category;
        displaySkills(category);
    });
});
displaySkills('frontend');



//! Sección de portafolio