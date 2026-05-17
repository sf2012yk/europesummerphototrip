 //主要空港アイコン：
    var airportIcon = L.icon({
    iconUrl: "../../assets/image/icon/airport.png",
    iconRetinaUrl:"../../assets/image/icon/airport@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-airport"
    });

    //サブ空港アイコン：
    var airport2_Icon = L.icon({
    iconUrl: "../../assets/image/icon/airport2.png",
    iconRetinaUrl:"../../assets/image/icon/airport2@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-airport2"
    });

//  HeathrowTerminal3
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="../../assets/image/map/airport/heathrow3.webp" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal3</a>
    <p>
    ヒースロー空港第3ターミナル。ここからは主に長距離国際線が発着。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToViennaCard">
    <p class="next_text">&#x2708; Vienna（1200km）</span>
    </div>
    <div class="next_card" id="HeathrowToRomeCard">
    <p class="next_text">&#x2708; Rome（1400km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal3ToPaddingtonCard">
    <p class="next_text">London City（23km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal3 = L.marker([51.46896718671588, -0.4574958618544679], {
  icon: airportIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  HeathrowTerminal5
    var popupContent = `
      <div class="popup_summer">
    <a href="Heathrow.html">
      <img class="popup_img" loading="eager" src="../../assets/image/map/airport/heathrow5.webp" alt="Heathrow Terminal5">
    </a>
    <div class="popup_caption">
    <a href="Heathrow.html" class="popup_link">Heathrow Terminal5</a>
    <p>
    ヒースロー空港第5ターミナルの説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="HeathrowToParisCard">
    <p class="next_text">&#x2708; Paris（400km）</span>
    </div>
    <div class="next_card" id="HeathrowToAmsterdamCard">
    <p class="next_text">&#x2708; Amsterdam（400km）</span>
    </div>
    <div class="next_card" id="HeathrowToGenevaCard">
    <p class="next_text">&#x2708; Geneva（600km）</span>
    </div>
    <div class="next_card" id="HeathrowTerminal5ToPaddingtonCard">
    <p class="next_text">London City（25km）</span>
    </div>
    </div>
  </div>
`;
var markerHeathrowTerminal5 = L.marker([51.47259800120853, -0.4859364875464297], {
  icon: airportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

// GW_01 Paddington空港専用
    var popupContent = `
     <div class="popup_summer">
    <a href="../../assets/image/map/station/paddington_airport.webp" 
       data-lightbox="image" 
       data-title="Paddington">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/paddington_airport.webp" alt="Paddington Station">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/paddington_airport.webp" data-lightbox="image" data-title="Paddington Station" class="popup_link">Paddington (&#x2708; Access)</a>
    <p>
    ヴィクトリア様式の美しい駅舎を持つ、ロンドン西部のターミナル駅。パディントン駅からロンドン・ヒースロー空港へ直接アクセスすることが可能だ。
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Station</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="goToHeathrowTerminal3Card">
    <p class="next_text">&#x2708; Terminal3 (23km)</span>
    </div>
    <div class="next_card" id="goToHeathrowTerminal5Card">
    <p class="next_text">&#x2708; Terminal5 (25km)</span>
    </div>
    </div>
  </div>
`;
var markerPaddingtonLHR = L.marker([51.51820949995243, -0.1781408423165258], {
  icon: airportIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Paris CDG
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/list/pariscdg.webp" 
       data-lightbox="image" 
       data-title="ParisCDGAirport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/list/pariscdg.webp" alt="Paris CDG Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/list/pariscdg.webp" data-lightbox="image" data-title="Paris CDG Airport" class="popup_link">Paris CDG Airport</a>
    <p>
    シャルルドゴール空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FiumicinoToHeathrowCard">
    <p class="next_text">▶ London（400km）</span>
    </div>
    <div class="next_card" id="FiumicinoToGeneveGVACard">
    <p class="next_text">▶ Doha（5500km）</span>
    </div>
    <div class="next_card" id="FiumicinoToDubaiCard">
    <p class="next_text">▶ Dubai（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerParisCDG = L.marker([49.00762244465584, 2.5504044803475034], {
  icon: airport2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Amsterdam
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/list/schiphol.webp" 
       data-lightbox="image" 
       data-title="AmsterdamAirport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/list/schiphol.webp" alt="Amsterdam Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/list/schiphol.webp" data-lightbox="image" data-title="Amsterdam Airport" class="popup_link">Amsterdam Airport</a>
    <p>
    スキポール空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FiumicinoToHeathrowCard">
    <p class="next_text">▶ London（400km）</span>
    </div>
    <div class="next_card" id="FiumicinoToGeneveGVACard">
    <p class="next_text">▶ Doha（5500km）</span>
    </div>
    <div class="next_card" id="FiumicinoToDubaiCard">
    <p class="next_text">▶ Dubai（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerSchiphol = L.marker([52.309339231997406, 4.761921844786288], {
  icon: airport2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Milano Malpensa
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/list/malpensa.webp" 
       data-lightbox="image" 
       data-title="AmsterdamAirport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/list/malpensa.webp" alt="Milano Malpensa Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/list/malpensa.webp" data-lightbox="image" data-title="Milano Malpensa Airport" class="popup_link">Milano Malpensa Airport</a>
    <p>
    マルペンサ空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Aiport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FiumicinoToHeathrowCard">
    <p class="next_text">▶ London（600km）</span>
    </div>
    <div class="next_card" id="FiumicinoToGeneveGVACard">
    <p class="next_text">▶ Doha（5500km）</span>
    </div>
    <div class="next_card" id="FiumicinoToDubaiCard">
    <p class="next_text">▶ Dubai（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerMalpensa = L.marker([45.6273767762583, 8.712078728053363], {
  icon: airport2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ローマ
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/place/Fiumicino/place_6.webp" 
       data-lightbox="image" 
       data-title="Roma Fiumicino">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/place/Fiumicino/place_6.webp" alt="Roma Fiumicino">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/place/Fiumicino/place_6.webp" data-lightbox="image" data-title="Roma Fiumicino" class="popup_link">Roma Fiumicino</a>
    <p>
    ローマ・フィウミチーノ空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FiumicinoToHeathrowCard">
    <p class="next_text">▶ London（1200km）</span>
    </div>
    <div class="next_card" id="FiumicinoToGeneveGVACard">
    <p class="next_text">▶ Geneve（500km）</span>
    </div>
    <div class="next_card" id="FiumicinoToDubaiCard">
    <p class="next_text">▶ Dubai（5000km）</span>
    </div>
    </div>
  </div>
`;
var markerFiumicino = L.marker([41.79398762260918, 12.251412147828841], {
  icon: airportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ジュネーブ空港
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/place/Geneveairport/place_1.webp" 
       data-lightbox="image" 
       data-title="Geneve Airport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/place/Geneveairport/place_1.webp" alt="Geneve Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/place/Geneveairport/place_1.webp" data-lightbox="image" data-title="Geneve Airport" class="popup_link">Geneve Airport</a>
    <p>
    ジュネーブ空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="GeneveGVAToHeathrowCard">
    <p class="next_text">▶ London（800km）</span>
    </div>
    <div class="next_card" id="GeneveGVAToFiumicinoCard">
    <p class="next_text">▶ Roma（500km）</span>
    </div>
    <div class="next_card" id="GeneveGVAToDubaiCard">
    <p class="next_text">▶ Dubai（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerGeneveAirport = L.marker([46.2311652737033, 6.110209303646608], {
  icon: airportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  Vienna Airport
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/map/station/viennaAirport.webp" 
       data-lightbox="image" 
       data-title="ViennaAirport">
      <img class="popup_img" loading="eager" src="../../assets/image/map/station/viennaAirport.webp" alt="Vienna Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/map/station/viennaAirport.webp" data-lightbox="image" data-title="Vienna Airport" class="popup_link">Vienna Airport</a>
    <p>
    駅の説明
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="FlughafenWienToViennaCard">
    <p class="next_text">▶ London（1200km）</span>
    </div>
    <div class="next_card" id="FlughafenWienToViennaCard">
    <p class="next_text">▶ Dubai（5000km）</span>
    </div>
    <div class="next_card" id="FlughafenWienToViennaCard">
    <p class="next_text">▶ Doha（5000km）</span>
    </div>
    </div>
  </div>
`;
var markerFlughafenWien = L.marker([48.120983101278604, 16.563218852576007], {
  icon: airport2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ドバイ空港
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/place/Dubai/place_5.webp" 
       data-lightbox="image" 
       data-title="Dubai Airport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/place/Dubai/place_5.webp" alt="Dubai Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/place/Dubai/place_5.webp" data-lightbox="image" data-title="Dubai Airport" class="popup_link">Dubai Airport</a>
    <p>
    ドバイ空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="GeneveGVAToHeathrowCard">
    <p class="next_text">▶ Doha（500km）</span>
    </div>
    <div class="next_card" id="GeneveGVAToDubaiCard">
    <p class="next_text">▶ Roma（5000km）</span>
    </div>
    <div class="next_card" id="GeneveGVAToFiumicinoCard">
    <p class="next_text">▶ Geneve（5300km）</span>
    </div>
    <div class="next_card" id="GeneveGVAToDubaiCard">
    <p class="next_text">▶ London（5500km）</span>
    </div>
    </div>
  </div>
`;
var markerDubai = L.marker([25.251216981639278, 55.36916255872161], {
  icon: airportIcon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);

//  ドーハ空港
    var popupContent = `
      <div class="popup_summer">
    <a href="../../assets/image/genre/flight/list/doha.webp" 
       data-lightbox="image" 
       data-title="Doha Airport">
      <img class="popup_img" loading="eager" src="../../assets/image/genre/flight/list/doha.webp" alt="Doha Airport">
    </a>
    <div class="popup_caption">
    <a href="../../assets/image/genre/flight/list/doha.webp" data-lightbox="image" data-title="Doha Airport" class="popup_link">Doha Airport</a>
    <p>
    ドーハ空港
    </p>
    </div>
    <a onclick="toggleSection('nextVisitSection')" class="popup_link">▼ Next Airport</a>
    <div id="nextVisitSection" class="popup_section">
    <div class="next_card" id="DubaiToFiumicinoCard">
    <p class="next_text">▶ Dubai（500km）</span>
    </div>
    <div class="next_card" id="DubaiToGeneveGVACard">
    <p class="next_text">▶ Paris（5500km）</span>
    </div>
    <div class="next_card" id="DubaiToHeathrowCard">
    <p class="next_text">▶ London（5800km）</span>
    </div>
    </div>
  </div>
`;
var markerDoha = L.marker([25.269495690648917, 51.60161800816268], {
  icon: airport2_Icon 
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .addTo(map);