// Get elements
const contactIcon = document.getElementById('contactIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle the dropdown menu on click
contactIcon.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown menu if clicked outside
document.addEventListener('click', (event) => {
  if (!contactIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = 'none';
  }
}); 