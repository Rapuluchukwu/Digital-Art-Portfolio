document.addEventListener('DOMContentLoaded', () => {
    // Contact widget functionality
    const contactIcon = document.getElementById("contact-icon");
    const contactOptions = document.getElementById("contact-options");
})
// Toggle the dropdown menu when the contact icon is clicked
contactIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    contactOptions.classList.toggle("show");
});