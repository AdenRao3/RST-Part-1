window.addEventListener('load', init);

// Variables set to what the id is in the HTML document
const wordInput = document.querySelector('#word-input');
const keysLeft = document.querySelector('#keysLeft');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

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

