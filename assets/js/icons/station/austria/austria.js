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


//  Vienna Airport
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Vienna Airport">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/viennaairportt.webp" alt="Vienna Airport">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Vienna Airport Station" class="popup_link">Vienna Airport</a>
    </div>
  </div>
`;
var markerViennaAirport = L.marker([48.120983101278604, 16.563218852576007], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Vienna
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Vienna">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/vienna.webp" alt="Vienna Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Vienna Station" class="popup_link">Vienna Station</a>
    </div>
  </div>
`;
var markerViennaCentral = L.marker([48.18500525586605, 16.377671700808875], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Salzburg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Salzburg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/salzburg.webp" alt="Salzburg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Salzburg Station" class="popup_link">Salzburg Station</a>
    </div>
  </div>
`;
var markerSalzburg = L.marker([47.812680660648525, 13.045783626953863], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Innsbruck
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Innsbruck">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/innsbruck.webp" alt="Innsbruck Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Innsbruck Station" class="popup_link">Innsbruck Station</a>
    </div>
  </div>
`;
var markerInnsbruck = L.marker([47.26253050680029, 11.40060390583582], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);