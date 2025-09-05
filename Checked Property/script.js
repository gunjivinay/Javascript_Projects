
const myCheckbox = document.getElementById("myCheckbox");
const paypalBtn = document.getElementById("paypalBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const visaBtn = document.getElementById("visaBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");



mySubmit.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `You are Subscribed 😍`
    }
    else{
        subResult.textContent = `You are NOT Subscribed 🥲`
    }


    if(paypalBtn.checked){
        cardResult.textContent = `You are Paying with Paypal 💳`
    }
    else if(mastercardBtn.checked){
        cardResult.textContent = `You are Paying with MasterCard 🗃️`
    }
    else if(visaBtn.checked){
        cardResult.textContent = `You are Paying with Visa 💲`
    }
    else{
        cardResult.textContent = `Please select ANY of the Payment Method ⬆️`
    }
}