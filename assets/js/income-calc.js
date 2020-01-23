var normalUniversalSocialCharge;
var lowerUniversalSocialCharge;
var taxCreditValue;
var uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
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
        let usersIncome = parseFloat(inputBox.value.replace(",", ""));
        let weeklyPayOutput = document.getElementById("weekly-pay");
        let weeklyPay = usersIncome - totalTax;
        weeklyPay = weeklyPay / WEEKS_PER_YEAR;
        weeklyPayOutput.innerHTML = WEEKLY_PAY_TEXT + weeklyPay.toFixed(2);
    }
}

//This function calculates the net pay after tax's owed. 
function netPay(totalTax){
    let usersIncome = parseFloat(inputBox.value.replace(",", ""));
        if(dropDownSelection.value != optionSelectionEmpty.value){
        const NET_PAYTEXT = "Your net pay for the year is: € ";
        const NET_PAY = usersIncome - totalTax;
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
    let usersIncome = parseFloat(inputBox.value.replace(",", ""));
    let totalTax = 0;
    let underthirtyFiveK;

    const LOWER_USC_TAXRANGE = 12012;
    const LOWER_USC_RATE = 0.005;
    const NORMAL_USC_TAXRANG = 13000;
    const NORMAL_USC_RATE = 0.02;

    if(usersIncome <= LOWER_USC_TAXRANGE){
        lowerUniversalSocialCharge = usersIncome * LOWER_USC_RATE;
        totalTax = lowerUniversalSocialCharge;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }
    else if(usersIncome <= NORMAL_USC_TAXRANG){
        normalUniversalSocialCharge = usersIncome - NORMAL_USC_TAXRANG;
        normalUniversalSocialCharge = normalUniversalSocialCharge * NORMAL_USC_RATE;

        lowerUniversalSocialCharge = 12012 * 0.005;
        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge;
        outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2); 
    }
    else if(usersIncome < 35000 && usersIncome > 13000){
        normalUniversalSocialCharge = usersIncome - 12012;
        normalUniversalSocialCharge = normalUniversalSocialCharge * 0.02;
        lowerUniversalSocialCharge = 12012 * 0.005;
        
        underthirtyFiveK = usersIncome * 0.20;
        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge + underthirtyFiveK;
        
        uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
        totalTax -= taxCredits();
        totalTax += uSC;
        if(totalTax < 0){
            outputBox.innerHTML = totalTaxedPayedText + uSC;
        }
        else{
            outputBox.innerHTML = totalTaxedPayedText + totalTax.toFixed(2);
        }
    }
    else if(usersIncome >= 35000){
        normalUniversalSocialCharge = usersIncome - 12012;
        normalUniversalSocialCharge = normalUniversalSocialCharge * 0.02;
        lowerUniversalSocialCharge = 12012 * 0.005;
        
        underthirtyFiveK = 34999 * 0.20;
        overthirtyFiveK = usersIncome - 34999;
        overthirtyFiveK = overthirtyFiveK * 0.40;
        
        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge + underthirtyFiveK + overthirtyFiveK;
        
        uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
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

            let usersIncome = parseFloat(inputBox.value.replace(",", ""));
            if (isNaN(usersIncome) && dropDownSelection.value != optionSelectionEmpty.value) {
                outputBox.innerHTML = "Invalid Input... Try numbers only";
            }
            else if(dropDownSelection.value != optionSelectionEmpty.value){
                // setting a variable to be the returned value of the function that it is equals to.
                const taxValueReturned = calcIncomeTaxed();
                netPay(taxValueReturned);
                weeklyPay(taxValueReturned);
            }
}); 