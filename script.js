// JavaScript to Handle Click Interactions
document.addEventListener("DOMContentLoaded", () => {
    const contactIcon = document.getElementById("contact-icon");
    const contactOptions = document.getElementById("contact-options");
  
    // Toggle the dropdown menu when the contact icon is clicked
    contactIcon.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the click from bubbling up
      contactOptions.classList.toggle("show");
    });
  
    // Close the dropdown if clicked outside
    document.addEventListener("click", (e) => {
      if (!contactOptions.contains(e.target) && !contactIcon.contains(e.target)) {
        contactOptions.classList.remove("show");
      }
    });
  
    // Optional: Close the dropdown when pressing Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        contactOptions.classList.remove("show");
      }
    });
  });
  