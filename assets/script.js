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

// ... creation du tableaux...

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	// ... autres images ...
]
// ...selection elements de la page ...

const bannerImg = document.querySelector('.banner-img');  // L'image
const bannerText = document.querySelector('#banner p');   // Le texte
const prevButton = document.querySelector('.carousel-button.prev');  // Flèche gauche
const nextButton = document.querySelector('.carousel-button.next');  // Flèche droite

// ... On garde en mémoire quelle image on montre ...
let currentSlideIndex = 0;  // Commence à 0 (première image)

//...Quand on clique sur une flèche ...
// Pour la flèche gauche
prevButton.addEventListener('click', () => {
	console.log('Bouton précédent cliqué');
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
	updateCarousel();
});

// Pour la flèche droite
nextButton.addEventListener('click', () => {
	console.log('Bouton suivant cliqué');
	currentSlideIndex = (currentSlideIndex + 1) % slides.length;
	updateCarousel();
});

//..La fonction updateCarousel ...
function updateCarousel() {
	console.log(`Mise à jour du carrousel - Diapositive ${currentSlideIndex + 1}/${slides.length}`);
	bannerImg.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	bannerText.innerHTML = slides[currentSlideIndex].tagLine;
}