//フライト
    var flight_view_Icon = L.icon({
    iconUrl: "image/icon/train_view.png",
    iconRetinaUrl:"image/icon/train_view@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_3"
    });

// 4) 緑アイコン用 LayerGroup を作成してマップに追加
const FlightViewIcon = L.layerGroup().addTo(map);

//  suez
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="suez">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Singapore/flight_rm_7.webp" alt="suez">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="suez" class="popup_link">suez</a>
    </div>
  </div>
`;
var markerSuez = L.marker([29.68292377296251, 32.36673469269061], {
  icon: flight_view_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Greese_1
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Greese_1">
      <img class="popup_img" loading="eager" src="../../assets/image/map/flightview/greese_1.webp" alt="Greese_1">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Greese_1" class="popup_link">Greese</a>
    </div>
  </div>
`;
var markerGreese_1 = L.marker([36.59475534625677, 24.252851596287783], {
  icon: flight_view_Icon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerSuez,markerGreese_1
].forEach(m => FlightViewIcon.addLayer(m));

const HIDE_ZOOM_Flight = 13;  // 例：ズーム12.5未満で非表示

//  ズームに応じた表示/非表示
function updateFlightViewIconsVisibility() {
  const z = map.getZoom();
  if (z < HIDE_ZOOM_Flight) {
    if (map.hasLayer(FlightViewIcon)) map.removeLayer(FlightViewIcon);
  } else {
    if (!map.hasLayer(FlightViewIcon)) map.addLayer(FlightViewIcon);
  }
}

// 初期反映＆イベント登録
updateFlightViewIconsVisibility();
map.on('zoomend', updateFlightViewIconsVisibility);