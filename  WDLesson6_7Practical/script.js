let data;

async function init(){
  let link = "311.json"; 
  let info = await fetch(link);
  data = await info.json();

  displayData(data);
}
function displayData(dataset){
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < dataset.length; i++){
    let c = dataset[i];

    build += `
      <div class="card">
        <h3>${c.crash_date}</h3>
        <p><b>Borough:</b> ${c.borough}</p>
        <p><b>Zip:</b> ${c.zip_code}</p>
        <p><b>Injured:</b> ${c.number_of_persons_injured}</p>
        <p><b>Killed:</b> ${c.number_of_persons_killed}</p>
        <p><b>Factor:</b> ${c.contributing_factor_vehicle_1}</p>
        <p><b>Vehicle:</b> ${c.vehicle_type_code1}</p>
      </div>
    `;
  }

  output.innerHTML = build;
}

function filterByBorough(){
  let borough = document.getElementById("borough").value.toUpperCase();
  let result = document.getElementById("result");

  let filtered = [];
  let count = 0;

  for(let i = 0; i < data.length; i++){
    if(data[i].borough && data[i].borough.toUpperCase() === borough){
      filtered.push(data[i]);
      count++;
    }
  }

  result.innerHTML = `${count} results found`;
  displayData(filtered);
}

function advancedFilter(){
  let zip = document.getElementById("zip").value;
  let injured = Number(document.getElementById("injured").value); 
  let result = document.getElementById("result");

  let filtered = [];
  let count = 0;

  for(let i = 0; i < data.length; i++){
    let collision = data[i]; 

    if(
      (zip === "" || collision.zip_code == zip) &&
      (isNaN(injured) || collision.number_of_persons_injured >= injured)
    ){
      filtered.push(collision);
      count++; 
    }
  }

  result.innerHTML = `${count} results found`;
  displayData(filtered);
}