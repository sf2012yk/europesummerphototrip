
    //他のSalzburg（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOvQ8gcyC3KHInOLyHbN9wMufiq8gDj59pgqN7jBve_Uri-q4MvaJ4nsNV9pxFyAOsCOGGw6Oy8yW580c1YTRrkZhBnicWVWGRfLhcByREJ37J231ScssT3st3960MeNqPxWTktHmukAYl0mIJlIg-KiA=w1216-h913-s-no-gm?authuser=0" alt="Salzburg">
    <a href="Salzburg.html" class="popup_link">Salzburg</a>
    <div class="popup_caption">
    <p>
    Salzburgの紹介
    </p>
    </div>
  </div>
`;
var markerSalzburgCity = L.marker([47.80614661768393, 13.053370367549268], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);