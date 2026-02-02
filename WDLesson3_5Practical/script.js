/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
  let ra1 = document.getElementById("ra1");
  let ra2 = document.getElementById("ra2");
  let output = document.getElementById("output");

  let area = parseFloat(ra1.value) * parseFloat(ra2.value);

  output.innerHTML = area;
}

function recPerimeter(){
  let rp1 = document.getElementById("rp1");
  let rp2 = document.getElementById("rp2");
  let rp3 = document.getElementById("rp3");
  let rp4 = document.getElementById("rp4");
  let output = document.getElementById("output");

  let Perimeter = parseFloat(rp1.value) + parseFloat(rp2.value) + parseFloat(rp3.value) + parseFloat(rp4.value);

  output.innerHTML = Perimeter;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
  let ca1 = document.getElementById("ca1");
  let output = document.getElementById("output");

let area = pi * (radius ** 2);

  output.innerHTML = area;

}

function cirPerimeter(){
  let cc1 = document.getElementById("cc1");
  let output = document.getElementById("output");

let circumference = pi * (radius * 2);

  output.innerHTML = circumference;

}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}