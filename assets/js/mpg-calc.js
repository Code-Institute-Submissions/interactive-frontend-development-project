var mpg = 0;

function calcMpg(outputText){
    let inputDistance = document.getElementById("miles-or-kms-traveled");    
    let inputLitres = document.getElementById("litres-input");
    let outputValue = document.getElementById("mpg-output");
    let radioBtnUK = document.getElementsByClassName("uk-mpg");
    let radioBtnUS = document.getElementsByClassName("us-mpg");
    let gallonRate = 0;

    mpg = inputDistance.value / inputLitres.value;
    
    if(document.getElementsByClassName("active").textContent == "UK MPG"){
        gallonRate = 4.25;
    }
    else if(radioBtnUS){
        gallonRate = 3.75;
    }
    mpg *= gallonRate;
    outputValue.innerHTML = outputText + mpg.toFixed(2);
}

function verifyOptionIsNotBlank(){
    if($("kms-option").val() == "kms"){
        let outputText = "Kilometers per gallon:";
    }
    else if($("miles-option").val() == "miles"){
        let outputText = "Miles per gallon:";
    }
    return outputText
}

$("#calc-mpg-btn").click(function() {
    if($("#drop-down1").val() == "kms" || $("#drop-down1").val() == "miles"){
        calcMpg();
    }
    else{
        $("#mpg-achieved").text("Invalid");
    }
});
