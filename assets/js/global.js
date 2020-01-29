//navbar button
$(".navbar-color-button").click(function(){
    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");
});

//income tax clac change arrow icon and collapse content.
$(".tab-decoration").click(function(){
    let mpgBtn = $("#mpg-calc");
    let mpgContent = $("#collapseTwo");

    incomeTaxToggleArrow();
    console.log("Hi1");
    toggleCalcContent($("#mpg-calc"), mpgContent);
    // if ($("#income-tax").attr('aria-expanded')) {
    //     console.log("Hi2");
    //      if ($("#mpg-calc").attr('aria-expanded') == "false") {
    //             console.log("Hi3");
    //             $("#mpg-calc").attr('aria-expanded', 'true');
    //             mpgBtn.removeClass("collapsed");
    //             mpgContent.addClass("show");
    //             mpgCalcToggleArrow();
    //     }

    // }
});

function incomeTaxToggleArrow() {

    if($(".dropdown-arrow-income").hasClass("fa-chevron-circle-up")){

        $(".dropdown-arrow-income").removeClass("fa-chevron-circle-up");
        $(".dropdown-arrow-income").addClass("fa-chevron-circle-down");

    }
    else {

        $(".dropdown-arrow-income").addClass("fa-chevron-circle-up");
        $(".dropdown-arrow-income").removeClass("fa-chevron-circle-down");

    }

}

function mpgCalcToggleArrow() {

     if($(".dropdown-arrow-mpg").hasClass("fa-chevron-circle-up")){

        $(".dropdown-arrow-mpg").removeClass("fa-chevron-circle-up");
        $(".dropdown-arrow-mpg").addClass("fa-chevron-circle-down");

    }
    else {

        $(".dropdown-arrow-mpg").addClass("fa-chevron-circle-up");
        $(".dropdown-arrow-mpg").removeClass("fa-chevron-circle-down");

    }

}

//mpg calc change arrow icon and collapse content.
$(".tab-decoration2").click(function() {
    let incomeTaxContent = $("#collapseOne");

    mpgCalcToggleArrow();
    toggleCalcContent($("#income-tax"), incomeTaxContent);
    // if ($("#mpg-calc").attr('aria-expanded') == "false") {

    //     if ($("#income-tax").attr('aria-expanded')) {
    //             $("#income-tax").attr('aria-expanded', 'true');
    //             incomeTaxBtn.removeClass("collapsed");
    //             incomeTaxContent.addClass("show");
    //             incomeTaxToggleArrow();
    //     }

    // }
    
});

function toggleCalcContent(calc, content){
    let otherCalc;

    if(calc == $("#mpg-calc")) {
        otherCalc = $("#income-tax");
    }
    else {
        otherCalc = $("#mpg-calc");
    }

    if (calc.attr('aria-expanded') == "false") {

        if (otherCalc.attr('aria-expanded')) {
                otherCalc.attr('aria-expanded', 'true');
                otherCalc.removeClass("collapsed");
                content.addClass("show");
                
        }

    }

     if((calc.attr('aria-expanded') == "true" && otherCalc.attr('aria-expanded') == "true")) {
            otherCalc.attr('aria-expanded', 'false');
            otherCalc.addClass("collapsed");
            content.removeClass("show");
    }
    
}


