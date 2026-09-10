// 始発 終着 
const Berlin_DB = [52.52502885143288, 13.369368039466343];
const Spandau_DB = [52.53479439488392, 13.196035411454202];
const Hanover_DB = [52.37737976671628, 9.741412077321142];
const Osnabruck_DB = [52.27292343189692, 8.06134045215591];

const Amsterdam_DB = [52.37916601980573, 4.900256248250418];


// ルートポリライン
const BRAM = L.polyline
([Berlin_DB,Spandau_DB,Hanover_DB,Osnabruck_DB,Amsterdam_DB
], { color: '#000000' }).addTo(map);
