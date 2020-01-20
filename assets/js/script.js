var underthirtyFiveK;
var overTwelveK;
var underTwelveK;
var taxCreditValue;
var uSC = overTwelveK + underTwelveK;
var totalTaxedPayedText = "Your total tax payed for the year is: € ";
var invalid
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");
var netPayOutputBox = document.getElementById("net-pay");
var optionSelectionEmpty = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");


// This calculates the rate of pay per week after tax.
function weeklyPay(totalTax){
    if(dropDownSelection.value != optionSelectionEmpty.value){
        let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
        let weeklyPayText = "Your weekly pay for the year is: € ";
        let weeklyPayOutput = document.getElementById("weekly-pay");
        let weeklyPay = inputBoxValue - totalTax;
        weeklyPay = weeklyPay / 52;
        weeklyPayOutput.innerHTML = weeklyPayText + weeklyPay.toFixed(2);
    }
}

// This calculates the usc charge.
function addUSC(){
   return overTwelveK + underTwelveK;
}

//This function calculates the net pay after tax's owed. 
function netPay(totalTax){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
        if(dropDownSelection.value != optionSelectionEmpty.value){
        let netPayText = "Your net pay for the year is: € ";
        let netPay = inputBoxValue - totalTax;
        netPay = netPay.toFixed(2);
        netPayOutputBox.innerHTML = netPayText + netPay; 
    }
}

// This takes tax credits from your total tax owed, if applicable. Those under 13,000 euro are exempt from tax, thus not applicable.
function taxCredits(){
    let taxCreditValue;

    if(dropDownSelection.value == "single" || dropDownSelection.value == "civil-partner"){
         taxCreditValue = 3300;

    }
    else if(dropDownSelection.value == "married"){
         taxCreditValue = 4950;
        
    }
    return taxCreditValue;
}

// This calculates rate of tax & usc depending on your income from 12,012 to 35,000 or more, those under 13,000 are exempt from tax, but not usc.
function calcIncomeTaxed(){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
    let totalTax = 0;

    if(inputBoxValue <= 12012 && dropDownSelection.value != optionSelectionEmpty.value){
        underTwelveK = inputBoxValue * 0.005;
        totalTax = underTwelveK;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }

    else if(inputBoxValue <= 13000 && dropDownSelection.value != optionSelectionEmpty.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }
    else if(inputBoxValue < 35000 && inputBoxValue > 13000  && dropDownSelection.value != optionSelectionEmpty.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;
        
        underthirtyFiveK = inputBoxValue * 0.20;
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK;
        
        uSC = overTwelveK + underTwelveK;
        totalTax -= taxCredits();
        totalTax += uSC;
        if(totalTax < 0){
            outputBox.innerHTML = totalTaxedPayedText + uSC;
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2);
        }
    }
    else if(inputBoxValue >= 35000  && dropDownSelection.value != optionSelectionEmpty.value){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;
        underTwelveK = 12012 * 0.005;
        
        underthirtyFiveK = 34999 * 0.20;
        overthirtyFiveK = inputBoxValue - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = overTwelveK + underTwelveK + underthirtyFiveK + overthirtyFiveK;
        
        uSC = overTwelveK + underTwelveK;
        totalTax -= taxCredits();
        totalTax += uSC;
        if(totalTax < 0){
            outputBox.innerHTML = totalTaxedPayedText + uSC;
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2);
        }
    }
    return totalTax;
}
// button listener
incomeTaxed.addEventListener("click", function(){

            let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
            if (isNaN(inputBoxValue) && dropDownSelection.value != optionSelectionEmpty.value) {
                outputBox.innerHTML = "Invalid Input... Try numbers only";
            }
            else if(dropDownSelection.value != optionSelectionEmpty.value){
                // setting a variable to be the returned value of the function that it is equals to.
                let taxValueReturned = calcIncomeTaxed();
                netPay(taxValueReturned);
                weeklyPay(taxValueReturned);
            }
}); 

