// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "image/icon/train.png",
    iconRetinaUrl:"image/icon/train@2x.png",
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
    iconUrl: "image/icon/train_2.png",
    iconRetinaUrl:"image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });

//  主要駅
    var popupContent = `
      <div class="popup_summer">
    <a href="画像URLを貼る" 
       data-lightbox="image" 
       data-title="Leeds">
      <img class="popup_img" loading="eager" src="画像URLを貼る" alt="Leeds Station">
    </a>
    <div class="popup_caption">
    <a href="画像URLを貼る" data-lightbox="image" data-title="Leeds Station" class="popup_link">Leeds Station</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="LeedsToA駅Card">
    <p class="next_text">▶ A駅（aakm）</span>
    </div>
    <div class="next_card" id="LeedsToB駅Card">
    <p class="next_text">▶ B駅（bbkm）</span>
    </div>
    <div class="next_card" id="LeedsToC駅Card">
    <p class="next_text">▶ C駅（cckm）</span>
    </div>
    </div>
  </div>
`;
var markerLeeds = L.marker([53.7946841310327, -1.5475408292829431], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);