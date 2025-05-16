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