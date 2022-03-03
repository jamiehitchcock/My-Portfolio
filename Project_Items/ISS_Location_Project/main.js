// set latitude, longitude and zoom level on map using leaflet
const myMap = L.map('issMap').setView([0,0],1.5);

// Making a marker with a custom icon
const issIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [100, 64],
    // set anchor in middle of icon, (50% of the size)
    iconAnchor: [50, 32]
  });
//   add custom marker to map at lat,long 0,0 initially
  const marker = L.marker([0, 0], { icon: issIcon }).addTo(myMap);

// add attribution for using openstreetmap
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// lat, long and zoom level determine the tiles to apply to map
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(myMap);

const issApiUrl = "https://api.wheretheiss.at/v1/satellites/25544?units=miles";

// first time the function is called
let firstTime = true;

// asynchronous function to fetch iss location
async function getISSLocation(){
    const response = await fetch(issApiUrl);
    const data = await response.json();
    const { altitude, velocity, latitude, longitude, visibility} = data;

    console.log(data);
    
    // set the marker to the current ISS position
    marker.setLatLng([latitude, longitude]);

    // move the map so it is centerred on ISS location, first time only, to stop map moving
    if (firstTime){
        myMap.setView([latitude, longitude],3.5)
        firstTime = false;
    }

    document.getElementById("alt").textContent = altitude.toFixed(2);
    document.getElementById("vel").textContent = velocity.toFixed(2);
    document.getElementById("lat").textContent = latitude.toFixed(2);
    document.getElementById("lon").textContent = longitude.toFixed(2);
    document.getElementById("vis").textContent = visibility;
};
// call function to move the ISS to new position on map
getISSLocation();

// get new data every 5 seconds
setInterval(getISSLocation, 2000);
