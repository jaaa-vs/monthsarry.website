let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initialize first slide
showSlide(currentSlide);

function openLetter() {
    const letterModal = document.getElementById('letterModal');
    const currentDate = document.getElementById('currentDate');

    // Set current date
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDate.textContent = today.toLocaleDateString('en-US', options);

    // Show modal
    letterModal.classList.add('active');
}

function closeLetter() {
    const letterModal = document.getElementById('letterModal');

    // Hide modal
    letterModal.classList.remove('active');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const letterModal = document.getElementById('letterModal');
    const letterContent = document.querySelector('.letter-content');

    if (e.target === letterModal) {
        closeLetter();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLetter();
    }
});

// Add keyboard navigation for slides
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (e.key === 'ArrowRight') {
        changeSlide(1);
    }
});
