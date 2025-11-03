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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczN-sXjoM_julfAy79icUCV25Jx_1CgoMlUECJzCB21aRBYp1jlUCBZLjb9DlH3QEMWpk20o4Muq4yOVerUDbbNvuvWdrXCTfQUgUne3GRTUPPAgKQUXOdYCGdRPg6DNwtfcWhbnmrW50D8pt129W7_ZYw=w855-h641-s-no-gm?authuser=0" alt="Paris">
    <a href="London.html" class="popup_link">Edinburgh</a>
    <div class="popup_caption">
    <p>
    エディンバラの紹介
    </p>
    </div>
  </div>
`;
var markerEdinburghCity = L.marker([55.95833488605165, -3.1938055922764055], {
  icon: maincityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

