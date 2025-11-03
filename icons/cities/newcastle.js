// Icons module
    //他のNewcastle（city）アイコン：
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
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczO85jNIANIi5mIlbi-OHk9T1YHnVaL5GbjbtqcBn4-8rtQH6_84bQvX6oeRRcfq_cz4EXjnd_mB-mXC_2xtYts3lifEb6WNXZE3Nt9XG3pvZeqDL8lHNtlmblJLAiu3afB9t5WNyumsElg9ud0FGiZ_Vg=w1216-h913-s-no-gm?authuser=0" alt="Newcastle">
    <a href="Newcastle.html" class="popup_link">Newcastle</a>
    <div class="popup_caption">
    <p>
    Newcastleの紹介
    </p>
    </div>
  </div>
`;
var markerNewcastleCity = L.marker([54.96958545290051, -1.626806870982161], {
  icon: cityIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);
