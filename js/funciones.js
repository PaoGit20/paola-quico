$(document).ready(function() {
    $(".hamb").click(function(e) {
        e.preventDefault();
        $("header .container nav").toggleClass("open");
        $(".hamb i").toggleClass("fa-times-circle");
    });

    $("header .container nav a").click(function(e) {
        $("header .container nav").removeClass("open");
        $(".hamb i").removeClass("fa-times-circle");

        var dev = $(this).attr("href");

        $("html,body").animate({
            "scrollTop": $(dev).offset().top - 76
        });
    });
});
