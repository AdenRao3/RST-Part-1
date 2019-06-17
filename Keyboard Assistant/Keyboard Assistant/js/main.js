// Goes to intialize game function when the window loads
window.addEventListener('load', init);

// The variables for the js file
let isPlaying;
// Sets the correct keys to 0
var correctKeys = 0;
// Sets the overall presses to 0
var overallPresses = 0;
// Makes the acurracy set to the correct keys divided by the overall presses times 100 + the a percent symbol
var acurracy = (correctKeys/overallPresses)*100 + "%";
var keyCounter = 0

// Variables set to what the id is in the HTML document/DOM elements
const wordInput = document.querySelector('#word-input');
const keysLeft = document.querySelector('#keysLeft');
const acuracy = document.querySelector('#acuracy');
const message = document.querySelector('#message');
const actualSquare = document.querySelector('#actualSquare');
const seconds = document.querySelector('#seconds');
const square = document.querySelector('#square');
const startButton = document.querySelector('#startButton');
const numberOfKeys = document.querySelector('#numberOfKeys');
const time = document.querySelector('#count-up');
const table = document.querySelector('#table');
// const isStorage = 'undefined' !== typeof localStorage;

// Sets the keys counter to what the user entered in the text field
var keysCounter = numberOfKeys.value;

// Array for every single position of the square 
var arr = new Array();
arr.push({ x : 275, y : 135});
arr.push({ x : 457, y : 135});
arr.push({ x : 503, y : 135});
arr.push({ x : 240, y : 227});
arr.push({ x : 548, y : 135});
arr.push({ x : 765, y : 130});
arr.push({ x : 223, y : 135});
arr.push({ x : 297, y : 181});
arr.push({ x : 410, y : 135});
arr.push({ x : 683, y : 135});
arr.push({ x : 728, y : 135});
arr.push({ x : 774, y : 135});
arr.push({ x : 365, y : 135});
arr.push({ x : 637, y : 135});
arr.push({ x : 235, y : 181});
arr.push({ x : 320, y : 135});
arr.push({ x : 434, y : 181});
arr.push({ x : 570, y : 181});
arr.push({ x : 797, y : 181});
arr.push({ x : 808, y : 227});
arr.push({ x : 593, y : 135});
arr.push({ x : 399, y : 227});
arr.push({ x : 536, y : 227});
arr.push({ x : 558, y : 273});
arr.push({ x : 581, y : 227});
arr.push({ x : 292, y : 320});
arr.push({ x : 343, y : 181});
arr.push({ x : 388, y : 181});
arr.push({ x : 308, y : 227});
arr.push({ x : 354, y : 227});
arr.push({ x : 377, y : 273});
arr.push({ x : 348, y : 320});
arr.push({ x : 724, y : 320});
arr.push({ x : 820, y : 273});
arr.push({ x : 842, y : 320});
arr.push({ x : 780, y : 320});
arr.push({ x : 627, y : 227});
arr.push({ x : 570, y : 181});
arr.push({ x : 525, y : 181});
arr.push({ x : 510, y : 325});
arr.push({ x : 667, y : 325});
arr.push({ x : 230, y : 320});
arr.push({ x : 331, y : 273});
arr.push({ x : 230, y : 273});
arr.push({ x : 513, y : 273});
arr.push({ x : 604, y : 273});
arr.push({ x : 649, y : 273});
arr.push({ x : 695, y : 273});
arr.push({ x : 718, y : 227});
arr.push({ x : 763, y : 227});
arr.push({ x : 752, y : 181});
arr.push({ x : 707, y : 181});
arr.push({ x : 490, y : 227});
arr.push({ x : 445, y : 227});
arr.push({ x : 422, y : 273});
arr.push({ x : 673, y : 227});
arr.push({ x : 660, y : 181});

// Initialize Game
function init() {
  // Sets the keys left to what the user entered in the text field
  keysLeft.innerHTML = numberOfKeys.value;
  // Go to start match function when the user hits the start button
  document.getElementById("startButton").addEventListener("click", startMatch);
}

// Start match
function startMatch() {
  // Timer
  var min = 0;
  var second = 00;
  var zeroPlaceholder = 0;
  var counterId = setInterval(function(){
    countUp();
  }, 1000);
  function countUp () {
    second++;
    if(second == 59){
      second = 00;
      min = min + 1;
    }
    if(second == 10){
        zeroPlaceholder = '';
    }else
    if(second == 00){
        zeroPlaceholder = 0;
    }
    // Gets the count up text from the html file
    document.getElementById("count-up").innerText = min+':'+zeroPlaceholder+second;
  }
  isPlaying = true;
  keysLeft.innerHTML = numberOfKeys.value;
  // Goes to square 1 function
  showSquare();
}

function keyCode1(event) {
  // Sets a variable to keycodes
  var x = event.keyCode;
  // Checks if keys left is equal to 0
  if (keysLeft.innerHTML == '0') {
    //If so goes to game over function
    gameOver()
  }
  // Checks if key counter is equal to 1 if not moves to the next 1
  if (keyCounter == 1) {
    // Checks if keycode is equal to 49 if yes then adds to correct keys if no correct keys stay the same
    if (x == 49) {
      // Sets the keysleft to one lower
      keysCounter = numberOfKeys.value - 1;
      keysLeft.innerHTML = keysCounter;
      // Adds one to correct keys
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      // Sets the accuraccy
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      // Goes to show square 2 function
      showSquare2()
    }
    else {
      keysCounter = numberOfKeys.value - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare2()
    }
  }
  else if (keyCounter == 2) {
    if (x == 53) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare3()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare3()
    }
  }
  else if (keyCounter == 3) {
    if (x == 54) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare4()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare4()
    }
  }
  else if (keyCounter == 4) {
    if (x == 20) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare5()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare5()
    }
  }
  else if (keyCounter == 5) {
    if (x == 55) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare6()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare6()
    }
  }
  else if (keyCounter == 6) {
    if (x == 8) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare7()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare7()
    }
  }
  else if (keyCounter == 7) {
    if (x == 192) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare8()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare8()
    }
  }
  else if (keyCounter == 8) {
    if (x == 81) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare9()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare9()
    }
  }
  else if (keyCounter == 9) {
    if (x == 52) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare10()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare10()
    }
  }
  else if (keyCounter == 10) {
    if (x == 48) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare11()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare11()
    }
  }
  else if (keyCounter == 11) {
    if (x == 189) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare12()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare12()
    }
  }
  else if (keyCounter == 12) {
    if (x == 187) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare13()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare13()
    }
  }
  else if (keyCounter == 13) {
    if (x == 51) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare14()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare14()
    }
  }
  else if (keyCounter == 14) {
    if (x == 57) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare15()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare15()
    }
  }
  else if (keyCounter == 15) {
    if (x == 9) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare16()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare16()
    }
  }
  else if (keyCounter == 16) {
    if (x == 50) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare17()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare17()
    }
  }
  else if (keyCounter == 17) {
    if (x == 82) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare18()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare18()
    }
  }
  else if (keyCounter == 18) {
    if (x == 85) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare19()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare19()
    }
  }
  else if (keyCounter == 19) {
    if (x == 221) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare20()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare20()
    }
  }
  else if (keyCounter == 20) {
    if (x == 220) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare21()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare21()
    }
  }
  else if (keyCounter == 21) {
    if (x == 53) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare22()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare22()
    }
  }
  else if (keyCounter == 22) {
    if (x == 68) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare23()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare23()
    }
  }
  else if (keyCounter == 23) {
    if (x == 72) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare24()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare24()
    }
  }
  else if (keyCounter == 24) {
    if (x == 78) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare25()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare25()
    }
  }
  else if (keyCounter == 25) {
    if (x == 74) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare26()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare26()
    }
  }
  else if (keyCounter == 26) {
    if (x == 91) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare27()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare27()
    }
  }
  else if (keyCounter == 27) {
    if (x == 87) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare28()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare28()
    }
  }
  else if (keyCounter == 28) {
    if (x == 69) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare29()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare29()
    }
  }
  else if (keyCounter == 29) {
    if (x == 65) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare30()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare30()
    }
  }
  else if (keyCounter == 30) {
    if (x == 83) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare31()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare31()
    }
  }
  else if (keyCounter == 31) {
    if (x == 88) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare32()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare32()
    }
  }
  else if (keyCounter == 32) {
    if (x == 18) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare33()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare33()
    }
  }
  else if (keyCounter == 33) {
    if (x == 93) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare34()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare34()
    }
  }
  else if (keyCounter == 34) {
    if (x == 16) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare35()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare35()
    }
  }
  else if (keyCounter == 35) {
    if (x == 17) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare36()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare36()
    }
  }
  else if (keyCounter == 36) {
    if (x == 93) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare37()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare37()
    }
  }
  else if (keyCounter == 37) {
    if (x == 75) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare38()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare38()
    }
  }
  else if (keyCounter == 38) {
    if (x == 85) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare39()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare39()
    }
  }
  else if (keyCounter == 39) {
    if (x == 89) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare40()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare40()
    }
  }
  else if (keyCounter == 40) {
    if (x == 32) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare41()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare41()
    }
  }
  else if (keyCounter == 41) {
    if (x == 18) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare42()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare42()
    }
  }
  else if (keyCounter == 42) {
    if (x == 17) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare43()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare43()
    }
  }
  else if (keyCounter == 43) {
    if (x == 90) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare44()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare44()
    }
  }
  else if (keyCounter == 44) {
    if (x == 16) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare45()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare45()
    }
  }
  else if (keyCounter == 45) {
    if (x == 66) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare46()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare46()
    }
  }
  else if (keyCounter == 46) {
    if (x == 77) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare47()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare47()
    }
  }
  else if (keyCounter == 47) {
    if (x == 188) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare48()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare48()
    }
  }
  else if (keyCounter == 48) {
    if (x == 190) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare49()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare49()
    }
  }
  else if (keyCounter == 49) {
    if (x == 186) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare50()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare50()
    }
  }
  else if (keyCounter == 50) {
    if (x == 222) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare51()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare51()
    }
  }
  else if (keyCounter == 51) {
    if (x == 219) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare52()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare52()
    }
  }
  else if (keyCounter == 52) {
    if (x == 80) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare53()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare53()
    }
  }
  else if (keyCounter == 53) {
    if (x == 71) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare54()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare54()
    }
  }
  else if (keyCounter == 54) {
    if (x == 70) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare55()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare55()
    }
  }
  else if (keyCounter == 55) {
    if (x == 67) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare56()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare56()
    }
  }
  else if (keyCounter == 56) {
    if (x == 76) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare57()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare57()
    }
  }
  else if (keyCounter == 57) {
    if (x == 79) {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys + 1;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare()
    }
    else {
      keysCounter = keysCounter - 1;
      keysLeft.innerHTML = keysCounter;
      correctKeys = correctKeys;
      overallPresses = overallPresses + 1;
      acurracy = (correctKeys/overallPresses)*100 + "%";
      acuracy.innerHTML = acurracy;
      showSquare()
    }
  }
}

function showSquare() {
  // Sets the square to array number 1 position
  document.getElementById('square').style.left = arr[0].x + "px";
  document.getElementById('square').style.top = arr[0].y + "px";
  // Makes the square visibles
  document.getElementById("square").style.visibility = "visible";
  // Adds one to the keycounter
  keyCounter = 0 + 1
  // Goes to keycode 1 function
  keyCode1();
}

function showSquare2() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[1].x + "px"
  document.getElementById('square').style.top = arr[1].y + "px"
  keyCounter = 2
  keyCode1()
}

function showSquare3() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[2].x + "px"
  document.getElementById('square').style.top = arr[2].y + "px"
  keyCounter = 3
  keyCode1()
}

function showSquare4() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[3].x + "px"
  document.getElementById('square').style.top = arr[3].y + "px"
  keyCounter = 4
  keyCode1()
}

function showSquare5() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[4].x + "px"
  document.getElementById('square').style.top = arr[4].y + "px"
  keyCounter = 5
  keyCode1()
}

function showSquare6() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[5].x + "px"
  document.getElementById('square').style.top = arr[5].y + "px"
  document.getElementById('square').style.width = 700 + "px"
  document.getElementById('square').style.height = 270 + "px"
  keyCounter = 6
  keyCode1()
}

function showSquare7() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[6].x + "px"
  document.getElementById('square').style.top = arr[6].y + "px"
  document.getElementById('square').style.width = 500 + "px"
  document.getElementById('square').style.height = 260 + "px"
  keyCounter = 7
  keyCode1()
}

function showSquare8() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[7].x + "px"
  document.getElementById('square').style.top = arr[7].y + "px"
  keyCounter = 8
  keyCode1()
}

function showSquare9() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[8].x + "px"
  document.getElementById('square').style.top = arr[8].y + "px"
  keyCounter = 9
  keyCode1()
}

function showSquare10() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[9].x + "px"
  document.getElementById('square').style.top = arr[9].y + "px"
  keyCounter = 10
  keyCode1()
}

function showSquare11() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[10].x + "px"
  document.getElementById('square').style.top = arr[10].y + "px"
  keyCounter = 11
  keyCode1()
}

function showSquare12() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[11].x + "px"
  document.getElementById('square').style.top = arr[11].y + "px"
  keyCounter = 12
  keyCode1()
}

function showSquare13() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[12].x + "px"
  document.getElementById('square').style.top = arr[12].y + "px"
  keyCounter = 13
  keyCode1()
}

function showSquare14() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[13].x + "px"
  document.getElementById('square').style.top = arr[13].y + "px"
  keyCounter = 14
  keyCode1()
}

function showSquare15() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[14].x + "px"
  document.getElementById('square').style.top = arr[14].y + "px"
  keyCounter = 15
  keyCode1()
}

function showSquare16() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[15].x + "px"
  document.getElementById('square').style.top = arr[15].y + "px"
  keyCounter = 16
  keyCode1()
}

function showSquare17() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[16].x + "px"
  document.getElementById('square').style.top = arr[16].y + "px"
  keyCounter = 17
  keyCode1()
}

function showSquare18() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[17].x + "px"
  document.getElementById('square').style.top = arr[17].y + "px"
  keyCounter = 18
  keyCode1()
}

function showSquare19() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[18].x + "px"
  document.getElementById('square').style.top = arr[18].y + "px"
  keyCounter = 19
  keyCode1()
}

function showSquare20() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[19].x + "px"
  document.getElementById('square').style.top = arr[19].y + "px"
  keyCounter = 20
  keyCode1()
}

function showSquare21() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[20].x + "px"
  document.getElementById('square').style.top = arr[20].y + "px"
  keyCounter = 21
  keyCode1()
}

function showSquare22() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[21].x + "px"
  document.getElementById('square').style.top = arr[21].y + "px"
  keyCounter = 22
  keyCode1()
}

function showSquare23() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[22].x + "px"
  document.getElementById('square').style.top = arr[22].y + "px"
  keyCounter = 23
  keyCode1()
}

function showSquare24() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[23].x + "px"
  document.getElementById('square').style.top = arr[23].y + "px"
  keyCounter = 24
  keyCode1()
}

function showSquare25() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[24].x + "px"
  document.getElementById('square').style.top = arr[24].y + "px"
  keyCounter = 25
  keyCode1()
}

function showSquare26() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[25].x + "px"
  document.getElementById('square').style.top = arr[25].y + "px"
  keyCounter = 26
  keyCode1()
}

function showSquare27() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[26].x + "px"
  document.getElementById('square').style.top = arr[26].y + "px"
  keyCounter = 27
  keyCode1()
}

function showSquare28() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[27].x + "px"
  document.getElementById('square').style.top = arr[27].y + "px"
  keyCounter = 28
  keyCode1()
}

function showSquare29() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[28].x + "px"
  document.getElementById('square').style.top = arr[28].y + "px"
  keyCounter = 29
  keyCode1()
}

function showSquare30() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[29].x + "px"
  document.getElementById('square').style.top = arr[29].y + "px"
  keyCounter = 30
  keyCode1()
}

function showSquare31() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[30].x + "px"
  document.getElementById('square').style.top = arr[30].y + "px"
  keyCounter = 31
  keyCode1()
}

function showSquare32() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[31].x + "px"
  document.getElementById('square').style.top = arr[31].y + "px"
  keyCounter = 32
  keyCode1()
}

function showSquare33() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[32].x + "px"
  document.getElementById('square').style.top = arr[32].y + "px"
  keyCounter = 33
  keyCode1()
}

function showSquare34() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[33].x + "px"
  document.getElementById('square').style.top = arr[33].y + "px"
  keyCounter = 34
  keyCode1()
}

function showSquare35() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[34].x + "px"
  document.getElementById('square').style.top = arr[34].y + "px"
  keyCounter = 35
  keyCode1()
}

function showSquare36() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[35].x + "px"
  document.getElementById('square').style.top = arr[35].y + "px"
  keyCounter = 36
  keyCode1()
}

function showSquare37() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[36].x + "px"
  document.getElementById('square').style.top = arr[36].y + "px"
  keyCounter = 37
  keyCode1()
}

function showSquare38() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[37].x + "px"
  document.getElementById('square').style.top = arr[37].y + "px"
  keyCounter = 38
  keyCode1()
}

function showSquare39() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[38].x + "px"
  document.getElementById('square').style.top = arr[38].y + "px"
  keyCounter = 39
  keyCode1()
}

function showSquare40() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[39].x + "px"
  document.getElementById('square').style.top = arr[39].y + "px"
  keyCounter = 40
  keyCode1()
}

function showSquare41() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[40].x + "px"
  document.getElementById('square').style.top = arr[40].y + "px"
  keyCounter = 41
  keyCode1()
}

function showSquare42() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[41].x + "px"
  document.getElementById('square').style.top = arr[41].y + "px"
  keyCounter = 42
  keyCode1()
}

function showSquare43() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[42].x + "px"
  document.getElementById('square').style.top = arr[42].y + "px"
  keyCounter = 43
  keyCode1()
}

function showSquare44() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[43].x + "px"
  document.getElementById('square').style.top = arr[43].y + "px"
  keyCounter = 44
  keyCode1()
}

function showSquare45() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[44].x + "px"
  document.getElementById('square').style.top = arr[44].y + "px"
  keyCounter = 45
  keyCode1()
}

function showSquare46() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[45].x + "px"
  document.getElementById('square').style.top = arr[45].y + "px"
  keyCounter = 46
  keyCode1()
}

function showSquare47() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[46].x + "px"
  document.getElementById('square').style.top = arr[46].y + "px"
  keyCounter = 47
  keyCode1()
}

function showSquare48() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[47].x + "px"
  document.getElementById('square').style.top = arr[47].y + "px"
  keyCounter = 48
  keyCode1()
}

function showSquare49() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[48].x + "px"
  document.getElementById('square').style.top = arr[48].y + "px"
  keyCounter = 49
  keyCode1()
}

function showSquare50() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[49].x + "px"
  document.getElementById('square').style.top = arr[49].y + "px"
  keyCounter = 50
  keyCode1()
}

function showSquare51() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[50].x + "px"
  document.getElementById('square').style.top = arr[50].y + "px"
  keyCounter = 51
  keyCode1()
}

function showSquare52() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[51].x + "px"
  document.getElementById('square').style.top = arr[51].y + "px"
  keyCounter = 52
  keyCode1()
}

function showSquare53() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[52].x + "px"
  document.getElementById('square').style.top = arr[52].y + "px"
  keyCounter = 53
  keyCode1()
}

function showSquare54() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[53].x + "px"
  document.getElementById('square').style.top = arr[53].y + "px"
  keyCounter = 54
  keyCode1()
}

function showSquare55() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[54].x + "px"
  document.getElementById('square').style.top = arr[54].y + "px"
  keyCounter = 55
  keyCode1()
}

function showSquare56() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[55].x + "px"
  document.getElementById('square').style.top = arr[55].y + "px"
  keyCounter = 56
  keyCode1()
}

function showSquare57() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[56].x + "px"
  document.getElementById('square').style.top = arr[56].y + "px"
  keyCounter = 57
  keyCode1()
}

// Game over function
function gameOver() {
  // Makes the square hidden
  document.getElementById('square').style.visibility='hidden';
  // Tells the person their time and accuracy
  message.innerHTML = "Your Done! Your accuracy was " + acurracy + " Your time was " + document.getElementById('count-up').innerHTML
  // window.location.href="score.html";
  // Sets a time and accuracy variable
  var times = time.innerHTML;
  var acurrracy = acuracy.innerHTML;
  // Puts the persons score in the local storage
  localStorage.setItem('Time and Acuracy', times + ", " + acurrracy);
}

// When the person clicks score to beat it will show them the score they have to beat 
function highScore() {
  // Gets data
  message.innerHTML = "Score to beat, " + localStorage.getItem('Time and Acuracy')
}