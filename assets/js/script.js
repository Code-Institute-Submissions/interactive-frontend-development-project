let incomeTaxed = document.getElementById("income-taxed-btn");
let inputBox = document.getElementById("income-input"); 
let outputBox = document.getElementById("income-tax-output");

function calcIncomeTaxed(){
    if(inputBox.value < 35000){
        outputBox.innerHTML = "Your total taxed amount for the year is " + inputBox.value * 0.20;
    }
    else if(inputBox.value >= 35000){
        let underthirtyFiveK = inputBox.value * 0.20;
        console.log(underthirtyFiveK);

        let thirtyFiveKOrMore = inputBox.value - 34999;
        thirtyFiveKOrMore = thirtyFiveKOrMore * 0.40;
        console.log(thirtyFiveKOrMore);
        
        let totalTax = underthirtyFiveK + thirtyFiveKOrMore;
        
        outputBox.innerHTML ="Your total taxed amount for the year is " + totalTax; 
    }
    
}

incomeTaxed.addEventListener("click", function(){
    calcIncomeTaxed();
}); 

