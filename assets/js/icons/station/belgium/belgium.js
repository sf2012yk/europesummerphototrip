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

//  Brussel
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Brussel">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/brussel.webp" alt="Brussel Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Brussel Station" class="popup_link">Brussel Midi</a>
    </div>
  </div>
`;
var markerBrussel = L.marker([50.83545522369974, 4.334752425478581], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


// ES01 Antwerp_Central駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Brussel">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/brussel.webp" alt="Brussel Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Brussel Station" class="popup_link">Antwerp Central</a>
    </div>
  </div>
`;
var markerAntwerp= L.marker([51.216646870247864, 4.42102673560588], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// DB01 Liège_Guillemins駅：
    var popupContent = `
    <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Brussel">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/brussel.webp" alt="Brussel Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Brussel Station" class="popup_link">Liège Guillemins</a>
    </div>
  </div>
`;
var marker = L.marker([50.62382366427076, 5.567168022242202], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);