// Base URL for images stored on CDN
const IMG_BASE_URL = 'https://pub-371d1ebf0258420781da13774e21558f.r2.dev/pics/SVG/';
const IMG_BASE_URL_GENERAL = 'https://pub-371d1ebf0258420781da13774e21558f.r2.dev/pics/';

// Function to construct image URLs
function getImageUrl(filename) {
  return IMG_BASE_URL + filename;
}

// Set CSS variables for background images
document.addEventListener('DOMContentLoaded', function() {
  // Set CSS variable for honeypuddle background image
  document.documentElement.style.setProperty('--honeypuddle-url', `url('${IMG_BASE_URL_GENERAL}Honeypuddle.jpg')`);

  // Update navbar logo
  const navLogo = document.getElementById('navLogo');
  if (navLogo) navLogo.src = getImageUrl('NavbarLogo.svg');

  // Update hero banner
  const heroBannerImg = document.querySelector('#heroBanner img');
  if (heroBannerImg) heroBannerImg.src = getImageUrl('Hero.svg');

  // Update about section
  const aboutMeBanner = document.getElementById('aboutMeBanner');
  if (aboutMeBanner) aboutMeBanner.src = getImageUrl('About.svg');

  // Update contact section
  const contactBannerImg = document.getElementById('contactBannerImg');
  if (contactBannerImg) contactBannerImg.src = getImageUrl('ContactBanner.svg');
});
