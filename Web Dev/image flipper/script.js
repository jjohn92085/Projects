// this gets the flip card element
const flipCard = document.querySelector('.flip-card-inner');

// adds a click event listener
flipCard.addEventListener("click", function () {
    //toggle the flip effect on click
    if (this.style.transform === "rotateY(180deg)") {
        this.style.transform = "rotateY(0deg)";
    } else {
        this.style.transform = "rotateY(180deg)";
    }
});






// // Get the flip card element
// const flipCard = document.querySelector(".flip-card-inner");

// // Add a click event listener to the flip card
// flipCard.addEventListener("click", function() {
//   // Toggle the flip effect on click
//   if (this.style.transform === "rotateY(180deg)") {
    // this.style.transform = "rotateY(0deg)";
//   } else {
    // this.style.transform = "rotateY(180deg)";
//   }
// });
