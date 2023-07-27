document.getElementById("firstNameForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop the form from submitting and the page reloading

    const firstNameInput = document.getElementById("firstName");
    const firstName = firstNameInput.value.trim() // this removes any white space in front or in the back

    // this clears the letter boxes
    const letterBoxesContainer = document.getElementById("letterBoxes");
    letterBoxesContainer.innerHTML = '';

    // loop through every letter in the first name and create a box for it
    for (let i = 0; i < firstName.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.classList.add("letter-box");
        letterBox.textContent = firstName[i];
        letterBoxesContainer.appendChild(letterBox);
    }
    
    // this clears the input field after showing the letter boxes

    firstNameInput.value = '';

});