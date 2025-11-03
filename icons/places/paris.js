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

//2. ルーヴル美術館：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczP6Nht0sPKU8F3Y1AMr3pjicf8UzuqAeIO-upVH8FSNzgiP0zM8q1BH8IPuekWqDUzVX8dOjaHiVzFrE7ydWGQchC9UNwDGHOVgVoVfeUgA9WaNHH1BynbQs5_4ly0_a28k0vHhokvkqwyMUKO3xaFpbA=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Musée du Louvre</a>
    <div class="popup_caption">
    <p>
    ルーヴル美術館の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([48.86073376214778, 2.3368960594008947], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//3. オルセー美術館：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczNwJnJWHY3YBuzsMvC98KwZyEP5rOx8lbvoAUDl6IeziV_gocoLTrhdMGLkoZlAMtDbrbfHDnRqDM1O85mGdBwIJMTw74Sst7_pTVRb8NpT00k8yG6PO1pCSrgHKZktTDdpl6jqz03nfjM9qmRC1k1olg=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Musée d'Orsay</a>
    <div class="popup_caption">
    <p>
    オルセー美術館の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([48.85999527293635, 2.3258635817008706], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//4. シャンゼリゼ通り：
    var popupContent = `
   <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczOP8DWNSuWTzckBWliQmJ6C9sb5vFyefroKtGtJFZHFCA0EbiOiRD3eqYggqsOjrK0tlwncFo8poWCdUNw9TvvKKCbWX3Fajk0iaF-ZK8mhNRMXRRD0P3eeLX7XsiORqPGAvt_W9hm0pV0nk8SQAyI4hg=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Les Champs-Élysées</a>
    <div class="popup_caption">
    <p>
    シャンゼリゼ通りの説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([48.86839189844828, 2.311803413640931], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);


//5. サンシャペル教会：
    var popupContent = `
  <div class="popup_summer">
      <img class="popup_img" loading="eager" src="https://lh3.googleusercontent.com/pw/AP1GczPP3jaaprlej2PVcVVhWC36fQb4SwM9k8O8Len4XIqd9z1pNhibp3QXSmeMEluJf89mzuSqvsKXvtYzdpT3RpsKhOLcaJsx1_wCTge2-Z6T8qzc5CqZWUQCEjHEcBECLawX-IQ9DtUV00Wa9VuJphbweg=w1159-h869-s-no-gm?authuser=0" alt="London">
    <a href="" class="popup_link">Sainte chapelle</a>
    <div class="popup_caption">
    <p>
    サンシャペル教会の説明
    </p>
    </div>
  </div>
`;
var marker = L.marker([48.855496246891526, 2.3444696106274336], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//6. ノートルダム大聖堂：
    var popupContent = `
  <div class="popup">
    <img src="https://lh3.googleusercontent.com/pw/AP1GczOzXDwAjQ1OUhupSL1LhDJTgGGjqJ2Zz6bnjtVfSOmfw1Lo1U5vAUkrx65wT-_MdqbkrWeq-e8QPYPzOusJOGbwIjwFybmJsli7jZixD_cEvcGzt8G-h0y811YWazFMrZbqGzGlMkis7YrA49n59HyqcA=w1159-h869-s-no-gm?authuser=0"><a href="#St Pancras Station"><p>ノートルダム大聖堂</p></a></div>
`;
var marker = L.marker([48.85314552856817, 2.34942260162728], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//7. ラ・フランス・ルネサンス：
    var popupContent = `
  <div class="popup">
    <img src="https://lh3.googleusercontent.com/pw/AP1GczNdrDJ0m9C5GQnyp3bg5HGbxZ-wRTXkYXLNOhM9mFAjlM_NTZhtvEnEFU5dOXOpNkFPGqh9AyB1wn8sBRMfSth_Bkara3wWEto06z7awshT34-ox_AVpWoncEFbfzwDwKbTLdoxWPW4eFtNTI7s2hS9gA=w1159-h869-s-no-gm?authuser=0"><a href="#St Pancras Station"><p>ラ・フランス・ルネサンス（フランス復活彫刻）</p></a></div>
`;
var marker = L.marker([48.85575045929262, 2.2878532272863383], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//8. ウィンストン・チャーチル像：
    var popupContent = `
  <div class="popup">
    <img src="https://lh3.googleusercontent.com/pw/AP1GczOkfaAr35HE2exshlM-GktRo8dfFMjVZJvX0XqvuyGmgJj0N_1KgT-wLiuKVcZiBrFUzCFCZlDLZLF1HUEmse7erNdPNB-MVfymY70HJWaVMK5Lbd0cgUVL_9CBlD43AyJLvGG2Y4eRarrP0vEzhBfhSw=w1159-h869-s-no-gm?authuser=0"><a href="#St Pancras Station"><p>ウィンストン・チャーチル像</p></a></div>
`;
var marker = L.marker([48.86532309516195, 2.313994628998788], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//8. モンパルナス駅：
    var popupContent = `
  <div class="popup">
    <img src="https://lh3.googleusercontent.com/pw/AP1GczMTte2NlIztBd0rzfmDs0X-CbeIXFCBM3dIM47a1DYP9gaL6zzuc6bgCV7_Z34B2hvz32wUNw75tL2jziZYPpIFbNvqFbC7qtsLxRNZSFje7HwzRoVA-T_aIExP511OaXg9Fr2KXAwH6T__s7DlUeFx7w=w1159-h869-s-no-gm?authuser=0"><a href="#St Pancras Station"><p>Paris Montparnasse station</p></a></div>
`;
var marker = L.marker([48.84067964618498, 2.3198922163963474], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  className: 'popup_wrapper', // ← ここで外側にクラスを追加
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);

//9. ルクセンブルク公園：
    var popupContent = `
  <div class="popup">
    <img src="https://lh3.googleusercontent.com/pw/AP1GczN2cOPxjzhLMgcZxsd9abDr6p9iMl1DZH0BwS-V3lSgQ_jILe_wJ1DsZps4OyY0leeVOE0fJrjNLaSV7pNJtJO32aCo2PrJwZGVI5uxCF5hFWBcfgxd6EPdZu5nK4QcsZIGbOJr0TIMyZFEKxhudTolYg=w1159-h869-s-no-gm?authuser=0"><a href="#St Pancras Station"><p>ルクセンブルク公園</p></a></div>
`;
var marker = L.marker([48.846759642576174, 2.33814334544728], {
  icon: placeIcon
})
  .bindPopup(popupContent, {
  autoPan: true,
  keepInView: true,
})
  .openPopup()
  .addTo(map);  