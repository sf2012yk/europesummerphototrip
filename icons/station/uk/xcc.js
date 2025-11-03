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

      //画像なし駅（station_3）アイコン：
    var station_3_Icon = L.icon({
    iconUrl: "image/icon/train_3.png",
    iconRetinaUrl:"image/icon/train_3@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_3"
    });

//  WorcestershireParkway
    var popupContent = `
      <div class="popup_summer">
    <div class="popup_caption">
    <a class="popup_link">WorcestershireParkway</a>
    <p>
    WorcestershireParkway駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section"> 
    <div class="next_card" id="WorcestershireToBirminghamCard">
    <p class="next_text">▲ Birmingham（bbkm）</span>
    </div>
    <div class="next_card" id="WorcestershireToMortonCard">
    <p class="next_text">▶ Morton（aakm）</span>
    </div>
    <div class="next_card" id="WorcestershireToBristolCard">
    <p class="next_text">▼ Bristol（bbkm）</span>
    </div>
    </div>
  </div>
`;
var markerWorcestershire = L.marker([52.155674356096895, -2.1606399695501706], {
  icon: station_3_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

