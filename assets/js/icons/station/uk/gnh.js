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


//  Cambridge
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Cambridge">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Cambridge Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Cambridge Station" class="popup_link">Cambridge Station</a>
    </div>
  </div>
`;
var markerCambridge = L.marker([52.19423832124076, 0.13776144634136725], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Ely
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Ely">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Ely Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Ely Station" class="popup_link">Ely Station</a>
    </div>
  </div>
`;
var markerEly = L.marker([52.39089200685495, 0.2666843691393502], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

