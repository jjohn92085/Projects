let isLightOn = false;

function toggleLight() {
  isLightOn = !isLightOn;
  const switchElem = document.querySelector(".switch");
  const lightElem = document.querySelector(".light");
  const body = document.querySelector("body");

  if (isLightOn) {
    switchElem.style.transform = "translateX(50px)";
    lightElem.style.backgroundColor = "#ffd700";
    lightElem.style.boxShadow = "0 0 10px rgba(255, 215, 0, 0.7)";
    body.style.backgroundColor = "white";
  } else {
    switchElem.style.transform = "translateX(0)";
    lightElem.style.backgroundColor = "#ccc";
    lightElem.style.boxShadow = "none";
    body.style.backgroundColor = "black";
  }
}
