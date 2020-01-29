var inputDistance = document.getElementById("miles-or-kms-traveled");
var inputLitres = document.getElementById("litres-input");

function calcMpg(outputTextValue) {
    console.log("final point" + outputTextValue);
    const UK_CHECKED_RADIO_BTN = document.getElementById("option1");
    const US_CHECKED_RADIO_BTN = document.getElementById("option2");
    const IS_CHECKED = "checked";
    let outputValue = document.getElementById("mpg-output");
    let outputText = document.getElementById("mpg-text");
    let gallonRate = 0;
    let mpg = 0;

    mpg = inputDistance.value / inputLitres.value;

    if (UK_CHECKED_RADIO_BTN.value === IS_CHECKED) {
        const UK_GALLON = 4.25;
        gallonRate = UK_GALLON;
    }
    else if (US_CHECKED_RADIO_BTN.value === IS_CHECKED) {
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
        console.log("1" + KM_OUTPUT_TEXT);
        outputTextValue = KM_OUTPUT_TEXT;
        console.log("2" + outputTextValue);
    }
    else if ($("#miles-option").val() === "selected") {
        const MILES_OUTPUT_TEXT = "Miles";
        console.log("1" + MILES_OUTPUT_TEXT);
        outputTextValue = MILES_OUTPUT_TEXT;
        console.log("2" + outputTextValue);
    }
    return outputTextValue;
}

//On click function
$("#calc-mpg-btn").click(function () {
    if (isNaN(inputDistance.value) || isNaN(inputLitres.value) || $("#drop-down1").val() == "") {
        $("#mpg-output").text("Invalid..");
    }
    else {
        const setMilesOrKmsText = setOutputTextValue();
        console.log(setMilesOrKmsText);
        calcMpg(setMilesOrKmsText);
    }
});


    //Dropdown option selected set value to selected.
    $("#kms-option").click(function () {
        $("#kms-option").val("selected");
        $("#miles-option").val("");
    });

    $("#miles-option").click(function () {
        $("#miles-option").val("selected");
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

