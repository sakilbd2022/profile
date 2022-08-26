$(function(){
    
    
    $('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: 'black'
    });

    $('.css').rProgressbar({
        percentage: 95,
        fillBackgroundColor: 'red'
    });



    $('.figma').rProgressbar({
        percentage: 87,
        fillBackgroundColor: '#9b59b6'
    });



    $('.gmail').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#5DADE2'
        
    });



    $('.sass').rProgressbar({
        percentage: 95,
        fillBackgroundColor: '#f1c40f',
        backgroundColor: '#F2F3F4'
    });

    new VenoBox({
        selector: ".my-video"
    });
    new WOW().init();

    $('.silik_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        dots:true,
        arrows:false,
        Infinity:true,
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          ]
      });
      
      $(window).scroll(function(){
    var scrolling = $(window).scrollTop()
    if(scrolling >20){
        $(".menu").addClass("sub_menu")
    }else{
        $(".menu").removeClass("sub_menu")
    }
    if(scrolling){
        $(".back_to_top").fadeIn(500)
    }else{
        $(".back_to_top").fadeOut(500)
    }
})
$(".back_to_top").click(function(){
    $("html,body").animate({
        scrollTop:0
    })
})
var mixer = mixitup('.mixit_main');

})