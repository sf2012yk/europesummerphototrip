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

// GW_01 Paddington駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/paddington.webp" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Paddington Station" class="popup_link">London Paddington</a>
    </div>
  </div>
`;
var markerPaddington = L.marker([51.516894337841045, -0.17712164609673156], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// GW_01 Paddington駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/paddington.webp" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Paddington Station" class="popup_link">London Paddington</a>
    </div>
  </div>
`;
var markerPaddington = L.marker([51.516894337841045, -0.17712164609673156], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// Terminal3
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/paddington.webp" alt="Terminal3">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Terminal3" class="popup_link">Heathrow Terminal3</a>
    </div>
  </div>
`;
var markerTerminal3 = L.marker([51.47028371585865, -0.4590508896992913], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// Terminal5
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/paddington.webp" alt="Terminal5">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Terminal5" class="popup_link">Heathrow Terminal5</a>
    </div>
  </div>
`;
var markerTerminal5 = L.marker([51.47259800120853, -0.4859364875464297], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Slough
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Slough">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/slough.webp" alt="Slough Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Slough Station" class="popup_link">Slough Station</a>
    </div>
  </div>
`;
var markerSlough = L.marker([51.511845860102135, -0.591373216810744], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Windsor
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Windsor">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/windsor.webp" alt="Windsor Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Windsor Station" class="popup_link">Windsor Station</a>
    </div>
  </div>
`;
var markerWindsor = L.marker([51.48317195088449, -0.6100296685527282], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  GW_03 Reading駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Reading">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/reading.webp" alt="Reading Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Reading Station" class="popup_link">Reading Station</a>
    </div>
  </div>
`;
var markerReading = L.marker([51.45934668763566, -0.9732287208600584], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//  GWR Bath Spa
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bath Spa">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bathspa.webp" alt="Bath Spa Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bath Spa Station" class="popup_link">Bath Spa Station</a>
    </div>
  </div>
`;
var markerBathSpa = L.marker([51.37779463871984, -2.3569100502506695], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Bristol_Temple_Meads駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bristol Temple Meads">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bristol.webp" alt="Bristol Temple Meads Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bristol Temple Meads Station" class="popup_link">Bristol Temple Meads Station</a>
    </div>
  </div>
`;
var markerBristol = L.marker([51.44953427862961, -2.5807735188100613], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Taunton駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Taunton Station">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/taunton.webp" alt="Taunton Station">
    </a>
    <a href="" data-lightbox="image" data-title="Paddington Station" class="popup_link">Taunton Station</a>
  </div>
`;
var marker = L.marker([51.02331377215021, -3.1035371321110854], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Exeter St Davids駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Exeter St Davids Station">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/exeter.webp" alt="Exeter St Davids">
    </a>
    <a href="" data-lightbox="image" data-title="Exeter St Davids" class="popup_link">Exeter St Davids</a>
  </div>
`;
var marker = L.marker([50.7294333305537, -3.543730040076946], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Dawlish駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Dawlish Station">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/dawlish.webp" alt="Dawlish Station">
    </a>
    <a href="" data-lightbox="image" data-title="Dawlish Station" class="popup_link">Dawlish Station</a>
  </div>
`;
var marker = L.marker([50.58064708288686, -3.4645937602425056], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


// GW_06 Plymouth駅：
    var popupContent = `

     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Plymouth Station">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/plymouth.webp" alt="Plymouth Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Plymouth Station" class="popup_link">Plymouth Station</a>
    </div>
  </div>
`;
var markerPlymouth = L.marker([50.3776674014801, -4.144099241952264], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  Penzance
    var popupContent = `
    
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Penzance">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/penzance.webp" alt="Penzance Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Penzance Station" class="popup_link">Penzance Station</a>
    </div>
  </div>
`;
var markerPenzance = L.marker([50.12204180137364, -5.532390786439714], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);