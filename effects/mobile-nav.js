const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

// Add a click event listener to the toggle button
mobileNavToggle.addEventListener('click', () => {
  // Toggle the 'show' class on the mobile nav menu
  mobileNavMenu.classList.toggle('show');
});