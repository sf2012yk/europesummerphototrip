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

//3 St Ives
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_3.webp" alt="St Ives">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">St Ives</a>
    <div class="popup_caption">
    <p>
    St Ives
    </p>
    </div>
  </div>
`;
var markerGirl2 = L.marker([50.2152235572057, -5.477994454332828], {
  icon: hiddenIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//9 York
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_9.webp" alt="York">
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


//8 London
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_8.webp" alt="London">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">London</a>
    <div class="popup_caption">
    <p>
    London
    </p>
    </div>
  </div>
`;
var markerGirl4 = L.marker([51.50107508251143, -0.1271312262745719], {
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



//11 Versilles
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/hidden/hidden_11.webp" alt="Versilles">
    <a href="../../pages/hidden/Hidden.html" class="popup_link">Versilles</a>
    <div class="popup_caption">
    <p>
    Versilles
    </p>
    </div>
  </div>
`;
var markerGirl6 = L.marker([48.80535950888077, 2.1181667141239684], {
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
[markerGirl1,markerGirl2,markerGirl3,markerGirl4,markerGirl5,markerGirl6
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




