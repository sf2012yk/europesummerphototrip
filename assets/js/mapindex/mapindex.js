
// Leaflet地図を初期化
const map = L.map('mapindextrue', {
    center: [51.5297106343556, -0.1140554568335832], // 初期ビュー（ヨーロッパ広域）
    zoom: 10,
    minZoom: 7,
    maxZoom: 14,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    maxBounds: [
        [35.0, -10.0], // 南西端
        [60.0, 30.0]   // 北東端
    ],
    maxBoundsViscosity: 1.0
});

// タイルレイヤー追加
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 国・都市セレクト
const countrySelect = document.getElementById('countrySelect');
const citySelect = document.getElementById('citySelect');
const keywordInput = document.getElementById('keywordInput');

// 国ごとの都市リスト
const citiesByCountry = {
    uk: ['London', 'Manchester'],
    fr: ['Paris']
};

// 都市ごとの座標（中心位置）
const cityCenters = {
    london: [51.509865, -0.118092],
    manchester: [53.4808, -2.2426],
    paris: [48.8566, 2.3522]
};


// アニメーションオプション
const flyOptions = {
    animate: true,
    duration: 1.2,        // 秒
    easeLinearity: 0.2   // 緩急
};


// 国選択時：都市リスト更新
countrySelect.addEventListener('change', () => {
    const selectedCountry = countrySelect.value;
    citySelect.innerHTML = '<option value="">City Select</option>';

    if (selectedCountry && citiesByCountry[selectedCountry]) {
        citiesByCountry[selectedCountry].forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase();
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    
    // 現在位置と初期ビューの距離を計算
    const currentCenter = map.getCenter();
    const indexCenter = [51.5297106343556, -0.1140554568335832];
    const distance = map.distance(currentCenter, indexCenter);


    
    // 距離に応じてduration調整（例：100,000で割る）
    let duration = Math.min(Math.max(distance / 100000, 0.8), 3.0);

    console.log(`戻す距離: ${distance}m, Duration: ${duration}s`);

    map.flyTo(indexCenter, 10, {
        duration: duration,
        easeLinearity: 0.15
    });
});

// 都市選択時：中心移動のみ
citySelect.addEventListener('change', () => {
    const cityKey = citySelect.value;
    if (!cityKey) {
        
     map.flyTo([51.5297106343556, -0.1140554568335832], 10, { duration: 1.2, easeLinearity: 0.15 });
        return;

    }
    const center = cityCenters[cityKey];
    if (center) {
        
 const currentCenter = map.getCenter();

        // 距離計算（メートル）
        const distance = map.distance(currentCenter, center);

        // durationを距離に応じて調整（例：距離が長いほど遅く）
        // 基準：500kmで約2秒、100kmで約0.8秒
        let duration = Math.min(Math.max(distance / 100000, 1.5), 3.0);
        // ↑ 最小0.8秒、最大3秒に制限

        
        // ✅ ここでログ出力
        console.log(`Distance: ${distance}m, Duration: ${duration}s`);


        map.flyTo(center, 12, {
            duration: duration,
            easeLinearity: 0.15
        });

    }
});


// キーワードと都市の対応表
const keywordToCity = {
    'london eye': 'london',
    'oxford': 'london',
    'manchester': 'manchester',
    'eiffel': 'paris',
    'paris': 'paris'
};

// キーワード入力イベント
keywordInput.addEventListener('input', () => {
    const keyword = keywordInput.value.toLowerCase().trim();
    if (!keyword) return;

    // キーワードに対応する都市を検索
    let matchedCity = null;
    for (const key in keywordToCity) {
        if (keyword.includes(key)) {
            matchedCity = keywordToCity[key];
            break;
        }
    

    // 都市が見つかったら地図を移動
    if (matchedCity && cityCenters[matchedCity]) {
        map.setView(cityCenters[matchedCity], 12, { animate: true });

        // 都市セレクトも同期
               citySelect.value = matchedCity;
    }

  }});