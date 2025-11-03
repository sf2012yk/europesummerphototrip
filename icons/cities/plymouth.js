
    //他のPlymouth（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczN29Y9Iau_rcahRwLRrfbbdvziagBrUX6l1zWaZeqHaT8t0f2YYfEcW54nKcQH693nDcwq-3JSxweYHA8AJ53eAVLNnUdZNLljTqN2mjOM077S0WlsVhbY7m9Caziyaf_hg2wadTee8zrN1CY5N8kZPPg=w1216-h913-s-no-gm?authuser=0" alt="Plymouth">
    <a href="Plymouth.html" class="popup_link">Plymouth</a>
    <div class="popup_caption">
    <p>
    Plymouthの紹介
    </p>
    </div>
  </div>
`;
var markerPlymouthCity = L.marker([50.36628319868584, -4.143322998685693], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);