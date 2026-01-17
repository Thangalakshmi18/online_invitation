// Device detection and auto-fit
function detectDevice() {
  const width = window.innerWidth;
  // Remove existing classes
  document.body.classList.remove('mobile', 'tablet', 'desktop');
  if (width < 768) {
    document.body.classList.add('mobile');
  } else if (width < 1024) {
    document.body.classList.add('tablet');
  } else {
    document.body.classList.add('desktop');
  }
}

// Run on load and resize
window.addEventListener('load', detectDevice);
window.addEventListener('resize', detectDevice);

// Maps link setup
const mapsLink = document.getElementById('maps-link');
if (mapsLink) {
  const query = encodeURIComponent('[Insert Venue Name], [MADURAI]');
  mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
}
