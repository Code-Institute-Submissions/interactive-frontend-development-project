var totalTax;
var underthirtyFiveK;
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");


function calcIncomeTaxed(){
    if(inputBox.value <= 13000){
        let overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        totalTax = totalTax.toFixed(2);
        outputBox.innerHTML ="Your total taxed amount for the year is €" + totalTax; 
    }
    else if(inputBox.value < 35000 && inputBox.value > 13000){
        underthirtyFiveK = inputBox.value * 0.20;
        outputBox.innerHTML = "Your total taxed amount for the year is " + underthirtyFiveK;
    }
    else if(inputBox.value >= 35000){
        underthirtyFiveK = inputBox.value * 0.20;
       

        let overthirtyFiveK = inputBox.value - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = underthirtyFiveK + overthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        outputBox.innerHTML ="Your total taxed amount for the year is €" + totalTax; 
    }
    
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
}); 

