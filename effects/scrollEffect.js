

const homeSection = document.getElementById('home');
const scrollSection = document.getElementById('scroll-content');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  const windowHeight = window.innerHeight;
  const opacity = 1 - scrollPos / (windowHeight / 2);
  homeSection.style.opacity = Math.max(0, opacity);

  if (scrollSection) {
    const scrollSectionTop = scrollSection.offsetTop;
    const scrollOpacity = (scrollPos - scrollSectionTop + windowHeight) / windowHeight;
    scrollSection.style.opacity = Math.min(1, Math.max(0, scrollOpacity));
  }
});

AOS.init({
  duration: 1600,
  once: true,
  delay: 100
});
