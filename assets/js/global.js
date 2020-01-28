//navbar button
$(".navbar-color-button").click(function(){
    $(".menu-button").toggleClass("fa-caret-up").toggleClass("fa-caret-down");
});

//income tax clac button
$(".tab-decoration").click(function(){
    const mpgBtn = $("#mpg-calc");
    const mpgContent = $("#collapseTwo");

    $(".dropdown-arrow-income").toggleClass("fa-chevron-circle-up").toggleClass("fa-chevron-circle-down");

    if ($("#income-tax").attr('aria-expanded')) {
            $("#mpg-calc").attr('aria-expanded', 'true');
            mpgBtn.removeClass("collapsed");
            mpgContent.addClass("show");
    }
});

//mpg calc button
$(".tab-decoration2").click(function(){
    const incomeTaxBtn = $("#income-tax");
    const incomeTaxContent = $("#collapseOne");

    $(".dropdown-arrow-mpg").toggleClass("fa-chevron-circle-up").toggleClass("fa-chevron-circle-down");

     if ($("#mpg-calc").attr('aria-expanded')) {
            $("#income-tax").attr('aria-expanded', 'true');
            incomeTaxBtn.removeClass("collapsed");
            incomeTaxContent.addClass("show");
    }
    
});


