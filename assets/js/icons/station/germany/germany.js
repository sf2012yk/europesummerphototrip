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

//  Cologne
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/cologne.webp" 
       data-lightbox="image" 
       data-title="Cologne">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/cologne.webp" alt="Cologne Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/cologne.webp" data-lightbox="image" data-title="Cologne Station" class="popup_link">Cologne Station</a>
    </div>
  </div>
`;
var markerCologne = L.marker([50.94325481600945, 6.9585388293166295], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Flughafen
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Flughafen">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/flughafen.webp" alt="Flughafen">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Frankfurt Station" class="popup_link">Flughafen (Airport)</a>
    </div>
  </div>
`;
var markerFlughafen = L.marker([50.05293131033702, 8.570193641183682], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Frankfurt
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Frankfurt">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/frankfurt.webp" alt="Frankfurt Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Frankfurt Station" class="popup_link">Frankfurt Station</a>
    </div>
  </div>
`;
var markerFrankfurt = L.marker([50.10686863147775, 8.662539152027437], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Heidelberg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Heidelberg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/heidelberg.webp" alt="Heidelberg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Heidelberg Station" class="popup_link">Heidelberg Station</a>
    </div>
  </div>
`;
var markerHeidelberg = L.marker([49.40372754662851, 8.675195233717874], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Idstein
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Idstein">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/idstein.webp" alt="Idstein Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Idstein Station" class="popup_link">Idstein Station</a>
    </div>
  </div>
`;
var markerIdstein = L.marker([50.216138494058946, 8.257264943558555], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  Seligenstadt
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Seligenstadt">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/seligenstadt.webp" alt="Seligenstadt Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Seligenstadt Station" class="popup_link">Seligenstadt Station</a>
    </div>
  </div>
`;
var markerSeligenstadt = L.marker([50.041556133124594, 8.967509066294852], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


  //  nurnberg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Nurnberg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/nurnberg.webp" alt="Nurnberg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Nurnberg Station" class="popup_link">Nurnberg Station</a>
    </div>
  </div>
`;
var markerNurnberg = L.marker([49.44567847015998, 11.081854166258191], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

 //  Wurzburg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Wurzburg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/wurzburg.webp" alt="Wurzburg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Wurzburg Station" class="popup_link">Wurzburg Station</a>
    </div>
  </div>
`;
var markerWurzburg = L.marker([49.80211087604598, 9.935629793264921], {
  icon: stationIcon //途中駅はstation_2_Iconで
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Bamberg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Bamberg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/bamberg.webp" alt="Bamberg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Bamberg Station" class="popup_link">Bamberg Station</a>
    </div>
  </div>
`;
var markerBamberg = L.marker([49.90062356088548, 10.899776879778614], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Munich
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Munich">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/munich.webp" alt="Munich Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Munich Station" class="popup_link">Munich Station</a>
    </div>
  </div>
`;
var markerMunich = L.marker([48.14066779898462, 11.557672139486796], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Leipzig
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Leipzig">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/leipzig.webp" alt="Leipzig Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Leipzig Station" class="popup_link">Leipzig Station</a>
    </div>
  </div>
`;
var markerLeipzig = L.marker([51.34592967003053, 12.382321489123433], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Dresden
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Dresden">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/dresden.webp" alt="Dresden Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Dresden Station" class="popup_link">Dresden Station</a>
    </div>
  </div>
`;
var markerDresden = L.marker([51.04057033145552, 13.731107960804325], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Riesa
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Riesa">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/riesa.webp" alt="Riesa Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Riesa Station" class="popup_link">Riesa Station</a>
    </div>
  </div>
`;
var markerRiesa = L.marker([51.309766116006614, 13.28776399520987], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Berlin
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Berlin">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/berlin.webp" alt="Berlin Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Berlin Station" class="popup_link">Berlin Central Station</a>
    </div>
  </div>
`;
var markerBerlin = L.marker([52.52502885143288, 13.369368039466343], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Hamburg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Hamburg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/hamburg.webp" alt="Hamburg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Hamburg Station" class="popup_link">Hamburg Station</a>
    </div>
  </div>
`;
var markerHamburg = L.marker([53.55296409369695, 10.00679677815908], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Lubeck
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Lubeck">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/lubeck.webp" alt="Lubeck Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Lubeck Station" class="popup_link">Lubeck Station</a>
    </div>
  </div>
`;
var markerLubeck = L.marker([53.86759355715971, 10.669932497760719], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);


//  Luneburg
    var popupContent = `
      <div class="popup_summer">
    <a href="" 
       data-lightbox="image" 
       data-title="Luneburg">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/luneburg.webp" alt="Luneburg Station">
    </a>
    <div class="popup_caption">
    <a href="" data-lightbox="image" data-title="Luneburg Station" class="popup_link">Luneburg Station</a>
    </div>
  </div>
`;
var markerLuneburg = L.marker([53.24989626250631, 10.419818946917102], {
  icon: stationIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', 
  autoPan: true,
  keepInView: true,
})
  .addTo(map);