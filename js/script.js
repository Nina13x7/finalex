document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('image-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const slides = document.querySelectorAll('.swiper-img');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const slideWidth = 963;

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function moveSlider() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        moveSlider();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; 
        }
        moveSlider();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            moveSlider();
        });
    });
});