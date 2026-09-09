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


//  Basel SBB
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Basel SBB">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/BaselSBB.jpg" alt="Basel SBB Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Basel SBB Station" class="popup_link">Basel SBB</a>
    </div>
  </div>
`;
var markerBaselSBB = L.marker([47.54717812533671, 7.5890015703746885], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Zurich
    var popupContent = `
      <div class="popup_summer">
    <a href="p" 
       data-lightbox="image" 
       data-title="Zurich">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/zurich.webp" alt="Zurich Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Zurich Station" class="popup_link">Zurich Station</a>
    </div>
  </div>
`;
var markerZurich = L.marker([47.37828613669217, 8.539567674375348], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Olten
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Olten">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/olten.webp" alt="Olten Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Olten Station" class="popup_link">Olten Station</a>
    </div>
  </div>
`;
var markerOlten = L.marker([47.35196790659258, 7.907783649218526], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Bern
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bern">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bern.webp" alt="Bern Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bern Station" class="popup_link">Bern Station</a>
    </div>
  </div>
`;
var markerBern = L.marker([46.948380752911675, 7.43530795120567], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Lausanne
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Lausanne">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/lausanne.webp" alt="Lausanne Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Lausanne Station" class="popup_link">Lausanne Station</a>
    </div>
  </div>
`;
var markerLausanne = L.marker([46.51675788314949, 6.6288213303053105], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Geneva
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Geneva">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/geneve.webp" alt="Geneva Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Geneva Station" class="popup_link">Geneva Station</a>
    </div>
  </div>
`;
var markerGeneva = L.marker([46.20996053976771, 6.141703085164053], {
  icon: stationIcon //途中駅はstation_2_Iconで切り替え
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  Geneva Airport
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Geneva">
      <img class="popup_img" loading="eager" src="../../assets/image/map/airport/genevegva.webp" alt="Geneva Airport">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Geneva Airport" class="popup_link">Geneva Airport</a>
    </div>
  </div>
`;
var markerGenevaAirport = L.marker([46.2314339144919, 6.10746786781946], {
  icon: stationIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);