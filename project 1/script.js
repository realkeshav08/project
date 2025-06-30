const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




document.addEventListener("mousemove", parallax);

function parallax(event) {
    // Get all elements with class "layer"
    const layers = document.querySelectorAll('.layer');

    // Loop through each layer
    layers.forEach(layer => {
        // Get the speed from data-speed attribute
        const speed = layer.getAttribute('data-speed');

        // Calculate the movement amount based on mouse position
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;

        // Apply translation to each layer based on mouse movement
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}




let slideIndex = 0;
showSlides();

// Function to show slides and advance them automatically
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Loop back to the first slide

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  // Show the current slide
    dots[slideIndex-1].className += " active";     // Highlight the current dot

    setTimeout(showSlides, 4000); // Change slide every 4 seconds (4000 milliseconds)
}