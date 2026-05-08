//get( ) accepts an id of an element and returns the actual element with that id. This functions serves to shorten the code required to get an element
function get(id){
  return document.getElementById(id);
}

//Challeng 1: Create a function card that accepts a JSON of a 311 complaint, generates and returns an appropriate card for the complaint
function card(info){
  let build = `<div class="card">
                  <h3>${info.violation_description}</h3>
                  <hr>
                  <p>Borough: ${info.violation_county}</p>
                  <p>Plate: ${info.plate}</p>
                  <p>Issue Date: ${info.issue_date}</p>
                  <p>Fine Amount: ${info.fine_amount}</p>
               </div>`;
  return build;
}



//Challenge 2: Create a function cards that accepts an array of JSON of Open Parking and Camera Violations, generates and return cards for each violation
function cards(data){
  let build = "";
  
  for(let i = 0; i < data.length; i++){
    let violation = data[i];
    build += card(violation);
  }

  return build;
}
