function popBalloon() {
    // Gets the balloon element
    const balloon = document.getElementById('balloon');
  
    // adds the popped class
    balloon.classList.add('popped');
  
    // removes the balloon from the DOM
    setTimeout(() => {
      balloon.remove();
    }, 1000); 

    //adds the balloon to the DOM

    setTimeout(() => {
         // Creates a div
        const div = document.createElement('div');
        div.id = 'balloon'

        // Get the container where you want to add the new element
    const container = document.getElementById('container');

    // Append the new element to the container
    container.appendChild(div);



    }, 3000)

  }
  