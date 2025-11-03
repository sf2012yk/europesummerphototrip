// Icons module

    //Birmingham（city）アイコン：
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
    
// ★★Birmingham★★//


// 現在位置
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczP83It6IxMadTWqVpwGOhMb8m2YPgXSrtXPtq0WtIOI8myyyCVcLxdszxoqXxf2VH8tC-S2OWb7__BdgCMy1SUolPNipxZNYWhmXR4ox6h4hbcWEKTgjlDscB-vzQeR5Bkanq3CFxCmBMegjVhCJ14rNQ=w1205-h913-s-no-gm?authuser=0" alt="Birmingham">
    <a href="Birmingham.html" class="popup_link">Birmingham</a>
    <div class="popup_caption">
    <p>
    Birminghamの紹介
    </p>
    </div>
  </div>
`;
var markerBirminghamCity = L.marker([52.48141735724692, -1.8951300529664294], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);