//select both elements 
let div = document.querySelector("#container")
let button = document.querySelector("#button")


button.addEventListener("click", function () {

  //creates random values for the positions
  const topMove = Math.floor(Math.random() * 500);
  const rightMove = Math.floor(Math.random() * 500);

  //sets new positions using transform
  div.style.transform = `translate(${rightMove}px, ${topMove}px)`;

});



