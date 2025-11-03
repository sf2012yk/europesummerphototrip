// Icons module

 //現在の都市（citynow）アイコン：
    var maincityIcon = L.icon({
    iconUrl: "image/icon/maincity.png",
    iconRetinaUrl:"image/icon/maincity@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-city"
    });

    //他の都市（city）アイコン：
    var cityIcon = L.icon({
    iconUrl: "image/icon/city.png",
    iconRetinaUrl:"image/icon/city@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-city"
    });

// 現在位置
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="都市の画像を張る" alt="都市">
    <a href="都市.html" class="popup_link">都市</a>
    <div class="popup_caption">
    <p>
    都市の紹介
    </p>
    </div>
  </div>
`;
var marker都市名City = L.marker([都市の座標], {
  icon: maincityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);