document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('image-track');
    const container = document.querySelector(".swiper-container");
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const slides = document.querySelectorAll('.swiper-img');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function moveSlider() {
        const containerWidth = container.offsetWidth;
        track.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
        updateDots();
    }

    track.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        moveSlider();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        moveSlider();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        moveSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            currentIndex = index;
            moveSlider();
        });
    });

    window.addEventListener("resize", () => {
        track.style.transition = 'none';
        moveSlider();
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    });

    updateDots();
});

var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
var menuLinks = document.querySelectorAll('#menu a'); 

burgerMenu.addEventListener('click', function() {
    toggleMenu();
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (overlay.classList.contains('overlay')) {
            toggleMenu();
        }
    });
});

function toggleMenu() {
    burgerMenu.classList.toggle("close");
    overlay.classList.toggle("overlay");
    
    if (burgerMenu.classList.contains("close")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
}

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
    console.log("Error during request:", error);
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

document.addEventListener("DOMContentLoaded", function() {
    const cookiesAccepted = localStorage.getItem('cookies_accepted');
    if (!cookiesAccepted) {
        setTimeout(() => {
            document.getElementById('cookieModal').style.display = 'block';
        }, 2000);
    }
});

function acceptCookies() {
    localStorage.setItem('cookies_accepted', 'true'); 
    document.getElementById('cookieModal').style.display = 'none';
}

function closeCookieModal() {
    document.getElementById('cookieModal').style.display = 'none';
}
//////////////////////////
let formEl = document.getElementById("registration");

formEl.addEventListener("submit", function (event) {
    event.preventDefault();

    let errors = {};

    let username = document.getElementById("usernamefield").value;
    if (username === "") {
        errors.username = "Username field cannot be empty";
    }

    let emailInputValue = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailInputValue.match(emailPattern)) {
        errors.email = "Please enter a valid email";
    }

    let password = document.getElementById("passwordfield").value;
    let password2 = document.getElementById("passwordfield2").value;

    if (password === "") {
        errors.password = "Password field cannot be empty";
    }
    if (password !== password2) {
        errors.password2 = "Passwords do not match";
    }

    let agree = document.getElementById("check").checked;
    if (!agree) {
        errors.agree = "You must agree to our terms and conditions";
    }

    this.querySelectorAll(".error-text").forEach((element) => {
        element.textContent = "";
        element.style.color = "red";
    });

    for (let key in errors) {
        let pError = document.getElementById("error-" + key);
        if (key === "email") pError = document.getElementById("email-error");

        if (pError) {
            pError.textContent = errors[key];
        }
    }

    if (Object.keys(errors).length === 0) {
        alert("Success! Form is ready to submit.");
    }
});

let emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", function() {
    let emailInputValue = this.value;
    let PError = document.getElementById("email-error");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailInputValue.match(emailPattern)) {
        PError.textContent = "Your Email is Valid";
        PError.style.color = "green";
    } else {
        PError.textContent = "Your Email is Invalid";
        PError.style.color = "red";
    }

    if (emailInputValue === "") {
        PError.textContent = "";
    }
});

let passw = document.getElementById("passwordfield");
let icon = document.getElementById("icon");

icon.addEventListener("click", function () {
    if (passw.type === "password") {
        passw.setAttribute("type", "text");
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
    } else {
        passw.setAttribute("type", "password");
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
    }
});

function openAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
}
function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}