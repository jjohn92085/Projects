const balloon = document.getElementById("balloon")

balloon.addEventListener("click", () => {
    //adds animation
    balloon.style.animation = "pop 0.3s linear";
    //removes balloon from the DOM
    setTimeout(() => {
        balloon.remove();
    }, 300);
});