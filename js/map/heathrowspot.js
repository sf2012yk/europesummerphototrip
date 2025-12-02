
var map = L.map('heathrowspot', {center: [51.46683619237497, -0.4631505587077417],
        zoom: 15,
        minZoom: 14,
        maxZoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false,          // キーボード操作禁止
        maxBounds: [
    [35.0, -10.0], // 南西端（モロッコ沖〜スペイン南部）
    [60.0, 30.0]   // 北東端（ポーランド〜ウクライナ西部）
  ],
  maxBoundsViscosity: 1.0

        });


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">都市名 国</a>'
    }).addTo(map);