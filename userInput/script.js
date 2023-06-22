let number;

while (true) {

    let userInput = prompt("What's your age?")
   number = parseInt(userInput)

    if (!isNaN(number)) {
        break;
    }
    
    alert("Your input is invalid. Please enter a number");

}

alert("Your age is " + number);

