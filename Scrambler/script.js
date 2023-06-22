window.onload = scrambler

function scrambler() {
    let input = prompt("What can I scramble for you?")
    
    //this converts the input to an array of characters
    let characters = input.split('');

    //now we loop through each character
    for (let i = characters.length - 1; i > 0; i--) {
        //Create a random index from 0 to i
        let j = Math.floor(Math.random() * (i + 1));
        //This swaps characters at index i and j
        let temp = characters[i];
        characters[i] = characters[j];
        characters[j] = temp;
        }
        //this joins the characters back into a string
        let scrambledInput = characters.join('');    
    
    console.log("Scrambled input: " + scrambledInput);

    alert(scrambledInput)
}



// function scrambleInput() {
    // var userInput = prompt("Please enter a word or phrase:");
    
    // // Convert the input to an array of characters
    // var inputArray = userInput.split('');
    
    // // Shuffle the array using the Fisher-Yates algorithm
    // for (var i = inputArray.length - 1; i > 0; i--) {
    //   var j = Math.floor(Math.random() * (i + 1));
    //   var temp = inputArray[i];
    //   inputArray[i] = inputArray[j];
    //   inputArray[j] = temp;
    // }
    
    // // Join the shuffled array back into a string
    // var scrambledInput = inputArray.join('');
    
    // console.log("Scrambled input: " + scrambledInput);
//   }
  
//   // Call the function to scramble user input
//   scrambleInput();


// function scrambler(input) {
    // //This converts the input string to an array of characters
    // let characters = input.split('');

    // //now we loop through each character
    // for (let i = characters.length - 1; i > 0; i--) {
        // //Create a random index from 0 to i
        // let j = Math.floor(Math.random() * (i + 1));


        // //This swaps characters at index i and j
        // let temp = characters[i];
        // characters[i] = characters[j];
        // characters[j] = temp;
    // }

    // //this joins the characters back into a string
    // return characters.join('');

// }










