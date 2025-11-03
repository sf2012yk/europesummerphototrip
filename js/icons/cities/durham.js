// Icons module

    //他のDurham（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNyW7UH0MMJqxLZKibv88t_pnG5Vi0CF3MB3isGJBdfLyYOMWmJmhiLlhoRHJxVrhc7EGhSmQcuGVfzZOIzyGZCu9cOUrc6UHo52oyh1RxFZZt1kQAHk_bdEsYHKag76txyUSjqaQl2V-8IImx4BgMyIw=w1670-h913-s-no-gm?authuser=0" alt="Durham">
    <a href="Durham.html" class="popup_link">Durham</a>
    <div class="popup_caption">
    <p>
    Durhamの紹介
    </p>
    </div>
  </div>
`;
var markerDurhamCity = L.marker([54.77955421521441, -1.5736597832205812], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);