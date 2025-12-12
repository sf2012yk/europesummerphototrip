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

//  Cambridge
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Cambridge">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Cambridge Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Cambridge Station" class="popup_link">Cambridge Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="CambridgeToLondonCard">
    <p class="next_text">▼ London（aakm）</span>
    </div>
    <div class="next_card" id="CambridgeToElyCard">
    <p class="next_text">▲ Ely（bbkm）</span>
    </div>
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
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Ely">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Ely Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Ely Station" class="popup_link">Ely Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="ElyToCambridgeCard">
    <p class="next_text">▶ Cambridge（20km）</span>
    </div>
    <div class="next_card" id="ElyToPeterboroughC50d">
    <p class="next_text">▶ Peterborough（50km）</span>
    </div>
    <div class="next_card" id="ElyToLondonCard">
    <p class="next_text">▶ London（120km）</span>
    </div>
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

