function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//Tryck x-tangenten för att trigga ett ljud.

(function () {

  var context = new AudioContext(); // Create and Initialize the Audio Context
  var electro; // Create the Sound 
  var getSound = new XMLHttpRequest(); // Load the Sound with XMLHttpRequest
  getSound.open("GET", "sounds/pad.wav", true); // Path to Audio File
  getSound.responseType = "arraybuffer"; // Read as Binary Data
  getSound.onload = function () {
    context.decodeAudioData(getSound.response, function (buffer) {
      electro = buffer; // Decode the Audio Data and Store it in a Variable
    });
  }
  getSound.send(); // Send the Request and Load the File

  window.addEventListener("keydown", onKeyDown); // Create Event Listener for KeyDown

  function onKeyDown(e) {
    switch (e.keyCode) {
      // X
      case 88:
        var playSound = context.createBufferSource(); // Declare a New Sound
        playSound.buffer = electro; // Attatch our Audio Data as it's Buffer
        playSound.connect(context.destination); // Link the Sound to the Output
        playSound.start(0); // Play the Sound Immediately
        break;
    }
  }
}());