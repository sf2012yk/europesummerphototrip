
var map = L.map('map都市', {center: [都市の座標],
        zoom: 13.4,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false          // キーボード操作禁止
        });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">都市名 国</a>'
    }).addTo(map);