// counter slider
$('.counter').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">   <img src="https://www.nucleussoftware.com/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <img src="https://www.nucleussoftware.com/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
    responsive: [
      { breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      { breakpoint: 768,
        settings: {
          slidesToShow: 6
        }
        
      }
     
    ]
      
   
  });






  // counter

  
	$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: '',
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({end: $('#number1').text(),duration: 6000});
$('#number2').jQuerySimpleCounter({end: $('#number2').text(),duration: 4000});
$('#number3').jQuerySimpleCounter({end: $('#number3').text(),duration: 6000});
$('#number4').jQuerySimpleCounter({end: $('#number4').text(),duration: 5500});
$('#number5').jQuerySimpleCounter({end: $('#number5').text(),duration: 2500});
$('#number6').jQuerySimpleCounter({end: $('#number6').text(),duration: 3500});
$('#number7').jQuerySimpleCounter({end: $('#number7').text(),duration: 3000});

$('#num1').jQuerySimpleCounter({end: $('#num1').text(),duration: 5000});
$('#num2').jQuerySimpleCounter({end: $('#num2').text(),duration: 4000});
$('#num3').jQuerySimpleCounter({end: $('#num3').text(),duration: 6000});
$('#num4').jQuerySimpleCounter({end: $('#num4').text(),duration: 5500});
$('#num5').jQuerySimpleCounter({end: $('#num5').text(),duration: 2500});
$('#num6').jQuerySimpleCounter({end: $('#num6').text(),duration: 3500});

$('#n1').jQuerySimpleCounter({end: 3,duration: 5000});
$('#n2').jQuerySimpleCounter({end: 200,duration: 4000});
$('#n3').jQuerySimpleCounter({end: 26,duration: 6000});
$('#n4').jQuerySimpleCounter({end: 500,duration: 5500});
$('#n5').jQuerySimpleCounter({end: 1,duration: 2500});
$('#n6').jQuerySimpleCounter({end: 300,duration: 3500});

  /* AUTHOR LINK */
   $('.about-me-img').hover(function(){
          $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
      }, function(){
          $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
      });
