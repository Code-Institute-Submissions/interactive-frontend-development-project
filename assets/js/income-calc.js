var overTwelveK;
var underTwelveK;
var taxCreditValue;
var uSC = overTwelveK + underTwelveK;
var totalTaxedPayedText = "Your total tax payed for the year is: € ";
var invalid;
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input"); 
var outputBox = document.getElementById("income-tax-output");
var netPayOutputBox = document.getElementById("net-pay");
var optionSelectionEmpty = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");

// This calculates the rate of pay per week after tax.
function weeklyPay(totalTax){
    if(dropDownSelection.value !== optionSelectionEmpty.value){
        const WEEKS_PER_YEAR = 52;
        const WEEKLY_PAY_TEXT = "Your weekly pay for the year is: € ";
        let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
        let weeklyPayOutput = document.getElementById("weekly-pay");
        let weeklyPay = inputBoxValue - totalTax;
        weeklyPay = weeklyPay / WEEKS_PER_YEAR;
        weeklyPayOutput.innerHTML = WEEKLY_PAY_TEXT + weeklyPay.toFixed(2);
    }
}

//This function calculates the net pay after tax's owed. 
function netPay(totalTax){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
        if(dropDownSelection.value != optionSelectionEmpty.value){
        const NET_PAYTEXT = "Your net pay for the year is: € ";
        const NET_PAY = inputBoxValue - totalTax;
        let netPay = NET_PAY;
        netPay = netPay.toFixed(2);
        netPayOutputBox.innerHTML = NET_PAYTEXT + netPay; 
    }
}

// This takes tax credits from your total tax owed, if applicable. Those under 13,000 euro are exempt from tax, thus not applicable.
function taxCredits(){
    let taxCreditValue;

    if(dropDownSelection.value == "single" || dropDownSelection.value == "civil-partner"){
         //taxCreditValue = 3300;
         const SINGLE_OR_CIVILP_TAXCREDITVALUE = 3300; 
         taxCreditValue = SINGLE_OR_CIVILP_TAXCREDITVALUE;
    }
    else if(dropDownSelection.value == "married"){
         //taxCreditValue = 4950;
        const MARRIED_TAXCREDITVALUE = 4950;
        taxCreditValue = MARRIED_TAXCREDITVALUE;
    }
    return taxCreditValue;
}

// This calculates rate of tax & usc depending on your income from 12,012 to 35,000 or more, those under 13,000 are exempt from tax, but not usc.
function calcIncomeTaxed(){
    let inputBoxValue = parseFloat(inputBox.value.replace(",", ""));
    let totalTax = 0;
    let underthirtyFiveK;

    if(inputBoxValue <= 12012){
        underTwelveK = inputBoxValue * 0.005;
        totalTax = underTwelveK;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }

    else if(inputBoxValue <= 13000){
        overTwelveK = inputBoxValue - 12012;
        overTwelveK = overTwelveK * 0.02;

        underTwelveK = 12012 * 0.005;
        totalTax = overTwelveK + underTwelveK;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }
    else if(inputBoxValue < 35000 && inputBoxValue > 13000){
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
    else if(inputBoxValue >= 35000){
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
                const taxValueReturned = calcIncomeTaxed();
                netPay(taxValueReturned);
                weeklyPay(taxValueReturned);
            }
}); 