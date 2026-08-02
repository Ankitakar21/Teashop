AOS.init();
// JavaScript to toggle the menu on click
function toggleMenu() {
    document.querySelector('.nav').classList.toggle('active');
}


// testimonials section
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.nav-dot');
    
function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}
    
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showTestimonial(i);
    });
});



// Scroll Up Button
const scrollUpBtn = document.getElementById("scrollUpBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUpBtn.classList.add("visible");
  } else {
    scrollUpBtn.classList.remove("visible");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




const navItems = document.querySelectorAll(".nav-links li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(li => li.classList.remove("active"));
        item.classList.add("active");
    });
});
 



const overlay = document.getElementById("overlay");
const page = document.getElementById("page");
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".signup");

function openModal(){
  overlay.style.display = "flex";
  page.style.filter = "blur(6px)";
  page.style.pointerEvents = "none";
}

function closeModal(){
  overlay.style.display = "none";
  page.style.filter = "blur(0)";
  page.style.pointerEvents = "auto";
}

function showSignup(){
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
}

function showLogin(){
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
}

