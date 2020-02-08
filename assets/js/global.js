//navbar toggle arrow
$(".navbar-color-button").click(function() {

    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");

});

//income tax clac collapse content.
$(".tab-decoration").click(function() {

    let mpgContent = $("#collapseTwo");

    toggleCalcContent($("#mpg-calc"), mpgContent);

});

//mpg calc change collapse content.
$(".tab-decoration2").click(function() {

    let incomeTaxContent = $("#collapseOne");

    toggleCalcContent($("#income-tax"), incomeTaxContent);
    keepMpgOpen();

});

//Keeps one content section open at all times.
function toggleCalcContent(calc, content) {

    let otherCalc;

    if (calc == $("#mpg-calc")) {

        otherCalc = $("#income-tax");

    }
    else {

        otherCalc = $("#mpg-calc");

    }

    if (calc.attr('aria-expanded') == "true") {

        if (otherCalc.attr('aria-expanded') == "false") {

            otherCalc.attr('aria-expanded', 'true');
            otherCalc.removeClass("collapsed");
            content.addClass("show");
                
        }

    }
    if (calc.attr('aria-expanded') == "true" && otherCalc.attr('aria-expanded') == "true") {

        otherCalc.attr('aria-expanded', 'false');
        otherCalc.addClass("collapsed");
        content.removeClass("show");

    }
    else if (calc.attr('aria-expanded') == "false" && otherCalc.attr('aria-expanded') == "false") {

        otherCalc.attr('aria-expanded', 'true');
        otherCalc.removeClass("collapsed");
        content.addClass("show");

    }

}

// Keeps mpg open.
function keepMpgOpen() {

    if ($("#mpg-calc").attr('aria-expanded') == "false" || $("#income-tax").attr('aria-expanded') == "false") {

        $("#mpg-calc").attr('aria-expanded', 'true');
        $("#mpg-calc").removeClass("collapsed");
        $("#collapseOne").addClass("show");
        
    }

}