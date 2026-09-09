// Icons module

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



//  King's Cross
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="King's Cross">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/kingscross.webp" alt="King's Cross Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="King's Cross Station" class="popup_link">London King's Cross</a>
    </div>
  </div>
`;
var markerKingscross = L.marker([51.530637046098505, -0.1233642679259429], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Peterborough
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Peterborough">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Peterborough Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Peterborough Station" class="popup_link">Peterborough Station</a>
    </div>
  </div>
`;
var markerPeterborough = L.marker([52.57388879556104, -0.24981606095851133], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  York
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="York">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/york.webp" alt="York Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="York Station" class="popup_link">York Station</a>
    </div>
  </div>
`;
var markerYork = L.marker([53.95668456824942, -1.0946599488952553], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Darlington
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Darlington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/darlington.webp" alt="Darlington Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Darlington Station" class="popup_link">Darlington Station</a>
    </div>
  </div>
`;
var markerDarlington = L.marker([54.521126434342825, -1.5460040570133933], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Durham
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Durham">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/durham.webp" alt="Durham Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Durham Station" class="popup_link">Durham Station</a>
    </div>
  </div>
`;
var markerDurham = L.marker([54.77983780775699, -1.5814880478633844], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Newcastle
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Newcastle">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/newcastle.webp" alt="Newcastle Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Newcastle Station" class="popup_link">Newcastle Station</a>
    </div>
  </div>
`;
var markerNewcastle = L.marker([54.96814759160355, -1.6176357599706133], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  Edinburgh
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Edinburgh">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/edinburgh.webp" alt="Edinburgh Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Edinburgh Station" class="popup_link">Edinburgh Station</a>
    </div>
  </div>
`;
var markerEdinburgh = L.marker([55.95185702547384, -3.1885119395760397], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);