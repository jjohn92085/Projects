let button = document.querySelector(".button")
let colors = ["red", "blue", "orange", "green", "yellow", "white"]

function Changer() {

    //I want to change the background color for the webpage using the colors array
    let randomIndex = Math.floor(Math.random() * colors.length);
    
    // Access the element at the random index
    let randomElement = colors[randomIndex]

    let backgroundColor = document.body.style.backgroundColor = randomElement

}