// Icons module
    //他のBristol（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMcP091Qp8HkTJuXdBAK9vpJwb9hST4vnbip2V-ZEs-D1ej5HFsdm5pG3CnWcYRreNx6n4z5R7zIvjyRd-_SvsJgtnV2AJ8BWIC-hC0_htubFZ_QEssIb4Mz-wg4B4dUSj6dHHaaw867GYinQsEEybRLw=w1598-h913-s-no-gm?authuser=0" alt="Bristol">
    <a href="Bristol.html" class="popup_link">Bristol</a>
    <div class="popup_caption">
    <p>
    Bristolの紹介
    </p>
    </div>
  </div>
`;
var markerBristolCity = L.marker([51.45538625700809, -2.600503258159932], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);