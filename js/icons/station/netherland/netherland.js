// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "image/icon/train.png",
    iconRetinaUrl:"image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

     //通過駅等（station_2）アイコン：
    var station_2_Icon = L.icon({
    iconUrl: "image/icon/train_2.png",
    iconRetinaUrl:"image/icon/train_2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station_2"
    });

// ES01 Amsterdam Centraal駅：
    var popupContent = `
     <div class="popup_summer">
    <a href="https://lh3.googleusercontent.com/pw/AP1GczPu9G7xWwGwJQP7AAIq93SteLojmMik74lh_tqtGNhLpJLrRre9BPqxiu2HKW11LsHrQK79CFo6BreKgVTtJUS-VJjeQdp6tJAW2BRu7_cGBv7U8caK16jEwe8WrkvOSR4iPefWzBsHiyoWICVSqPUzDg=w855-h641-s-no-gm?authuser=0" 
       data-lightbox="image" 
       data-title="Amsterdam Centraal Station">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" alt="Amsterdam Centraal Station">
    </a>
    <a href="https://lh3.googleusercontent.com/pw/AP1GczNVVu6ElKzZBWCWo2pX-A7OARGxpvLK35_uSIjXnBrwT_uSfs82CEZpB3PngZUKV9AsNRLhqgswO9IH7eFu12BX8c9OBZg6vKFPeDjExbOrXL-S7M_T_YcytSEQm3-n2Y1JekHV_1ic6XWjmQksPCCe=w1159-h869-s-no-gm?authuser=0" data-lightbox="image" data-title="Amsterdam Centraal Station" class="popup_link">Amsterdam Centraal Station</a>
  </div>
`;
var marker = L.marker([52.37916601980573, 4.900256248250418], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);