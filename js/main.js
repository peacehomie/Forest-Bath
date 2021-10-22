//Overlay on & off

function overlayOn() {
  document.getElementById("overlay").style.display = "block";
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

//Swap mute & unmute pic

function swapImage() {
  if (document.getElementById("pic").src.endsWith('sound-off.png') == true) //Comparison
  {
    document.getElementById("pic").src = "images/sound-on.png"; //assignment  

  } else if (document.getElementById("pic").src.endsWith('sound-on.png') == true) {
    document.getElementById("pic").src = "images/sound-off.png";

  }
}