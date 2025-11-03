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

// 現在位置：
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMh1R_Cgae392EKBqnAQqarG-jDqYpguDiKL_pYUMcGH7lWp88URSkv242XQjbYBC8eLpjpTIQxobW9YNPITVQTmN-ICBCi-0NK0ky5H-wcyDLvCGdNjHnpUNWf03oZ7yyQdGfC-LzdbwjgweLRiUN4fg=w1216-h913-s-no-gm?authuser=0" alt="Paris">
    <a href="Paris.html" class="popup_link">Paris</a>
    <div class="popup_caption">
    <p>
    パリの紹介
    </p>
    </div>
  </div>
`;
var markerParisCity = L.marker([48.84683410206457, 2.3643485065608005], {
  icon: maincityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);