
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const myResult = document.getElementById("myResult");
let age;

mySubmit.onclick = function(){

age = myText.value;
age = Number(age);

if(age >= 100){
    myResult.textContent = `You are a Major,you can drive the car `;
}
else if(age == 0){
     myResult.textContent = `You are Just Born  `;


}
else if(age  <= 18){
        myResult.textContent = `You are a Minor,you can't drive the car `;
}
else{
        myResult.textContent = `Age cannot be Negative`;

}


}