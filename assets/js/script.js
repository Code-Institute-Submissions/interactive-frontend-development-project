var totalTax = 0;
var underthirtyFiveK;
var overTwelveK;
var underTwelveK;
var taxCreditValue;
var uSC = overTwelveK + underTwelveK;
var totalTaxedPayedText = "Your total tax payed for the year is €";
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");
var netPayOutputBox = document.getElementById("net-pay");
var optionSelection = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");


function addUSC(){
   uSC;
   outputBox.innerHTML = totalTaxedPayedText + uSC; 
}

function netPay(){
    let netPayText = "Your net pay for the year is: € ";
    let netPay = inputBox.value - totalTax;
    netPayOutputBox.innerHTML = netPayText + netPay; 
}

function taxCredits(){
    let taxCreditValue = 0;

    if(dropDownSelection.value == "single"){
        taxCreditValue = 3300;
        uSC = overTwelveK + underTwelveK;
        totalTax -= taxCreditValue;
        totalTax += uSC;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            addUSC();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }
    else if(dropDownSelection.value == "married"){
        taxCreditValue = 4950;
        totalTax -= taxCreditValue;
        totalTax += uSC;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            addUSC();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }
    else if(dropDownSelection.value == "civil-partner"){
        taxCreditValue = 3300;
        totalTax -= taxCreditValue;
        totalTax += uSC;
        totalTax = totalTax.toFixed(2);
        if(totalTax < 0){
            addUSC();
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax;
        }
    }   
    return taxCreditValue;
}

function calcIncomeTaxed(){

    if(inputBox.value <= 12012 && dropDownSelection.value != optionSelection.value){
        underTwelveK = inputBox.value * 0.005;
        totalTax = underTwelveK;
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }

    else if(inputBox.value <= 13000 && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        totalTax = totalTax.toFixed(2);
        
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }
    else if(inputBox.value < 35000 && inputBox.value > 13000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;
    
        underthirtyFiveK = inputBox.value * 0.20;
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        
        taxCredits();
    }
    else if(inputBox.value >= 35000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBox.value - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;

        underthirtyFiveK = 34999 * 0.20;
        overthirtyFiveK = inputBox.value - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK + overthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        
        taxCredits();
    }
    
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
    netPay();
}); 

