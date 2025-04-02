const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ...selection elements de la page ...

const bannerImg = document.querySelector('.banner-img');  // L'image
const bannerText = document.querySelector('#banner p');   // Le texte
const prevButton = document.querySelector('.arrow_left');  // Flèche gauche
const nextButton = document.querySelector('.arrow_right');  // Flèche droite
const dotsContainer = document.querySelector('.dots');  // Container des bullet points

// ... On garde en mémoire quelle image on montre ...
let currentSlideIndex = 0;  // Commence à 0 (première image)

// Création des bullet points
function createDots() {
	// Supprimer les points existants s'il y en a
	dotsContainer.innerHTML = '';

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		// Le premier point (index 0) est sélectionné par défaut
		if (i === 0) {
			dot.classList.add('dot_selected');
		}
		// Ajouter l'événement de clic
		dot.addEventListener('click', () => {
			currentSlideIndex = i;
			updateCarousel();
		});
		dotsContainer.appendChild(dot);
	}
}

// Mise à jour des bullet points
function updateDots() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

//...Quand on clique sur une flèche ...
// Pour la flèche gauche
prevButton.addEventListener('click', () => {
	console.log('Bouton GAUCHE cliqué');
	const oldIndex = currentSlideIndex;
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	console.log(`Passage de l'image ${oldIndex + 1} à l'image ${currentSlideIndex + 1}`);
	updateCarousel();
});

// Pour la flèche droite
nextButton.addEventListener('click', () => {
	console.log('Bouton DROITE cliqué');
	const oldIndex = currentSlideIndex;
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	console.log(`Passage de l'image ${oldIndex + 1} à l'image ${currentSlideIndex + 1}`);
	updateCarousel();
});

//..La fonction updateCarousel ...
function updateCarousel() {
	console.log(`Image actuelle : ${currentSlideIndex + 1} sur ${slides.length}`);
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerText.innerHTML = slides[currentSlideIndex].tagLine;
	updateDots();
}

// Initialisation des bullet points
createDots();