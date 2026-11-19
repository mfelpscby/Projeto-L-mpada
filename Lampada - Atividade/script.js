const lamp = document.getElementById("lamp");
let isLampOn = false;

const bgOff = "radial-gradient(circle, white 8%, black 100%)";
const bgOn = "radial-gradient(circle, white 15%, #ffd60a 100%)";

document.body.style.background = bgOff;

function toggleLamp() {
  isLampOn = !isLampOn;

  if (isLampOn) {
    lamp.src = "assets/lamp_on.png";
    lamp.alt = "Lâmpada acesa";
    document.body.style.background = bgOn;
  } else {
    lamp.src = "assets/lamp_off.png";
    lamp.alt = "Lâmpada apagada";
    document.body.style.background = bgOff;
  }
}

lamp.addEventListener("click", toggleLamp);
