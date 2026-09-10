// 始発 終着 
const Frankfurt_AR = [50.10686863147775, 8.662539152027437];
const FRA_airport = [50.05213795307499, 8.570923411132238];

// ルートポリライン
const FRAirport = L.polyline
([Frankfurt_AR,FRA_airport
], { color: '#000000' }).addTo(map);
