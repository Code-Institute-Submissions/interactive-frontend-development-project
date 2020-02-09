//navbar toggle arrow
$(".navbar-color-button").click(function() {

    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");

});

//income tax clac collapse content.
$(".income-tax-btn").click(function() {

    toggleAccordian($('#collapseOne'), $('#collapseTwo'));

});

//mpg calc change collapse content.
$(".mpg-calc-btn").click(function() {

    toggleAccordian($('#collapseTwo'), $('#collapseOne'));

});

//toggles content to keep one section open.
function toggleAccordian(selectedElement, otherElement) {

    if (selectedElement.hasClass('show') === true) {

        otherElement.collapse('show');

    }
    else {

        otherElement.collapse('hide');

    }

}