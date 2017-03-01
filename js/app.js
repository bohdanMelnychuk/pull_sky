

$(function(){
    $('.modal-cell').modal();
    $('#carousel').carousel({
        interval : false
    });
    $('#carousel-company').carousel({
        interval : false
    });
    $('#carousel-aside').carousel({
        interval : false
    })
    $('#carousel-client').carousel({
        interval : false
    })

   
//add active classes
    $('.main-nav li a').click(function(){
        $('.main-nav li.active-link').removeClass("active-link");
        $(this).parent().addClass("active-link");
    })
    
    $('.lang .languages li').click(function(){
        $('.lang .languages li.active-lang').removeClass("active-lang");
        $(this).addClass("active-lang");
    })
    
    $('.news .nav-news li a').click(function(){
        $('.news .nav-news li a.active-link-news').removeClass("active-link-news");
        $(this).addClass("active-link-news");
    })
    
    $('input[name=phone]').click(function(){
        $(this).val("+38")
    })
    
    //validation input fields
    
})