// Maps link setup
const mapsLink = document.getElementById('maps-link');
if (mapsLink) {
  const query = encodeURIComponent('[Insert Venue Name], [Insert City]');
  mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
}
