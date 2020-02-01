const TAX_PAYED_OUTPUT_TEXT = "Your total tax payed for the year is: € ";
var normalUniversalSocialCharge;
var lowerUniversalSocialCharge;
var uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
var incomeTaxed = document.getElementById("income-taxed-btn");
var inputBox = document.getElementById("income-input");
var outputBox = document.getElementById("income-tax-output");
var netPayOutputBox = document.getElementById("net-pay");
var optionSelectionEmpty = document.getElementById("blank");
var dropDownSelection = document.getElementById("drop-down");

// This calculates the rate of pay per week after tax.
function weeklyPay(totalTax) {
    if (dropDownSelection.value !== optionSelectionEmpty.value) {
        //I used uppercase text for constant const variables following ES6: https://google.github.io/styleguide/javascriptguide.xml
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
function netPay(totalTax) {
    let usersIncome = parseFloat(inputBox.value.replace(",", ""));

    if (dropDownSelection.value != optionSelectionEmpty.value) {
        const NET_PAYTEXT = "Your net pay for the year is: € ";
        const NET_PAY = usersIncome - totalTax;
        netPayOutputBox.innerHTML = NET_PAYTEXT + NET_PAY.toFixed(2);
    }
}

// This takes tax credits from your total tax owed, if applicable. Those under 13,000 euro are exempt from tax, thus not applicable.
function taxCredits() {
    let taxCreditValue;

    if (dropDownSelection.value == "single" || dropDownSelection.value == "civil-partner") {
        //taxCreditValue = 3300;
        const SINGLE_OR_CIVILP_TAXCREDITVALUE = 3300;
        taxCreditValue = SINGLE_OR_CIVILP_TAXCREDITVALUE;
    }
    else if (dropDownSelection.value == "married") {
        //taxCreditValue = 4950;
        const MARRIED_TAXCREDITVALUE = 4950;
        taxCreditValue = MARRIED_TAXCREDITVALUE;
    }
    return taxCreditValue;
}

// This calculates rate of tax & usc depending on your income from 12,012 to 35,000 or more, those under 13,000 are exempt from tax, but not usc.
function calcIncomeTaxed(lowerUniversalSocialCharge) {
    const usersIncome = parseFloat(inputBox.value.replace(",", ""));
    const LOWER_USC_TAXRANGE = 12012;
    const LOWER_USC_RATE = 0.005;
    const NORMAL_USC_TAXRANGE = 13000;
    const NORMAL_USC_RATE = 0.02;
    const NORMAL_TAX_RANGE = 35000;
    const NORMAL_TAX_RATE = 0.20;
    const HIGHER_TAX_RATE = 0.40;
    let totalTax = 0;
    let normalTaxRate;
    let higherTaxRange;

    if (usersIncome <= LOWER_USC_TAXRANGE) {
        lowerUniversalSocialCharge = usersIncome * LOWER_USC_RATE;
        totalTax = lowerUniversalSocialCharge;
        outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + totalTax.toFixed(2);
    }
    else if (usersIncome <= NORMAL_USC_TAXRANGE) {
        normalUniversalSocialCharge = usersIncome - NORMAL_USC_TAXRANGE;
        normalUniversalSocialCharge = normalUniversalSocialCharge * NORMAL_USC_RATE;

        lowerUniversalSocialCharge = LOWER_USC_TAXRANGE * LOWER_USC_RATE;
        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge;
        outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + totalTax.toFixed(2);
    }
    else if (usersIncome <= NORMAL_TAX_RANGE && usersIncome > NORMAL_USC_TAXRANGE) {
        normalUniversalSocialCharge = usersIncome - LOWER_USC_TAXRANGE;
        normalUniversalSocialCharge = normalUniversalSocialCharge * NORMAL_USC_RATE;
        lowerUniversalSocialCharge = LOWER_USC_TAXRANGE * LOWER_USC_RATE;

        normalTaxRate = usersIncome * NORMAL_TAX_RATE;
        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge + normalTaxRate;

        uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
        totalTax -= taxCredits();
        totalTax += uSC;
        if (totalTax < 0) {
            outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + uSC;
        }
        else {
            outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + totalTax.toFixed(2);
        }
    }
    else if (usersIncome > NORMAL_TAX_RANGE) {
        normalUniversalSocialCharge = usersIncome - LOWER_USC_TAXRANGE;
        normalUniversalSocialCharge = normalUniversalSocialCharge * NORMAL_USC_RATE;
        lowerUniversalSocialCharge = LOWER_USC_TAXRANGE * LOWER_USC_RATE;

        normalTaxRate = NORMAL_TAX_RANGE * NORMAL_TAX_RATE;
        higherTaxRange = usersIncome - NORMAL_TAX_RANGE;
        higherTaxRange = higherTaxRange * HIGHER_TAX_RATE;

        totalTax = normalUniversalSocialCharge + lowerUniversalSocialCharge + normalTaxRate + higherTaxRange;

        uSC = normalUniversalSocialCharge + lowerUniversalSocialCharge;
        totalTax -= taxCredits();
        totalTax += uSC;
        if (totalTax < 0) {
            outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + uSC;
        }
        else {
            outputBox.innerHTML = TAX_PAYED_OUTPUT_TEXT + totalTax.toFixed(2);
        }
    }
    return totalTax;
}

// button listener
incomeTaxed.addEventListener("click", function () {

    const usersIncome = parseFloat(inputBox.value.replace(",", ""));
    let required = $(".required-message");
    let requiredDropDown = $(".required-message-dropdown");

    if (isNaN(usersIncome)) {

        required.text("This field is required, numbers only.")
        required.css("color", "red");
        requiredDropDown.text("");

    }
    else if((dropDownSelection.value === optionSelectionEmpty.value)) {
        
        requiredDropDown.text("This field is required, please choose an option.");
        requiredDropDown.css("color", "red");
        required.text("");

    }
    else {
        // setting a variable to be the returned value of the function that it is equals to.
        // I used normal camel case text for non-constant const variables following ES6: https://catalin.red/es6-const-is-not-constant-immutable/
        required.text("");
        requiredDropDown.text("");
        const taxValueReturned = calcIncomeTaxed();
        netPay(taxValueReturned);
        weeklyPay(taxValueReturned);
    }
}); 