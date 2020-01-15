var totalTax = 0;
var underthirtyFiveK;
var overTwelveK;
var taxCreditValue;
var totalTaxedPayedText = "Your total tax payed for the year is €";
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");
var optionSelection = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");


function ifValueIsNegative(){
   totalTax = 0;
    outputBox.innerHTML = totalTaxedPayedText + totalTax; 
}

function taxCredits(){
    let taxCreditValue = 0;

    if(dropDownSelection.value == "single"){
        taxCreditValue = 3300;
        totalTax = totalTax - taxCreditValue;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            ifValueIsNegative();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }
    else if(dropDownSelection.value == "married"){
        taxCreditValue = 4950;
        totalTax = totalTax - taxCreditValue;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            ifValueIsNegative();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }
    else if(dropDownSelection.value == "civil-partner"){
        taxCreditValue = 3300;
        totalTax = totalTax - taxCreditValue;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            ifValueIsNegative();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }   
    return taxCreditValue;
}

function calcIncomeTaxed(){

    if(inputBox.value <= 9009 && dropDownSelection.value != optionSelection.value){
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }

    else if(inputBox.value <= 13000 && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        totalTax = totalTax.toFixed(2);
        console.log("under13K" + totalTax);
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }
    else if(inputBox.value < 35000 && inputBox.value > 13000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;
    
        underthirtyFiveK = inputBox.value * 0.20;
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        console.log("under35K and over 13K" + totalTax);
        taxCredits();
    }
    else if(inputBox.value >= 35000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;

        underthirtyFiveK = 34999 * 0.20;
        let overthirtyFiveK = inputBox.value - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK + overthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        console.log("over35K"+ totalTax);
        taxCredits();
    }
    
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
}); 

