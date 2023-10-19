$(window).scroll(function(){
    if ($(this).scrollTop() > 90) {
        $('#header').addClass('isFixed');
    } else {
        $('#header').removeClass('isFixed');
    }
});