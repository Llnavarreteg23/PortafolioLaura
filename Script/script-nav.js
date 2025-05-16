//! Sección de nav

const translations = {
  es: {
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    language: "Idioma ▼",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    language: "Language ▼",
  }
};


// Cambia el texto de los elementos con data-i18n
function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('lang', lang);
}

// Mostrar/ocultar el menú de idioma
document.getElementById('nav-idioma').addEventListener('click', function(e) {
  e.preventDefault();
  const menu = document.getElementById('lang-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Cambiar idioma al hacer clic en una opción
document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    setLanguage(this.getAttribute('data-lang'));
    document.getElementById('lang-menu').style.display = 'none';
  });
});

// Cerrar el menú si se hace clic fuera
document.addEventListener('click', function(e) {
  if (!e.target.closest('#nav-idioma') && !e.target.closest('#lang-menu')) {
    document.getElementById('lang-menu').style.display = 'none';
  }
});

// Al cargar la página, aplica el idioma guardado o español por defecto
document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'es';
  setLanguage(lang);
});


