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

// LGV01 Paris Gare de Lyon駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="ParisLyon">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/parislyon.webp" alt="Paris Lyon Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Paris Lyon Station" class="popup_link">Paris Gare de Lyon</a>
    </div>
  </div>
`;
var markerParisLyon = L.marker([48.84423772852879, 2.3753086448157688], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// LGV01 Lyon Part Dieu駅：
    var popupContent = `

    <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Lyon Part Dieu">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/lyonpartdieu.webp" alt="Lyon Part Dieu Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Lyon Part Dieu Station" class="popup_link">Lyon Part Dieu</a>
    </div>
  </div>
`;
var markerPartDieu = L.marker([45.7603030076784, 4.860375801911088], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//  Marseille
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Marseille">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/marseille.webp" alt="Marseille">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Marseille Station" class="popup_link">Marseille Saint Charles</a>
    </div>
  </div>
`;
var markerMarseille = L.marker([43.303077109875375, 5.3805544238165535], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);