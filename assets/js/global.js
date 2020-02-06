//navbar toggle arrow
$(".navbar-color-button").click(function() {

    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");

});

//toggle arrow on click of income tax button
function incomeTaxToggleArrow() {

    if ($(".dropdown-arrow-income").hasClass("fa-chevron-circle-up")) {

        $(".dropdown-arrow-income").removeClass("fa-chevron-circle-up");
        $(".dropdown-arrow-income").addClass("fa-chevron-circle-down");

    }
    else if($(".dropdown-arrow-income").hasClass("fa-chevron-circle-down")) {

        $(".dropdown-arrow-income").removeClass("fa-chevron-circle-down");
        $(".dropdown-arrow-income").addClass("fa-chevron-circle-up");

    }

}

//toggle arrow on click of mpg button
function mpgCalcToggleArrow() {

    if ($(".dropdown-arrow-mpg").hasClass("fa-chevron-circle-up")) {

        $(".dropdown-arrow-mpg").removeClass("fa-chevron-circle-up");
        $(".dropdown-arrow-mpg").addClass("fa-chevron-circle-down");

    }
    else if ($(".dropdown-arrow-mpg").hasClass("fa-chevron-circle-down")) {

        $(".dropdown-arrow-mpg").removeClass("fa-chevron-circle-down");
        $(".dropdown-arrow-mpg").addClass("fa-chevron-circle-up");

    }

}

//income tax clac change arrow icon and collapse content.
$(".tab-decoration").click(function() {

    let mpgContent = $("#collapseTwo");

    incomeTaxToggleArrow();
    toggleCalcContent($("#mpg-calc"), mpgContent);

});

//mpg calc change arrow icon and collapse content.
$(".tab-decoration2").click(function() {

    let incomeTaxContent = $("#collapseOne");

    mpgCalcToggleArrow();
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
    if ((calc.attr('aria-expanded') == "true" && otherCalc.attr('aria-expanded') == "true")) {

        otherCalc.attr('aria-expanded', 'false');
        otherCalc.addClass("collapsed");
        content.removeClass("show");

    }
    else if ((calc.attr('aria-expanded') == "false" && otherCalc.attr('aria-expanded') == "false")) {

        otherCalc.attr('aria-expanded', 'true');
        otherCalc.removeClass("collapsed");
        content.addClass("show");

    }

}

// Keeps mpg open if both are closed.
function keepMpgOpen() {

    if (($("#mpg-calc").attr('aria-expanded') == "false" || $("#income-tax").attr('aria-expanded') == "false")) {

        $("#mpg-calc").attr('aria-expanded', 'true');
        $("#mpg-calc").removeClass("collapsed");
        $("#collapseOne").addClass("show");
        
    }

}