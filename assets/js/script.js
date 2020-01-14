let incomeTaxed = document.getElementById("income-taxed-btn");
let inputBox = document.getElementById("income-input"); 
let outputBox = document.getElementById("income-tax-output");

function calcIncomeTaxed(){
    outputBox.innerHTML = "Your total taxed amount for the year is " + inputBox.value * 0.20;
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
}); 

