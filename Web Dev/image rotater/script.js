// variable declarations
const image = document.getElementById('rotate-image');
let rotationDegree = 0;
let autoRotateInterval //stores the interval ID for auto-rotation

image.addEventListener('click', () => {
    if (!autoRotateInterval) {
        autoRotateInterval = setInterval(autoRotate, 100); // sets the interval for auto-rotate
    } else {
        clearInterval(autoRotateInterval) // clear interval
        autoRotateInterval = null;
    }
});

function autoRotate() {
    rotationDegree += 5;
    image.style.transform = `rotate(${rotationDegree}deg)`;
}

5