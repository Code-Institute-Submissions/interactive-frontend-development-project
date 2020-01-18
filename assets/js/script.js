var totalTax = 0;
var underthirtyFiveK;
var overTwelveK;
var underTwelveK;
var taxCreditValue;
var uSC = overTwelveK + underTwelveK;
var totalTaxedPayedText = "Your total tax payed for the year is: € ";
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");
var netPayOutputBox = document.getElementById("net-pay");
var optionSelection = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");



function weeklyPay(){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
    let weeklyPayText = "Your weekly pay for the year is: € ";
    let weeklyPayOutput = document.getElementById("weekly-pay");
    let weeklyPay = inputBoxValue - totalTax;
    weeklyPay = weeklyPay / 52;

    weeklyPayOutput.innerHTML = weeklyPayText + weeklyPay.toFixed(2); 
}

function addUSC(){
   totalTax = uSC;
   outputBox.innerHTML = totalTaxedPayedText + totalTax; 
}

function netPay(){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
        if(dropDownSelection.value != optionSelection.value){
        let netPayText = "Your net pay for the year is: € ";
        let netPay = inputBoxValue - totalTax;
        netPay = netPay.toFixed(2);
        netPayOutputBox.innerHTML = netPayText + netPay; 
    }
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
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));

    if(inputBoxValue <= 12012 && dropDownSelection.value != optionSelection.value){
        underTwelveK = inputBoxValue * 0.005;
        totalTax = underTwelveK;
        totalTax = totalTax.toFixed(2);
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }

    else if(inputBoxValue <= 13000 && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        totalTax = totalTax.toFixed(2);
        
        outputBox.innerHTML = totalTaxedPayedText + totalTax; 
    }
    else if(inputBoxValue < 35000 && inputBoxValue > 13000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;
    
        underthirtyFiveK = inputBoxValue * 0.20;
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        
        taxCredits();
    }
    else if(inputBoxValue >= 35000  && dropDownSelection.value != optionSelection.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;

        underthirtyFiveK = 34999 * 0.20;
        overthirtyFiveK = inputBoxValue - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK + overthirtyFiveK;
        totalTax = totalTax.toFixed(2);
        
        taxCredits();
        
    }
    
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
    netPay();
    weeklyPay();
}); 

