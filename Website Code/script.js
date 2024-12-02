// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the button
const returnToTopBtn = document.getElementById('returnToTopBtn');

// Show the button when the user scrolls down 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        returnToTopBtn.style.display = 'block'; // Show the button
    } else {
        returnToTopBtn.style.display = 'none'; // Hide the button
    }
};

// Function to scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
}