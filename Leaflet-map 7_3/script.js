let data, mapObj;

function displayMap(){
  //3: Retrieve the borough from the user via the text input, filter the data using filter(), and generate cards for this subset of data.
  let location = [lat, lon];
    if (!mapObj) {

        mapObj = L.map("map").setView(location, 14);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(mapObj);
    } else {
        mapObj.setView(location, 14);
    }
    if (marker) {
        mapObj.removeLayer(marker);
    }
    marker = L.marker(location).addTo(mapObj);


  let marker = L.marker(location).addTo(map);
  let build = `<div>
                  <h2>Title</h2>
                  <img src="sample.webp" style="width:100%">
                  <hr>
                  <a href="https://leafletjs.com/examples/quick-start/" target="_blank">
                      Leaflet
                  </a>
              </div>`
  marker.bindPopup(build).openPopup();
 
}