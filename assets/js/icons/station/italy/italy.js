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


//  ミラノ中央駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Milano Centrale">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/milano_central.webp" alt="Milano Centrale">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Milano Centrale" class="popup_link">Milano Centrale</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Bergamo">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bergamo.webp" alt="Bergamo Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bergamo Station" class="popup_link">Bergamo Station</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Brescia">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/brescia.webp" alt="Brescia Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Brescia Station" class="popup_link">Brescia Station</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Peschiera">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/peschiera.webp" alt="Peschiera Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Peschiera Station" class="popup_link">Peschiera Station</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Verona">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/verona.webp" alt="Verona Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Verona Station" class="popup_link">Verona Station</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Venezia Santa Lucia">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/venezia_santalucia.webp" alt="Venezia Santa Lucia">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Venezia Santa Lucia" class="popup_link">Venezia Santa Lucia</a>
    </div>
  </div>
`;
var markerVeneziaSantaLucia = L.marker([45.44134690329801, 12.320284034940498], {
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
    <a href="" 
       data-lightbox="image" 
       data-title="駅名">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/ferrara.webp" alt="Ferrara Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Ferrara Station" class="popup_link">Ferrara Station</a>
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
    <a href="" 
       data-lightbox="image" 
       data-title="Bologna">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bologna.webp" alt="Bologna Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bologna Station" class="popup_link">Bologna Station</a>
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

 //  フィレンツェ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bologna">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/firenze.webp" alt="Firenze Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Firenze Station" class="popup_link">Firenze Station</a>
    </div>
  </div>
`;
var markerFirenze = L.marker([43.776672747755704, 11.247826497426637], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Orvieto駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bologna">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/orvieto.webp" alt="Orvieto Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Orvieto Station" class="popup_link">Orvieto Station</a>
    </div>
  </div>
`;
var markerOrvieto = L.marker([42.72404732095011, 12.126645649350241], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  roma_tiburtina駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Roma Tiburtina">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/roma_tiburtina.webp" alt="Roma Tiburtina Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Roma Tiburtina Station" class="popup_link">Roma Tiburtina Station</a>
    </div>
  </div>
`;
var markerRomaTiburtina = L.marker([41.91137876844585, 12.53091769172978], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  roma_termini駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Roma Termini">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/roma_termini.webp" alt="Roma Termini Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Roma Termini Station" class="popup_link">Roma Termini Station</a>
    </div>
  </div>
`;
var markerRomaTermini = L.marker([41.90087073150933, 12.502142953698526], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ナポリ駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Napoli">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/napoli.webp" alt="Napoli Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Napoli Station" class="popup_link">Napoli Station</a>
    </div>
  </div>
`;
var markerNapoli = L.marker([40.8529073790409, 14.273130614605218], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  venezia_mestre駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Venezia Mestre">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/venezia_mestre.webp" alt="Venezia Mestre Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Venezia Mestre Station" class="popup_link">Venezia Mestre</a>
    </div>
  </div>
`;
var markerVeneziaMestre = L.marker([45.48203809284769, 12.231620771052933], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  padova駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Padova">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/padova.webp" alt="Padova Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Padova Station" class="popup_link">Padova Station</a>
    </div>
  </div>
`;
var markerPadova = L.marker([45.417981388217086, 11.880603803267935], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  vicenza駅
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Vicenza">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/vicenza.webp" alt="Vicenza Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Vicenza Station" class="popup_link">Vicenza Station</a>
    </div>
  </div>
`;
var markerVicenza = L.marker([45.5409930564181, 11.538794841267709], {
  icon: stationIcon //途中駅はstation_2_Icon、画像なしの駅はstation_3_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Fiumicino
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Vicenza">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/vicenza.webp" alt="Fiumicino">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Fiumicino" class="popup_link">Roma Fiumicino Airport</a>
    </div>
  </div>
`;
var markerFiumicino = L.marker([41.79398762260918, 12.251412147828841], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);