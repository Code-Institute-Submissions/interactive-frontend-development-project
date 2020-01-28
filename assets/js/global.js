//navbar button
$(".navbar-color-button").click(function(){
    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");
});

//income tax clac change arrow icon and collapse content.
$(".tab-decoration").click(function(){
    let mpgBtn = $("#mpg-calc");
    let mpgContent = $("#collapseTwo");

    incomeTaxToggleArrow();

    if ($("#income-tax").attr('aria-expanded')) {
            $("#mpg-calc").attr('aria-expanded', 'true');
            mpgBtn.removeClass("collapsed");
            mpgContent.addClass("show");
            mpgCalcToggleArrow();
    }
});

function incomeTaxToggleArrow(){

    $(".dropdown-arrow-income").toggleClass("fa-chevron-circle-up").toggleClass("fa-chevron-circle-down");

}

function mpgCalcToggleArrow(){
    $(".dropdown-arrow-mpg").toggleClass("fa-chevron-circle-up").toggleClass("fa-chevron-circle-down");
}

//mpg calc change arrow icon and collapse content.
$(".tab-decoration2").click(function(){
    let incomeTaxBtn = $("#income-tax");
    let incomeTaxContent = $("#collapseOne");

    mpgCalcToggleArrow();

     if ($("#mpg-calc").attr('aria-expanded')) {
            $("#income-tax").attr('aria-expanded', 'true');
            incomeTaxBtn.removeClass("collapsed");
            incomeTaxContent.addClass("show");
            incomeTaxToggleArrow();
    }
    
});


