// ロンドン
var map = L.map('maplondon', {center: [51.51066089388474, -0.11054466987584811],
        zoom: 13.4,
        minZoom: 5,
        maxZoom: 17,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false,          // キーボード操作禁止
        maxBounds: [
    [0.1, -10.0], // 南西端（モロッコ沖〜スペイン南部）
    [60.0, 110.0]   // 北東端（ポーランド〜ウクライナ西部）
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

