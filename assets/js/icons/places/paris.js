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

//2. ルーヴル美術館：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/MuseeduLouvre.jpg" alt="London">
    <a href="" class="popup_link">Musée du Louvre</a>
    <div class="popup_caption">
    <p>
    ルーヴル美術館の説明
    </p>
    </div>
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

//3. オルセー美術館：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/MuseedOrsay.jpg" alt="London">
    <a href="" class="popup_link">Musée d'Orsay</a>
    <div class="popup_caption">
    <p>
    オルセー美術館の説明
    </p>
    </div>
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

//4. シャンゼリゼ通り：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/LesChampsElysees.JPG" alt="London">
    <a href="" class="popup_link">Les Champs-Élysées</a>
    <div class="popup_caption">
    <p>
    シャンゼリゼ通りの説明
    </p>
    </div>
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

//5. サンシャペル教会：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/Saintechapelle.jpg" alt="London">
    <a href="" class="popup_link">Sainte chapelle</a>
    <div class="popup_caption">
    <p>
    サンシャペル教会の説明
    </p>
    </div>
  </div>
`;
var markerSaintechapelle = L.marker([48.855496246891526, 2.3444696106274336], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//6. ノートルダム大聖堂：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/NotreDame.jpg" alt="London">
    <a href="" class="popup_link">Notre Dame</a>
    <div class="popup_caption">
    <p>
    ノートルダム大聖堂
    </p>
    </div>
  </div>
`;
var markerNotreDame = L.marker([48.85314552856817, 2.34942260162728], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//7. ラ・フランス・ルネサンス：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/LaFranceRenaissante.jpg" alt="London">
    <a href="Paris.html" class="popup_link">La France Renaissante</a>
    <div class="popup_caption">
    <p>
    ラ・フランス・ルネサンス
    </p>
    </div>
  </div>
`;
var markerLaFranceRenaissante = L.marker([48.85575045929262, 2.2878532272863383], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//8. ウィンストン・チャーチル像：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/WinstonChurchill.jpg" alt="London">
    <a href="Paris.html" class="popup_link">Winston Churchill</a>
    <div class="popup_caption">
    <p>
    ウィンストン・チャーチル像
    </p>
    </div>
  </div>
`;
var markerWinstonChurchill = L.marker([48.86532309516195, 2.313994628998788], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//8. ルクセンブルク公園：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/map/place/Paris/LuxemburgPark.jpg" alt="London">
    <a href="Paris.html" class="popup_link">Luxemburg Park</a>
    <div class="popup_caption">
    <p>
    ルクセンブルク公園
    </p>
    </div>
  </div>
`;
var markerLuxemburgPark = L.marker([48.846759642576174, 2.33814334544728], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});


// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerLouvre, markerOrsay, markerChamps,markerSaintechapelle,markerNotreDame,
markerLaFranceRenaissante,markerWinstonChurchill,markerLuxemburgPark
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


