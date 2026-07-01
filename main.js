// Fonction pour basculer la langue du site dynamiquement
function switchLanguage(lang) {
  document.getElementById('lang-fr').classList.remove('active');
  document.getElementById('lang-en').classList.remove('active');
  document.getElementById('lang-' + lang).classList.add('active');
  
  // Modification de la balise lang HTML pour aider le SEO multilingue
  document.documentElement.lang = lang;
  
  for (let key in translations[lang]) {
    let el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === 'BUTTON') {
        el.innerText = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  }
}

// Logique Globale DOM : Animations & Menu Mobile
document.addEventListener("DOMContentLoaded", () => {
  // 1. Gestion du Menu Mobile Rétractable
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav a");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // 2. Système d'animation à l'apparition (Intersection Observer)
  const elements = document.querySelectorAll('.dynamic-text');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });
  
  elements.forEach(el => observer.observe(el));
});