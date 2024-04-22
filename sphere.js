// Select the button element
const redirectButton4 = document.getElementById("homeBtn");

// Add event listener to the button
redirectButton4.addEventListener("click", function () {
  // Redirect to the desired HTML page
  window.location.href = "index.html";
});

document.getElementById("calc-btn").addEventListener("click", calcAll);

function calcAll() {
  //input
  let num1 = +document.getElementById("num1").value;

  let volOut = (4/3) * (Math.PI) * (num1 ** 3)
  let areaOut = 4 * (Math.PI) * (num1 ** 2);

  volOut = volOut.toFixed(2);
  areaOut = areaOut.toFixed(2);


  //output
  document.getElementById("volOut").innerHTML = volOut;
  document.getElementById("areaOut").innerHTML = areaOut;

}