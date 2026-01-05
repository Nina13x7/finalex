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

axios
  .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
  .then(function (response) {
    console.log(response.data);
    
    const container = document.getElementById('blog-container');
    
    response.data.forEach(function (post) {
      let card = document.createElement('div');
      card.className = 'blog-card'; 
      
      card.innerHTML = `
        <img src="https://picsum.photos/seed/${post.id}/400/250" alt="blog" class="blog-img">
        <div class="blog-content">
            <span class="blog-tag">AI Analysis</span>
            <h3>${post.title.substring(0, 30)}...</h3>
            <p>${post.body.substring(0, 100)}...</p>
            <a href="#" class="blog-link">Read More →</a>
        </div>
      `;
      
      container.appendChild(card);
    });
    sr.reveal('.blog-card', { interval: 200 });
  })
  .catch(function (error) {
    console.log("შეცდომა მოთხოვნისას:", error);
  });


const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

sr.reveal('.section1-txt, .agents-txt, .industries-txt', { 
    delay: 300 
});

sr.reveal('.section1-buttons img', { 
    delay: 500,
    distance: '100px' 
});

sr.reveal('.slider-main-container', { 
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200
});

sr.reveal('.block', { 
    interval: 200 
});

sr.reveal('.product-block', { 
    interval: 150 
});

sr.reveal('.pricing-card', { 
    interval: 200 
});

sr.reveal('.blog-card', { 
    interval: 200 
});