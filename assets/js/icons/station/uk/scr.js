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

//  Aberdeen
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Aberdeen">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Aberdeen Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Aberdeen Station" class="popup_link">Aberdeen Station</a>
    </div>
  </div>
`;
var markerAberdeen = L.marker([57.1419491653465, -2.0975924191865976], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Montrose
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Montrose">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Montrose Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Montrose Station" class="popup_link">Montrose Station</a>
    </div>
  </div>
`;
var markerMontrose = L.marker([56.712829461265535, -2.472225823682804], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
