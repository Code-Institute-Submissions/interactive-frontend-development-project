var inputDistance = document.getElementById("miles-or-kms-traveled");
var inputLitres = document.getElementById("litres-input");

function calcMpg(outputTextValue) {
    let outputValue = document.getElementById("mpg-output");
    let outputText = document.getElementById("mpg-text");
    let radioBtnUK = document.getElementsByClassName("uk-mpg");
    let radioBtnUS = document.getElementsByClassName("us-mpg");
    let usCheckedRadioBtn = document.getElementById("option1");
    let ukCheckedRadioBtn = document.getElementById("option2");
    let gallonRate = 0;
    let mpg = 0;

    mpg = inputDistance.value / inputLitres.value;

    if (ukCheckedRadioBtn.value === "") {
        const UK_GALLON = 4.25;
        gallonRate = UK_GALLON;
    }
    else if (usCheckedRadioBtn.value === "") {
        const US_GALLON = 3.75;
        gallonRate = US_GALLON;
    }
    mpg *= gallonRate;
    outputValue.innerHTML = mpg.toFixed(2);
    outputText.innerHTML = outputTextValue;
}

function setOutputTextValue() {
    let outputTextValue;
    if ($("#kms-option").val() === "selected") {
        const KM_OUTPUT_TEXT = "Kilometers";
        outputTextValue = KM_OUTPUT_TEXT;
    }
    else if ($("#miles-option").val() === "selected") {
        const MILES_OUTPUT_TEXT = "Miles";
        outputTextValue = MILES_OUTPUT_TEXT;
    }
    return outputTextValue;
}

//On click function
$("#calc-mpg-btn").click(function () {
    if (isNaN(inputDistance.value) || isNaN(inputLitres.value) || $("#drop-down1").val() == "") {
        $("#mpg-output").text("Invalid..");
    }
    else {
        let setMilesOrKmsText = setOutputTextValue();
        calcMpg(setMilesOrKmsText);
    }
});

//Dropdown option selected set value to selected.
$("#kms-option").click(function () {
    $(this).val("selected");
    $("#miles-option").val("");
});

$("#miles-option").click(function () {
    $(this).val("selected");
    $("#kms-option").val("");
});

//Radio button selected set value to checked.
$("#option2").click(function () {
    $(this).val("checked");
    $("#option1").val("");
});

$("#option1").click(function () {
    $(this).val("checked");
    $("#option2").val("");
});
