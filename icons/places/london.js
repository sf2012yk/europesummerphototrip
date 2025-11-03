    //名所（place）アイコン：
    var placeIcon = L.icon({
    iconUrl: "image/icon/place.png",
    iconRetinaUrl:"image/icon/place@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-place"
    });

    
    //その他（photo）アイコン：
    var photoIcon = L.icon({
    iconUrl: "image/icon/photo.png",
    iconRetinaUrl:"image/icon/photo@2x.png",
    shadowUrl: "https://esm.sh/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize:     [40, 40], // アイコンのサイズ
    shadowSize:   [41, 25], // size of the shadow
    iconAnchor:   [13, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [16, 28],  // the same for the shadow
    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
    className: "icon-photo"
    });

//3. ビッグベン：
    var popupContent = `
     <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMRr7PMIrFaY4LGQgGjQy88ImvRpmaTXb4WfugWQVBPZtab6iccPr4OSP3PC98CRbhNGrOitfitYKbZzvXS-mbW-eujPFyuQmZpEYIIECJh5K7ibxf0Mu7aZWcLZ9G0atuZdYAWPd7ps9MLORcHGEruEg=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Big Ben</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ビッグベンの説明
    </p>
    <p>
    <a href="https://bigbentime.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail</a>  
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.50077691418779, -0.12451506657134913], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//4. ハロッズ：
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOcdPzlpA38Kp2UjH4p7pPCT4uZZ8GtkD2U4bwjvokV14ZLEcYvyw8vOmmomZ3sZl3t26fHect6bzsLHEfgnrWYeVciqV2J7Nk1-cwUcaZPkMXsSa_YxGObIjN47FVXF2hpQO1yG2r7Dq0XykqqtJuM=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a class="popup_link">"Harrods" Depart</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ハロッズの説明
    </p>
    <p>
    <a href="https://www.harrods.com/en-gb/c/plan-your-visit" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.499405205079945, -0.16349647802672979], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//5. 大英博物館：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOKqmFKd37wcfR_C-hKbcaqX70XpiGwa1lrbTD7TMzePEtp2lMrguSZlfoIFsYPGZMdcBn8QuiyR5K5T9zZm7lOOKocF6pR7_L3bm-qgnU-h3AjtZV-GMAatUeRVng9dnySpQdla6FwFrVAUW9Uvts6=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Brirish Museum</a>
    <div class="popup_caption">
    <p>
    大英博物館の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.51944005069188, -0.12718707654670758], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//7. クリミア戦争記念碑：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPibnYUau43AOcvKqItLalQ0cM_K_nJYZF70cvvCIDvmjhcuRRursPUgjpiEPTbskUWTWiE7nWmVg4s2AHGNJpf6d3C5WKUWWGVfoB2N51v4Zvf7qN5Fbynd87PQkRKqkU2mopTgeCKb8fHnujDF_Ut=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">War memorial of Crimea</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    クリミア戦争記念碑の説明
    </p>
    <p>
    <a href="https://thecrimeanwar.com/yazi/the-guards-crimean-war-memorial" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail</a>  
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.50734114511353, -0.13268565779529207], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//8. リージェントストリート
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMB9RHA10phCq9ZLeGlMKZj6njin1C4t7ZB4lcADhoJ52sMXQXBkNTgvbCEv5RQNfa_VCalyrK7-ZLdD-ssLoHTOmbjucVV15UCfVSSNDuMTQ9QmCemHl6DJGMjzthq6DqwIoRYIeblR6UFw5q-6ulm=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Regent Street</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    リージェントストリートの説明
    </p>
    <p>
    <a href="https://www.regentstreetonline.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.51006617010329, -0.1377072473857915], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//9. ロンドン金融街
    var popupContent = `
    <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNibm3N-Hl80Ek2YCISEsxZ37ZAKrJegrB-sGsMF2x3oxDL2LGGQHxoBbnAiYClchoNJyqxzc9P4udYpLeydQ1cK_U-qnbdidtioKcAOSUBr6K2d6zSFWXI2nHVnEXnYDvOQhZkih7DL5xXe36-79Hf=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">City of London</a>
    <div class="popup_caption">
    <p style="margin-bottom: 1em!important;">
    ロンドン金融街の説明
    </p>
    <p>
    <a href="https://www.cityoflondon.gov.uk/things-to-do" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Detail (Official)</a>  
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.511691684514645, -0.084411793538647], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//10. ナショナルギャラリー
    var popupContent = `
     <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczMOuo-xGtuOz6ujojbywo3PhQvXPtHXWc3r-rAfx8P9qB9GiY1f27rV5ttcoz5a65bYT9q6SgMu95i2BzSs43U-t3hV29mOdy5Zbi6Fp3sQWSpylrIiONbFyIPlzZq6qb0ECd20uYizBgl8-3UNpNHn=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">National Gallery</a>
    <div class="popup_caption">
    <p>
    ナショナルギャラリーの説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([51.50886781788075, -0.12835044530862647], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);