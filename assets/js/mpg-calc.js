var inputDistance = document.getElementById("miles-or-kms-traveled");
var inputLitres = document.getElementById("litres-input");

function calcMpg(label) {
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
    outputText.innerHTML = label;
}

const LABEL = {
'kms': 'kilometers',
'miles': 'Miles'
}

//On click function
$("#calc-mpg-btn").click(function () {
    if (isNaN(inputDistance.value) || isNaN(inputLitres.value) || $("#drop-down1").val() == "") {
        $("#mpg-output").text("Invalid..");
    }
    else {
        const label = LABEL[$("#drop-down1").val()];
        console.log(label);
        // const setMilesOrKmsText = setOutputTextValue();
        console.log(label);
        calcMpg(label);
    }
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

