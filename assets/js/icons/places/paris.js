//名所（place）アイコン：
    var placeIcon = L.icon({
    iconUrl: "../../assets/image/icon/place.png",
    iconRetinaUrl:"../../assets/image/icon/place@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-place"
    });


// 4) 緑アイコン用 LayerGroup を作成してマップに追加
const greenIconParis = L.layerGroup().addTo(map);

//Musée du Louvre
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/museum/img03.webp" alt="museum_img03">
    <a href="" class="popup_link">Musée du Louvre</a>
  </div>
`;
var markerLouvre = L.marker([48.86073376214778, 2.3368960594008947], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

// Musée d'Orsay
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/museum/img01.webp" alt="museum_img01">
    <a href="" class="popup_link">Musée d'Orsay</a>
  </div>
`;
var markerOrsay = L.marker([48.85999527293635, 2.3258635817008706], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//4. Les Champs Élysées
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/street/img01.webp" alt="street_img01">
    <a href="" class="popup_link">Les Champs Élysées</a>
  </div>
`;
var markerChamps = L.marker([48.86839189844828, 2.311803413640931], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//5. Saintechapelle
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/history/img02.webp" alt="history_img02">
    <a href="" class="popup_link">Sainte chapelle</a>
  </div>
`;
var markerChapelle = L.marker([48.855496246891526, 2.3444696106274336], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//7. La France Renaissante
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/riverside/img01.webp" alt="riverside_img01">
    <a href="Paris.html" class="popup_link">La France Renaissante</a>
  </div>
`;
var markerRenaissante = L.marker([48.85575045929262, 2.2878532272863383], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//8. Winston Churchill Monument
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/history/img01.webp" alt="history_img01">
    <a href="Paris.html" class="popup_link">Winston Churchill Monument</a>
  </div>
`;
var markerChurchill = L.marker([48.86532309516195, 2.313994628998788], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//Luxemburg Park
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/Paris/garden/img01.webp" alt="garden_img01">
    <a href="Paris.html" class="popup_link">Luxemburg Park</a>
  </div>
`;
var markerLuxemburg = L.marker([48.846759642576174, 2.33814334544728], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});


// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerLouvre, markerOrsay, markerChamps,markerChapelle,
markerRenaissante,markerChurchill,markerLuxemburg
].forEach(m => greenIconParis.addLayer(m));


const HIDE_ZOOM_Paris = 11;  // 例：ズーム11未満で非表示

//  ズームに応じた表示/非表示
function updateGreenIconsVisibility() {
  const z = map.getZoom();
  if (z < HIDE_ZOOM_Paris) {
    if (map.hasLayer(greenIconParis)) map.removeLayer(greenIconParis);
  } else {
    if (!map.hasLayer(greenIconParis)) map.addLayer(greenIconParis);
  }
}

// 初期反映＆イベント登録
updateGreenIconsVisibility();
map.on('zoomend', updateGreenIconsVisibility);


