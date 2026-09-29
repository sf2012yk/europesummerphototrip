var map = L.map('mapfrankfurt', {
  center: [50.10847919509299, 8.6695966473216],
  zoom: 13.4,
  minZoom: 7,
  maxZoom: 14,
  zoomControl: false,
  scrollWheelZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false,
  maxBounds: [
    [35.0, -10.0],
    [60.0, 30.0]
  ],
  maxBoundsViscosity: 1.0
});

/* ▼▼▼ ここから下は共通 ▼▼▼ */

L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
  attribution: '&copy; OSM.de'
}).addTo(map);

/* 国名・都市名の自動表示） */

function updateLocationLabel() {
  const center = map.getCenter();
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${center.lat}&lon=${center.lng}&format=json&accept-language=en`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const country = data.address.country || "Unknown";
      const city = data.address.city || data.address.town || data.address.village || "";
      const label = city ? `${city}, ${country}` : country;

      map.attributionControl.setPrefix(`${label}`);
    })
    .catch(err => {
      map.attributionControl.setPrefix("unavailable");
    });
}

map.on('moveend', updateLocationLabel);
updateLocationLabel();




