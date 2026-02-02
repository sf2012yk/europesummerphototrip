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
const greenIconLondon = L.layerGroup().addTo(map);

//3. ビッグベン：
    var popupContent = `
     <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/London/place_11.webp" alt="London">
    <a href="" class="popup_link">Big Ben</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ビッグベンの説明
    </p>
    <p>
    <a href="https://bigbentime.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail</a>  
    </p>
    </div>
  </div>
`;
var markerBigBen = L.marker([51.50077691418779, -0.12451506657134913], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//4. ハロッズ：
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/London/place_5.webp" alt="London">
    <a class="popup_link">"Harrods" Depart</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ハロッズの説明
    </p>
    <p>
    <a href="https://www.harrods.com/en-gb/c/plan-your-visit" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var markerHarrods = L.marker([51.499405205079945, -0.16349647802672979], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});


//8. リージェントストリート
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/London/place_10.webp" alt="London">
    <a href="" class="popup_link">Regent Street</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    リージェントストリートの説明
    </p>
    <p>
    <a href="https://www.regentstreetonline.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var markerRegentStreet = L.marker([51.51006617010329, -0.1377072473857915], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//9. ロンドン金融街
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/London/place_12.webp" alt="London">
    <a href="" class="popup_link">City of London</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ロンドン金融街の説明
    </p>
    <p>
    <a href="https://www.cityoflondon.gov.uk/things-to-do" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var markerCityofLondon = L.marker([51.511691684514645, -0.084411793538647], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

//10. ナショナルギャラリー
    var popupContent = `
     <div class="popup_summer">
      <img class="popup_img" loading="eager" src="../../assets/image/place/London/place_12.webp" alt="London">
    <a href="" class="popup_link">National Gallery</a>
    <div class="popup_caption">
    <p>
    ナショナルギャラリーの説明
    </p>
    </div>
  </div>
`;
var markerNationalGallery = L.marker([51.50886781788075, -0.12835044530862647], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
});

// グループに入れる（ここが重要）
// 配列にまとめて一括追加
[markerBigBen,markerHarrods,,markerRegentStreet,markerCityofLondon,
markerNationalGallery
].forEach(m => greenIconLondon.addLayer(m));

const HIDE_ZOOM_London = 11;  // 例：ズーム11未満で非表示

//  ズームに応じた表示/非表示
function updateGreenIconsVisibility() {
  const z = map.getZoom();
  if (z < HIDE_ZOOM_London) {
    if (map.hasLayer(greenIconLondon)) map.removeLayer(greenIconLondon);
  } else {
    if (!map.hasLayer(greenIconLondon)) map.addLayer(greenIconLondon);
  }
}

// 初期反映＆イベント登録
updateGreenIconsVisibility();
map.on('zoomend', updateGreenIconsVisibility);