const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button-right');
const prevButton = document.querySelector('.carousel_button-left');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateDots(currentIndex);
}

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => goToSlide(idx));
});

// Optional: Resize listener to recalculate slide width
window.addEventListener('resize', updateCarousel);

// Initialize position
updateCarousel();
