
 //現在のVienna（citynow）アイコン：
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

// 現在位置
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO5UhHIDOPYmyI89I334eOmEcQWvlvICfQGxU-mtrzpvJZfhgbC_lqES1h5OweHll92TDRgiN29d6xuHrEMZySkvhLoP3kJG1nJ7Ppu5f9CuuHooUZ9485Kbe_5FArX3wb5EYTAOVgSK83Pz5aJFW-lIg=w1216-h913-s-no-gm?authuser=0" alt="Vienna">
    <a href="Vienna.html" class="popup_link">Vienna</a>
    <div class="popup_caption">
    <p>
    Viennaの紹介
    </p>
    </div>
  </div>
`;
var markerViennaCity = L.marker([48.190112947557814, 16.368365045615214], {
  icon: maincityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);