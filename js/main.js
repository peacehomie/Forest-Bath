//About overlay on & off

function overlayAboutOn() {
  document.getElementById("overlay-about").style.display = "block";
}

function overlayAboutOff() {
  document.getElementById("overlay-about").style.display = "none";
}

//FAQ overlay on & off

function overlayFaqOn() {
  document.getElementById("overlay-faq").style.display = "block";
}

function overlayFaqOff() {
  document.getElementById("overlay-faq").style.display = "none";
}

//Focus on About modal

function focusInputAbout() {
  document.getElementById("overlay-about").focus();
}

//Focus on FAQ modal

function focusInputFaq() {
  document.getElementById("overlay-faq").focus();
}


//Exit overlay using esc

$(document).keyup(function(e) {
  if (e.which == 27) {  
     overlayAboutOff(), overlayFaqOff();
 }
});

//Swap mute & unmute pic

function swapImage() {
  if (document.getElementById("pic").src.endsWith('sound-off.png') == true) //Comparison
  {
    document.getElementById("pic").src = "images/sound-on.png"; //assignment  

  } else if (document.getElementById("pic").src.endsWith('sound-on.png') == true) {
    document.getElementById("pic").src = "images/sound-off.png";

  }
}