var mpg = 0;

function calcMpg(outputTextValue){
    let inputDistance = document.getElementById("miles-or-kms-traveled");    
    let inputLitres = document.getElementById("litres-input");
    let outputValue = document.getElementById("mpg-output");
    let outputText = document.getElementById("mpg-text");
    let radioBtnUK = document.getElementsByClassName("uk-mpg");
    let radioBtnUS = document.getElementsByClassName("us-mpg");
    let usCheckedRadioBtn = document.getElementById("option1");
    let ukCheckedRadioBtn = document.getElementById("option2");
    let gallonRate = 0;

    mpg = inputDistance.value / inputLitres.value;
    
    if(ukCheckedRadioBtn.value === ""){
        gallonRate = 4.25;
    }
    else if(usCheckedRadioBtn.value === ""){
        gallonRate = 3.75;
    }
    mpg *= gallonRate;
    outputValue.innerHTML = mpg.toFixed(2);
    outputText.innerHTML = outputTextValue;
}

function setOutputTextValue(){
    let outputTextValue;
    if($("kms-option").val() === "kms"){
        outputTextValue = "Kilometers";
    }
    else if($("miles-option").val() === "miles"){
        outputTextValue = "Miles";
    }
    return outputTextValue;
}
//On click function
$("#calc-mpg-btn").click(function() {
    let setMilesOrKmsText;
    if($("#drop-down1").val() == ""){
        $("#mpg-achieved").text("Invalid");
    }
    else{
        setMilesOrKmsText = setOutputTextValue();
        calcMpg(setMilesOrKmsText);
    }
});

//Radio button checked.
$("#option2").click(function(){
    $(this).val("checked");
    $("#option1").val("");
});

$("#option1").click(function(){
    $(this).val("checked");
    $("#option2").val("");
});