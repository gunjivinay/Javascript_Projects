

let myButton = document.getElementById("myButton");
let myLabel1 = document.getElementById("myLabel1");
let myLabel2 = document.getElementById("myLabel2");
let myLabel3 = document.getElementById("myLabel3");
let max = 6;
let min = 1;
let randomNum1;
let randomNum2;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
  
}