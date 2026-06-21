// Base URL for images stored on CDN
const IMG_BASE_URL = 'https://pub-371d1ebf0258420781da13774e21558f.r2.dev/pics/SVG/';

// Function to construct image URLs
function getImageUrl(filename) {
  return IMG_BASE_URL + filename;
}

// Replace all image src attributes on page load
document.addEventListener('DOMContentLoaded', function() {
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
