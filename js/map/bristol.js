
// ※ブリストル　UK
var map = L.map('mapBristol', {center: [51.44923390517749, -2.5853065067382652],
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,  // ホイールズーム禁止
        doubleClickZoom: false,  // ダブルクリックズーム禁止
        boxZoom: false,          // ボックスズーム禁止
        keyboard: false          // キーボード操作禁止
        });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">Bristol UK</a>'
    }).addTo(map);