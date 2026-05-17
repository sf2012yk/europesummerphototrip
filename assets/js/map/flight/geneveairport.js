
var map = L.map('mapgeneveairport', {center: [46.228376147639075, 6.103114401077592],
        zoom: 13.4,
        minZoom: 7,
        maxZoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false,          // キーボード操作禁止
        maxBounds: [
     [18.0, -15.0], // 南西端（モーリタニア）
    [60.0, 57.0]   // 北東端（ポーランド〜ドバイ）
  ],
  maxBoundsViscosity: 1.0

        });


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Geneve Airport Swiss</a>'
    }).addTo(map);