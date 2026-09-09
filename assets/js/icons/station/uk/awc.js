// Icons module

  //主要駅（station）アイコン：
    var stationIcon = L.icon({
    iconUrl: "../../assets/image/icon/train.png",
    iconRetinaUrl:"../../assets/image/icon/train@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-station"
    });

  // AW_01 Euston駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Euston">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/euston.webp" alt="Euston Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Euston Station" class="popup_link">Euston Station</a>
    </div>
  </div>
`;
var markerEuston = L.marker([51.52831505242004, -0.13468317401621938], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

// GW_06 Birmingham New Street駅：
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Birmingham New Street">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/birmingham.webp" alt="Birmingham New Street">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Birmingham New Street Station" class="popup_link">Birmingham New Street</a>
    </div>
  </div>
`;
var markerBirmingham = L.marker([52.47781931496408, -1.89936569926818], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//  Manchester
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Manchester">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/manchesterpiccadilly.webp" alt="Manchester Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Manchester Station" class="popup_link">Manchester Piccadilly</a>
    </div>
  </div>
`;
var markerManchester = L.marker([53.477308627188506, -2.2299399620126628], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Preston
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Preston">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/preston.webp" alt="Preston Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Preston Station" class="popup_link">Preston Station</a>
    </div>
  </div>
`;
var markerPreston = L.marker([53.755888528479566, -2.7073275847086293], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Carlisle
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Carlisle">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/carlisle.webp" alt="Carlisle Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Carlisle Station" class="popup_link">Carlisle Station</a>
    </div>
  </div>
`;
var markerCarlisle = L.marker([54.89053256020592, -2.933184282739173], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);