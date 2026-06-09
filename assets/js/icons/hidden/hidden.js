    //隠し（hidden）アイコン：
    var hiddenIcon = L.icon({
    iconUrl: "../../assets/image/icon/hidden.png",
    iconRetinaUrl:"../../assets/image/icon/hidden@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-hidden"
    });

// Hiddenアイコン用 LayerGroup を作成してマップに追加
const FlowerIconHidden = L.layerGroup().addTo(map);

//1 Milano
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_1.webp" alt="Milano">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Milano</a>
    <div class="popup_caption">
    <p>
    Milano
    </p>
    </div>
  </div>
`;
var markerGirl1 = L.marker([45.46408517581762, 9.1893503474083], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//3 Venezia
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_3.webp" alt="Venezia">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Versilles</a>
    <div class="popup_caption">
    <p>
    Venezia
    </p>
    </div>
  </div>
`;
var markerGirl6 = L.marker([45.43164467707329, 12.328893822131244], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//6 Firenze
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_6.webp" alt="Firenze">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Firenze</a>
    <div class="popup_caption">
    <p>
    Firenze
    </p>
    </div>
  </div>
`;
var markerGirl2 = L.marker([43.771581499524146, 11.253314433855746], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//10 York
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_10.webp" alt="York">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">York</a>
    <div class="popup_caption">
    <p>
    York
    </p>
    </div>
  </div>
`;
var markerGirl3 = L.marker([53.96014500154549, -1.079987217374704], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//5 Roma
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_7.webp" alt="Roma">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Roma</a>
    <div class="popup_caption">
    <p>
    Roma
    </p>
    </div>
  </div>
`;
var markerGirl4 = L.marker([41.90111713832574, 12.479905240280791], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//4 Paignton
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_4.webp" alt="Paignton">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Paignton</a>
    <div class="popup_caption">
    <p>
    Paignton
    </p>
    </div>
  </div>
`;
var markerGirl5 = L.marker([50.434463914316396, -3.565016090145747], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//8 Lausanne
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_8.webp" alt="Lausanne">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Lausanne</a>
    <div class="popup_caption">
    <p>
    Lausanne
    </p>
    </div>
  </div>
`;
var markerGirl7 = L.marker([46.49559822445002, 6.722850547266377], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerGirl1,markerGirl2,markerGirl3,markerGirl4,markerGirl5,markerGirl6,markerGirl7
].forEach(m => FlowerIconHidden.addLayer(m));

const HIDE_ZOOM_Flower = 13;  // 例：ズーム13未満で非表示

//  ズームに応じた表示/非表示
function updateFlowerVisibility() {
  const z = map.getZoom();
  if (z < HIDE_ZOOM_Flower) {
    if (map.hasLayer(FlowerIconHidden)) map.removeLayer(FlowerIconHidden);
  } else {
    if (!map.hasLayer(FlowerIconHidden)) map.addLayer(FlowerIconHidden);
  }
}

// 初期反映＆イベント登録
updateFlowerVisibility();
map.on('zoomend', updateFlowerVisibility);




