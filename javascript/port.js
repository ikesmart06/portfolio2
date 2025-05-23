// menu bar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


// scroll sective , chaging active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
// remove navbar for media responsiveness when clicked
     menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


// scroll reveal.

ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200,

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});


// typed js

const typed = new Typed('.multiple-text',{
    strings: ['Software Developer', 'Graphic Designer', '3D Animator'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});