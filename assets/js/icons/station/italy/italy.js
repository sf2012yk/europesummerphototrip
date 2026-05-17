//主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "../../assets/image/icon/train.png",
    iconRetinaUrl:"../../assets/image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

     //通過駅等（station_2）アイコン：
    var station_2_Icon = L.icon({
    iconUrl: "../../assets/image/icon/train_2.png",
    iconRetinaUrl:"../../assets/image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });


//  ミラノ中央駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/milano_central.webp" 
       data-lightbox="image" 
       data-title="Milano Centrale">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/milano_central.webp" alt="Milano Centrale">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/milano_central.webp" data-lightbox="image" data-title="Milano Centrale" class="popup_link">Milano Centrale</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerMilano = L.marker([45.486022373628984, 9.20430169797116], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ベルガモ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/bergamo.webp" 
       data-lightbox="image" 
       data-title="Bergamo">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bergamo.webp" alt="Bergamo Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/bergamo.webp" data-lightbox="image" data-title="Bergamo Station" class="popup_link">Bergamo Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerBergamo = L.marker([45.69027744975528, 9.675127904942757], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ブレシア駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/brescia.webp" 
       data-lightbox="image" 
       data-title="Brescia">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/brescia.webp" alt="Brescia Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/brescia.webp" data-lightbox="image" data-title="Brescia Station" class="popup_link">Brescia Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerBrescia = L.marker([45.53216810616962, 10.212877398712628], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ペスキエーラデルガルーダ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/peschiera.webp" 
       data-lightbox="image" 
       data-title="Peschiera">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/peschiera.webp" alt="Peschiera Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/peschiera.webp" data-lightbox="image" data-title="Peschiera Station" class="popup_link">Peschiera Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerPeschiera = L.marker([45.43832702879209, 10.702334192700855], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ベローナ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/verona.webp" 
       data-lightbox="image" 
       data-title="Verona">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/verona.webp" alt="Verona Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/verona.webp" data-lightbox="image" data-title="Verona Station" class="popup_link">Verona Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerVerona = L.marker([45.428597030990964, 10.981918606991616], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ベネチア・サンタルチア駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/venezia_santalucia.webp" 
       data-lightbox="image" 
       data-title="Venezia">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/venezia_santalucia.webp" alt="Venezia Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/venezia_santalucia.webp" data-lightbox="image" data-title="Venezia Station" class="popup_link">Venezia Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerVeneziaSL = L.marker([45.44134690329801, 12.320284034940498], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  フェラーラ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/ferrara.webp" 
       data-lightbox="image" 
       data-title="駅名">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/ferrara.webp" alt="Ferrara Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/ferrara.webp" data-lightbox="image" data-title="Ferrara Station" class="popup_link">Ferrara Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerFerrara = L.marker([44.84278732679243, 11.60368909440825], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

  //  ボローニャ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/bologna.webp" 
       data-lightbox="image" 
       data-title="Bologna">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bologna.webp" alt="Bologna Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/bologna.webp" data-lightbox="image" data-title="Bologna Station" class="popup_link">Bologna Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="駅名ToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="駅名ToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="駅名ToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerBologna = L.marker([44.50625199262663, 11.342946531828515], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);