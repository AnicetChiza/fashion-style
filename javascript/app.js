//Home page changing image background
let currentIndex = 0;

function changeBg() {
    const images = [
        'url("../images/home-page/img1.jpg")',
        'url("../images/home-page/img2.JPG")',
        'url("../images/home-page/img3.JPG")',
        'url("../images/home-page/img4.jpg")',
        'url("../images/home-page/img5.JPG")',
        'url("../images/home-page/img6.JPG")',
        'url("../images/home-page/img10.JPG")',
    ];

    const page = document.querySelector('.home-page');
    const bg = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    page.style.backgroundImage = bg;
}

setInterval(changeBg, 2500);

// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', startValueAnimation);
// Fonction pour démarrer l'animation des valeurs
function startValueAnimation() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-Val'));
        let decimalPart = endValue % 1; // Obtenir la partie décimale
        let steps = Math.floor(endValue); // Nombre d'étapes entières
        let stepDuration = interval / steps;
        let counter = setInterval(function() {
            if (startValue < steps) {
                startValue += 1;
                valueDisplay.textContent = startValue;
            } else if (startValue === steps && decimalPart > 0) {
                // Gérer la partie décimale si présente
                startValue += decimalPart;
                valueDisplay.textContent = endValue.toFixed(1); // Afficher avec 1 décimale
            } else {
                clearInterval(counter);
            }
        }, stepDuration);
    });
}

// Récupérer toutes les divs blog-items dans notre conteneur
const blogItems = document.querySelectorAll('.blog-content .blog-items');

// Initialiser un index pour suivre l'élément actuellement affiché
let current = 0;

// Cacher tous les éléments blog-items sauf le premier
blogItems.forEach((item, index) => {
    if (index !== current) {
        item.style.display = 'none';
    }
});

/*// Récupérer toutes les divs blog-items
const blog = document.querySelectorAll('.blog-items');

// Initialiser un index pour suivre l'image actuellement affichée
let currents = 0;

// Cacher toutes les divs blog-items sauf la première
blog.forEach((item, index) => {
    if (index !== currents) {
        item.style.display = 'none';
    }
});

// Fonction pour afficher l'élément suivant
function showNextItem() {
    blog[currents].style.display = 'none';
    currents = (currents + 1) % blogItems.length;
    blog[currents].style.display = 'block';
}

// Fonction pour afficher l'élément précédent
function showPreviousItem() {
    blog[currents].style.display = 'none';
    currents = (currents - 1 + blogItems.length) % blogItems.length;
    blog[currents].style.display = 'block';
}

// Ajouter des écouteurs d'événements aux boutons Précédent et Suivant
document.getElementById('prevButton').addEventListener('click', showPreviousItem);
document.getElementById('nextButton').addEventListener('click', showNextItem);*/