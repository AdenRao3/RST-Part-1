window.addEventListener('load', init);

let isPlaying;
var keysCounter = 100;
var correctKeys = 0;
var overallPresses = 0;
var acurracy = (correctKeys/overallPresses)*100 + "%";
// var positions = [position(85, 70), position(500, 200), position(1000, 200), position(100, 500),]


// Variables set to what the id is in the HTML document/DOM elements
const wordInput = document.querySelector('#word-input');
const keysLeft = document.querySelector('#keysLeft');
const acuracy = document.querySelector('#acuracy');
const message = document.querySelector('#message');
const actualSquare = document.querySelector('#actualSquare');
const seconds = document.querySelector('#seconds');
const square = document.querySelector('#square');
const startButton = document.querySelector('#startButton');

// const square2 = document.querySelector('#square2');
// const square3 = document.querySelector('#square3');
// const square4 = document.querySelector('#square4');
// const square5 = document.querySelector('#square5');
// const square6 = document.querySelector('#square6');
// const square7 = document.querySelector('#square7');
// const square8 = document.querySelector('#square8');
// const square9 = document.querySelector('#square9');
// const square10 = document.querySelector('#square10');
// const square11 = document.querySelector('#square11');
// const square12 = document.querySelector('#square12');
// const square13 = document.querySelector('#square13');
// const square14 = document.querySelector('#square14');
// const square15 = document.querySelector('#square15');
// const square16 = document.querySelector('#square16');
// const square17 = document.querySelector('#square17');
// const square18 = document.querySelector('#square18');
// const square19 = document.querySelector('#square19');
// const square20 = document.querySelector('#square20');
// const square21 = document.querySelector('#square21');
// const square22 = document.querySelector('#square22');
// const square23 = document.querySelector('#square23');
// const square24 = document.querySelector('#square24');
// const square25 = document.querySelector('#square25');
// const square26 = document.querySelector('#square26');
// const square27 = document.querySelector('#square27');
// const square28 = document.querySelector('#square28');
// const square29 = document.querySelector('#square29');
// const square30 = document.querySelector('#square30');
// const square31 = document.querySelector('#square31');
// const square32 = document.querySelector('#square32');
// const square33 = document.querySelector('#square33');
// const square34 = document.querySelector('#square34');
// const square35 = document.querySelector('#square35');
// const square36 = document.querySelector('#square36');
// const square37 = document.querySelector('#square37');
// const square38 = document.querySelector('#square38');
// const square39 = document.querySelector('#square39');
// const square40 = document.querySelector('#square40');
// const square41 = document.querySelector('#square41');
// const square42 = document.querySelector('#square42');
// const square43 = document.querySelector('#square43');
// const square44 = document.querySelector('#square44');
// const square45 = document.querySelector('#square45');
// const square46 = document.querySelector('#square46');
// const square47 = document.querySelector('#square47');
// const square48 = document.querySelector('#square48');
// const square49 = document.querySelector('#square49');
// const square50 = document.querySelector('#square50');
// const square51 = document.querySelector('#square51');
// const square52 = document.querySelector('#square52');
// const square53 = document.querySelector('#square53');
// const square54 = document.querySelector('#square54');
// const square55 = document.querySelector('#square55');
// const square56 = document.querySelector('#square56');
// const square57 = document.querySelector('#square57');
// const square58 = document.querySelector('#square58');
// const square59 = document.querySelector('#square59');
// const square60 = document.querySelector('#square60');
// const square61 = document.querySelector('#square61');
// const square62 = document.querySelector('#square62');
// const square63 = document.querySelector('#square63');

var arr = new Array();
arr.push({ x : 275, y : 135});
arr.push({ x : 450, y : 135});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 260, y : 456});
arr.push({ x : 223, y : 135});

// function show_alert() 
//  {     
//    var name = document.getElementById('myname').value;
//    alert("Hello,\xa0"+ name);
//  } 

// var min = 0;
// var second = 00;
// var zeroPlaceholder = 0;
// var counterId = setInterval(function(){
//   countUp();
// }, 1000);

// function countUp () {
//     second++;
//     if(second == 59){
//       second = 00;
//       min = min + 1;
//     }
//     if(second == 10){
//         zeroPlaceholder = '';
//     }else
//     if(second == 00){
//         zeroPlaceholder = 0;
//     }

//     document.getElementById("count-up").innerText = min+':'+zeroPlaceholder+second;
// }

// <script>

// </script>

// (document).ready(function() {
//    ('#square').hide().delay(3000).fadeIn(2200);
// });


// Initialize Game
function init() {
  // Sets the keys left to 100
  keysLeft.innerHTML = 100;
  // Set the keys left to 0%
  // acuracy.innerHTML = '0%';
  document.getElementById("startButton").addEventListener("click", startMatch);
  // // Load word from array
  // showWord(words);
  // // Start matching on word input
  // wordInput.addEventListener('input', startMatch);
  // // Call countdown every second
  // setInterval(countdown, 1000);
  // // Check game status
  // setInterval(checkStatus, 50);
}



// Start match
function startMatch() {
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
    document.getElementById("count-up").innerText = min+':'+zeroPlaceholder+second;
  }
	isPlaying = true;
  keysLeft.innerHTML = 100;
  showSquare();
}

function showSquare() {
	// document.write('<img src="square.png">');
	// var square2678 = document.getElementById("actualSquare").innerHTML = '<img src="square.png">';
  // document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[0].x + "px";
  document.getElementById('square').style.top = arr[0].y + "px";
  keyCode1();
}

function keyCode(event) {
  var x = event.keyCode;
  if (x == 49) {
    keysCounter = keysCounter - 1;
    keysLeft.innerHTML = keysCounter;
    correctKeys = 1;
    overallPresses = 0 + 1;
    acurracy = (correctKeys/overallPresses)*100 + "%";
    acuracy.innerHTML = acurracy;
  else {
    keysCounter = keysCounter - 1;
    keysLeft.innerHTML = keysCounter;
    correctKeys = 0;
    overallPresses = 0 + 1;
    acurracy = (correctKeys/overallPresses)*100 + "%"
    acuracy.innerHTML = acurracy;
  }
  }
}

function showSquare2() {
  document.getElementById('square').style.visibility='visible';
  document.getElementById('square').style.left = arr[1].x + "px"
  document.getElementById('square').style.top = arr[1].y + "px"
}