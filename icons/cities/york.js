
    //他のYork（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczP1yX-okEh1SZC1lkQXW_6YZb6lDcIWw9DkbWXcdJR_nLKiKwGCMQdtOXz4eSXo6E4HXs3MrlkdRQotDSO6ig_VGkpKY3252AH1Spj6DEom5-DZbltMaxsVZmfQbHE7FBQASy0NGLJuuo_UuznKwogTbA=w1216-h913-s-no-gm?authuser=0" alt="York">
    <a href="York.html" class="popup_link">York</a>
    <div class="popup_caption">
    <p>
    Yorkの紹介
    </p>
    </div>
  </div>
`;
var markerYorkCity = L.marker([53.96336096220634, -1.0859707056947732], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
