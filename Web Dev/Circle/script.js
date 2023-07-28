// gets the circle element
const circle = document.querySelector('.circle');

// variables for mouse position and offset

let isDragging = false;
let offsetX, offsetY;

// added event listeners

circle.addEventListener('mousedown', onMouseDown);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mouseup', onMouseUp);

// handles mouse down

function onMouseDown(e) {
  if (isDragging) {
    // Stop the circle if it has been dragged already
    isDragging = false;
  } else {
    isDragging = true;

    // Calculate the offset from click and circle position
    offsetX = e.clientX - circle.getBoundingClientRect().left;
    offsetY = e.clientY - circle.getBoundingClientRect().top;
  }
}

// handles the mouse movement event

function onMouseMove(e) {
  if (!isDragging) return;

  // calculate new circle position
    
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  // updates the circle's position
    
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

// this handles the mouseup event

function onMouseUp() {
  isDragging = false;
}
