// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element
   
  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/
function area() {
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let output = document.getElementById("output");

  if (length <= 0 || width <= 0) {
    output.innerHTML = "Inappropriate measurement";
  } else {
    let area = length * width;
    output.innerHTML = "Area = " + area;
  }
}


/* Challenge 2:  Create the function for Challenge 1 scenario */



/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
 let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");
  let img = "";

  // Step 2: Decision logic
  if (animal === "Bear" && emotion === "Funny") {
    img = "funnyBear.jpg";
  } 
   if (animal === "Bear" && emotion === "Sad") {
    img = "sadBear.jpg";
  } 
   if (animal === "Cat" && emotion === "Funny") {
    img = "funnyCat.jpg";
  } 
     if (animal === "Cat" && emotion === "Sad") {
    img = "sadCat.jpg";
  } 
   if (animal === "Dog" && emotion === "Funny") {
    img = "funnyDog.jpg";
  } 
   if (animal === "Dog" && emotion === "Sad") {
    img = "sadDog.jpg";
  }
    output.innerHTML = `<img src="${img}" >`;

}