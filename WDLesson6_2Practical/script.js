function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build=`
      <div class="card">
           <h2>${ school.name }</h2>
           <img src="${school.image}">
           <p>${school.address}</p>
      </div>
      `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name": "Taylor Swift",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Taylor_Swift_2019_by_Gage_Skidmore.jpg/1024px-Taylor_Swift_2019_by_Gage_Skidmore.jpg", 
    "album": "1989",
    "url": "https://www.taylorswift.com" ,
  }

  let output = document.getElementById("output");

    let build = `
      <div class="card">
           <h2>${ artist.name }</h2>
           <a href="${ artist.url }" target="_blank">
             <img src="${ artist.image }" alt="${ artist.name } - ${ artist.album }">
           </a>
           <p>Album: ${ artist.album }</p>
           <a href="${ artist.url }" class="button" target="_blank">Visit Artist's Website</a>
      </div>
      `;

  output.innerHTML = build;
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.

}


