const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        const slideNumber = slide.querySelector('.slide-number');
        slideNumber.textContent = (index + 1) + '/' + slides.length;
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});


showSlide(currentIndex);









 
