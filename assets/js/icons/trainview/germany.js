//ドイツ画像
    var train_view_Icon = L.icon({
    iconUrl: "../../assets/image/icon/train_view.png",
    iconRetinaUrl:"../../assets/image/icon/train_view@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-train-view"
    });

// 4) レイヤーグループ
const trainviewIconGermany = L.layerGroup().addTo(map);

//  offenbach_1
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="offenbach_1">
      <img class="popup_img" loading="eager" src="../../assets/image/map/trainview/germany/offenbach_1.webp" alt="offenbach_1">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="offenbach_1" class="popup_link">offenbach_1</a>
    </div>
  </div>
`;
var markerOffenbach_1 = L.marker([50.10441692679249, 8.722690959782076], {
  icon: train_view_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  hamburg_1
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="hamburg_1">
      <img class="popup_img" loading="eager" src="../../assets/image/map/trainview/germany/hamburg_1.webp" alt="hamburg_1">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="hamburg_1" class="popup_link">hamburg_1</a>
    </div>
  </div>
`;
var markerhamburg_1 = L.marker([駅の座標], {
  icon: train_view_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerOffenbach_1,markerhamburg_1

].forEach(m => trainviewIconGermany.addLayer(m));

const Train_View_Germany = 6;  // 例：ズーム56未満で非表示

//  ズームに応じた表示/非表示
function updateTrainviewGermanyVisibility() {
  const z = map.getZoom();
  if (z < Train_View_Germany) {
    if (map.hasLayer(trainviewIconGermany)) map.removeLayer(trainviewIconGermany);
  } else {
    if (!map.hasLayer(trainviewIconGermany)) map.addLayer(trainviewIconGermany);
  }
}

// 初期反映＆イベント登録
updateTrainviewGermanyVisibility();
map.on('zoomend', updateTrainviewGermanyVisibility);