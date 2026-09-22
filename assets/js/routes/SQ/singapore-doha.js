// 始発 終着 
const QR_Changi_DOH = [1.357498138269599, 103.98833398368646];
const QR_Tanamerah_DOH = [1.3106463450107246, 103.97653622583559];
const QR_Malaka_DOH = [2.150551003794933, 102.23594047838777];
const QR_Medan_DOH = [3.598739569237312, 98.68412772107796];
const QR_Puducherry_DOH = [1.357498138269599, 103.98833398368646];
const QR_Bengaluru_DOH = [13.04325435928171, 77.58843778362173];
const QR_AbuDhabi_DOH = [24.432475375765843, 54.34460254122379];
const QR_Doha_DOH = [25.267483125982892, 51.618988253293935];

// ルートポリライン
const QR_Doha = L.polyline
([QR_Changi_DOH,QR_Tanamerah_DOH,QR_Malaka_DOH,QR_Medan_DOH,
QR_Puducherry_DOH,QR_Bengaluru_DOH,QR_AbuDhabi_DOH,    
QR_Doha_DOH
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
