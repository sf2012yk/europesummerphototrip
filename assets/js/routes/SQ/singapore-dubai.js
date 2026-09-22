// 始発 終着 
const EM_Changi_DXB = [1.357498138269599, 103.98833398368646];
const EM_Tanamerah_DXB = [1.3106463450107246, 103.97653622583559];
const EM_KualaLumpur_DXB = [3.1957499853144187, 101.74054309289991];
const EM_Nellore_DXB = [14.54929940875438, 80.0107592200021];
const EM_Dubai_DXB = [25.251227093649398, 55.36661696513273];

// ルートポリライン
const EM_Dubai = L.polyline
([EM_Changi_DXB,EM_Tanamerah_DXB,EM_KualaLumpur_DXB,EM_Nellore_DXB,EM_Dubai_DXB
], { color: '#0f1010', weight: 1.5, opacity: 0.7, dashArray: '2, 4' }).addTo(map);
     
