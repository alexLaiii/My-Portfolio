// Get the current page URL
const currentPage = window.location.pathname;

// Check which page the user is on and add the "active" class to the corresponding nav link
if (currentPage.includes('index.html')) {
  document.getElementById('home-link').classList.add('active');
} else if (currentPage.includes('about.html')) {
  document.getElementById('about-link').classList.add('active');
} else if (currentPage.includes('experience.html')) {
  document.getElementById('experience-link').classList.add('active');
} else if (currentPage.includes('contact.html')) {
  document.getElementById('contact-link').classList.add('active');
} else if(currentPage.includes('education.html')){
  document.getElementById('education-link').classList.add('active');
}




