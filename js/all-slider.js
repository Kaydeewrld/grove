// counter slider
$(document).ready(function() {
    site_url = $('#site_url').val();
	$('a.action').removeAttr('target');
    $('.success-stories').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		initialSlide: 0,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>'
      });

 

    $('.case-studies').slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
		initialSlide: 0,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        { breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
          
        },
        { breakpoint: 575,
          settings: {
            slidesToShow: 1,
			 slidesToScroll: 1,
          },
          
        },
	   
      ]
    
    });
	
	$('.case-studies-2').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        { breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        { breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
        },
        { breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        { breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
          
        },
      ]
    
    });

     $('.nucleus-software').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        { breakpoint: 850,
          settings: {
            slidesToShow: 2,
          },
          
        },
        { breakpoint: 768,
          settings: {
            slidesToShow: 2,
            rows: 4, // This doesn't appear to work in responsive (Mac/Chrome)
          },
          
        },
      ]
    
    });
	
    $('.events').slick({
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        
        { breakpoint: 800,
          settings: {
            slidesToShow: 1,
          },
          
        },
      ]
    });



     
     var slickoptss = {      
      speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
       slidesToShow: 5,
  	  slidesToScroll: 5,
      infinite: true,
      swipeToSlide: true,
  	  //centerMode: true,
      //focusOnSelect: true,
      //slidesPerRow:2,
      rows: 2,
	  arrows:false, 
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        { breakpoint: 776,
          settings: {
            slidesToShow: 3,
            rows: 3, // This doesn't appear to work in responsive (Mac/Chrome)
          },
          
        },
        { breakpoint: 575,
          settings: {
            slidesToShow: 2,
            rows: 2, // This doesn't appear to work in responsive (Mac/Chrome)
          },
          
        },
      ]
    };
    
    $('.brand-slider').slick(slickoptss);
	
	var slickopts = {
      slidesToShow: 5,
      slidesToScroll: 5,
      rows: 2,
      infinite: false,
      arrows: false,
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 992,
          settings: {
            slidesToShow: 5,
            arrows: false,
          }
        },
        { breakpoint: 778,
          settings: {
            slidesToShow: 3,
            rows: 3, // This doesn't appear to work in responsive (Mac/Chrome)
            arrows: true,
          },
          
        },
        { breakpoint: 575,
          settings: {
            slidesToShow: 2,
			  slidesToScroll: 2,
            rows: 4, // This doesn't appear to work in responsive (Mac/Chrome)
            arrows: true,
          },
          
        },
      ]
    };
    
    $('.brand-slider-2').slick(slickopts);
	
	
	// auto captive page brand slider js
	var slickoptnew = {      
      speed: 5000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
       slidesToShow: 6,
  	  slidesToScroll: 6,
      infinite: true,
      swipeToSlide: true,
      //rows: 2,
	  arrows:false, 
      prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
      responsive: [
        { breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        { breakpoint: 776,
          settings: {
            slidesToShow: 3,
            //rows: 3, // This doesn't appear to work in responsive (Mac/Chrome)
          },
          
        },
        { breakpoint: 575,
          settings: {
            slidesToShow: 2,
            //rows: 4, // This doesn't appear to work in responsive (Mac/Chrome)
          },
          
        },
      ]
    };
    
    $('.brand-slider3').slick(slickoptnew);

});

site_url = $('#site_url').val();
$('.accordion-button').click(function(){
  $('.case-studies, .events, .success-stories').slick('refresh');
  //$('.slider').slick("setPosition");
});


 // banner slider
  $('.animate-slider').slick({  
    draggable: true,
    arrows: false,
    dots: true,
    //fade: true,
    autoplaySpeed: 3000,
    speed: 1500,
    autoplay: true,
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
    //cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
   // cssEase: 'ease-in-out',
    touchThreshold: 60,
    responsive: [
      { breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
        }
      },
    ]
  });

  $('.animate-slider-dot').slick({
    draggable: true,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    infinite: true,
    prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    cssEase: 'ease-in-out',
    touchThreshold: 60,
  });


$('.customer-slider').slick({
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
   prevArrow: '<button class="slide-arrow prev-arrow">   <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/Customer-left.svg" alt=""></button>',
   nextArrow: '<button class="slide-arrow next-arrow"> <img src="'+site_url+'/wp-content/themes/Nucleus/assets/images/Customer-right.svg" alt=""></button>',
  responsive: [
    
    { breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
      
    },
    { breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
      
    },
  ]
}); 

// Event page Customer slider
 $('#slick1').slick({
		rows: 2,
		dots: false,
		arrows: true,
		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		 prevArrow: '<button class="a-left control-c prev slick-prev"><img src="https://www.nucleussoftware.com/wp-content/themes/Nucleus/assets/images/slider-arrow-left.svg" alt=""></button>',
         nextArrow: '<button class="a-right control-c next slick-next"><img src="https://www.nucleussoftware.com/wp-content/themes/Nucleus/assets/images/slider-arrow-right.svg" alt=""></button>',
        responsive: [
      
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
        
        breakpoint: 400,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
        },
],
});
//

$().ready(function(){
  $('.slicks-single-carousel').slick({
    arrows: false,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: false
  });
});

function hideDropDown(){
	    $('#new-product').addClass('product-hover'); 
		$('#new-product').removeAttr('id'); 
		$('#megamenu-product').hide();
		 $('#new-company').addClass('company-hover');  
		 $('#new-company').removeAttr('id');  	
		 $('#megamenu-company').hide();
		 $('.megamenu-careers').hide();
		 $('.megamenu-insights').hide();
	     jQuery('#navbarSupportedContent .nav-item .nav-link').removeClass('active');
}


$(document).ready(function() {

// collapse all tabs automatically	
$('.accordion-item .accordion-button').click(function(){
	$('.accordion-collapse').removeClass('show');
	if ($(this).hasClass("collapsed")) {
		$(this).addClass('collapsed');	 
	}else{
		 $('.accordion-button').addClass('collapsed'); 
		 $(this).removeClass('collapsed');	
	}
});
real_class = $('#after_white').attr('class');
real_logo = $('.real_logo').attr('src');	
// Product Toggle dropdown menu
$(document).on('click','.nav-item.product-hover',function(event){
	event.stopPropagation();
		$(this).addClass('new-product');
		$('.nav-item.new-product').attr('id','new-product');
		$('.nav-item.new-product').removeClass('product-hover');
		$('#megamenu-company').hide();
		$('#megamenu-product').show();
		$('#new-company').addClass('company-hover'); 
		$('.nav-item.new-company').removeClass('new-company');	
		$('.nav-item.company-hover').removeAttr('id');
		//$('.d_active').attr('style','filter: inherit;');
		$('.zero').attr('style','opacity: 0 !important;');

		// check for sticky header
		if ($("#header").hasClass("sticky-top")) {
			$('header').removeClass('position-relative');
		}else{
			// logo js
			$('.light_logo').attr('src', site_url+'/wp-content/themes/Nucleus/assets/images/logo_dark.svg');
			// header js 
			$('#header').removeClass(real_class);	
			$('#header').addClass('header-global position-relative');
		}		
});	
$(document).on('click','#new-product',function(event){
	event.stopPropagation();
	$('#new-product').addClass('product-hover');
    $('#new-product').removeAttr('id'); 
	$('#megamenu-product').hide();
	// check for sticky header
	if ($("#header").hasClass("sticky-top")) {
        $('header').removeClass('position-relative');
	}else{
		// logo js
		$('.light_logo').attr('src',real_logo);
		 // Header js	
		$('#header').removeClass('header-global position-relative');
		$('#header').addClass(real_class);
	} 
});	
	
// Company Toggle dropdown menu
$(document).on('click','.nav-item.company-hover',function(event){
 event.stopPropagation();	
 $(this).addClass('new-company');
 $('.nav-item.new-company').removeClass('company-hover');
 $('.nav-item.new-company').attr('id','new-company');
 $('#megamenu-product').hide(); 
 $('#megamenu-company').show();
 $('#new-product').addClass('product-hover');
 $('.nav-item#new-product').removeClass('new-product'); 
 $('.nav-item.product-hover').removeAttr('id','new-product');
	
  // check for sticky header
	if ($("#header").hasClass("sticky-top")) {
        $('header').removeClass('position-relative');
	}else{	
        // logo js
		 $('.light_logo').attr('src', site_url+'/wp-content/themes/Nucleus/assets/images/logo_dark.svg');
		 // Header js	
		 $('#header').removeClass(real_class);	
		 $('#header').addClass('header-global position-relative'); 
	}
});	

$(document).on('click','#new-company',function(event){
 event.stopPropagation();
 $('#new-company').addClass('company-hover');  
 $('#new-company').removeAttr('id');  	
 $('#megamenu-company').hide();
 // check for sticky header
	if ($("#header").hasClass("sticky-top")) {
        $('header').removeClass('position-relative');
	}else{	
	 // logo js
	 $('.light_logo').attr('src', real_logo);	
	 $('#header').removeClass('header-global position-relative');	
	 $('#header').addClass(real_class);	
	}	

});	
// end Toggle dropdown js 

//Remove default setting from first dropdown menu 
$('.lending, .trans, .fn').click(function(event){
   $('#v-pills-1-tab').removeAttr('style');
	$('.d_active').removeAttr('style');
	$('.zero').removeAttr('style');
});	
});



$(document).ready(function() {	 
  const mediaQuery = window.matchMedia('(min-width: 992px)')
    if (mediaQuery.matches) {
      $(window).scroll(function(){
		   /*** start hide dropdown js **/
		  $('#new-company').removeAttr('id');
		  $('#new-product').removeAttr('id');
		  $('.new-product').addClass('product-hover');
		  $('.new-company').addClass('company-hover');  
		  $('#megamenu-company').hide();
		  $('#megamenu-product').hide();
		   $('.megamenu-careers').hide();
		   $('.megamenu-insights').hide();
		   jQuery('#navbarSupportedContent .nav-item .nav-link').removeClass('active');
		  // check for sticky header
			if ($("#header").hasClass("sticky-top")) {
				$('header').removeClass('position-relative');
			}else{	
			 // logo js
			 $('.light_logo').attr('src', real_logo);	
			 $('#header').removeClass('header-global position-relative');	
			 $('#header').addClass(real_class);	
			}
		  /*** End hide dropdown js **/
		  
      if ($(this).scrollTop() > 50) {
        $('header').removeClass('position-relative');
        $('header').addClass('sticky-top');
        $('#megamenu-product').addClass('position-fixed'); 
        $('#megamenu-company').addClass('position-fixed');
		$('.megamenu-careers').addClass('position-fixed');
        $('.megamenu-insights').addClass('position-fixed');
        // $(".navbar-brand").children().attr("src","http://placekitten.com/300/300");
			
        
      } else {
        $('header').removeClass('sticky-top');
        $('header').addClass('position-relative');
        $('#megamenu-product').removeClass('position-fixed');
        $('#megamenu-company').removeClass('position-fixed');
		$('.megamenu-careers').removeClass('position-fixed'); 
        $('.megamenu-insights').removeClass('position-fixed');  
        // $(".navbar-brand").children().attr("src","http://placekitten.com/200/200");
      }
      });
    }	
	
	
}); 


$(document).ready(function() {
  const mediaQuery = window.matchMedia('(max-width: 991px)')
    if (mediaQuery.matches) {

      $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('header').removeClass('position-relative');	  		  
        $('header').addClass('sticky-top');
		 
        
      } else {
        $('header').removeClass('sticky-top');
        $('header').addClass('position-relative'); 
      }
      });
    }
});


// dropdown close click outside
var mouse_is_inside = false;
$(document).ready(function()
{
    $('#megamenu-product, #megamenu-company').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });
    $("body").mouseup(function(){ 
        if(!mouse_is_inside) 
	{		
		  hideDropDown();
	}
	});
	
	
	
	
// Custom js for redirect and add value in the field
$(document).on('click','.download-link',function(){
	//alert();
	pdf_url = $(this).attr('href1');
	//alert(pdf_url);	
	$('#city-2859c44e-05f4-4aa6-8aeb-483d946d9b06').val(pdf_url);	
});	
	
$(document).on('click','.wpcf7-submit',function(){
	var f_name = $('.f_name').val();	
	var l_name = $('.l_name').val();
	var email = $('.email').val();
	var company = $('.company').val();
	if(f_name && l_name && email && company){
	    $('#exampleModal').modal('hide');
	  }	
});

});

//

      // productlink,.back MOBILE VIEW
      $(document).ready(function() {
        $(".productlink,.back").click(function() {
		$(".mobile-main-menu").toggle();	
          $(".product-submenu").toggle();
          
        });
      });

      // companylink,.back MOBILE VIEW
      $(document).ready(function() {
        $(".companylink,.back-company").click(function() {
          $(".company-submenu").toggle();
          $(".mobile-main-menu").toggle();
        });
      });


      // lendinglink,.back MOBILE VIEW
      $(document).ready(function() {
        $(".lendinglink,.back-lending-parentmenu").click(function() {
          $(".lending-submenu").toggle(); 
          $(".product-submenu").toggle();
        });
      });

      // transactionlink,.back MOBILE VIEW
      $(document).ready(function() {
        $(".transactionlink,.back-transaction-parentmenu").click(function() {
          $(".transaction-submenu").toggle(); 
          $(".product-submenu").toggle();
        });
      });

      // transactionlink,.back MOBILE VIEW
      $(document).ready(function() {
      $(".financiallink,.back-financial-parentmenu").click(function() {
        $(".financial-submenu").toggle(); 
        $(".product-submenu").toggle();
      });
    });

// New Header Js
function megaMenu(menushow,menuProduct,menuCompany,menuInsight){
	    jQuery('#navbarSupportedContent .nav-item .nav-link').removeClass('active');
	    var navClass = jQuery('.'+menushow).attr('class');
		var ret = navClass.split(" ");
		var str1 = ret[0];
		var str2 = ret[1];
	    jQuery('.nav-item.'+str2).find('.nav-link').addClass('active');
		jQuery('.'+menuProduct).hide();
		jQuery('.'+menuCompany).hide();
		jQuery('.'+menuInsight).hide();
		jQuery('.'+menushow).show();	
		jQuery('.zero').attr('style','opacity: 0 !important;');

		// check for sticky header
		if (jQuery("#header").hasClass("sticky-top")) {
			jQuery('header').removeClass('position-relative');
		}else{
			// logo js
			jQuery('.light_logo').attr('src', site_url+'/wp-content/themes/Nucleus/assets/images/logo_dark.svg');
			// header js 
			jQuery('#header').removeClass(real_class);	
			jQuery('#header').addClass('header-global position-relative');
		}	
}
function megaMenuHide(menushow,menuProduct,menuCompany,menuInsight){
	    jQuery('#navbarSupportedContent .nav-item .nav-link').removeClass('active');
	    var navClass = jQuery('.'+menushow).attr('class');
		var ret = navClass.split(" ");
		var str1 = ret[0];
		var str2 = ret[1];
	    jQuery('.nav-item.'+str2).find('.nav-link').addClass('active');
		jQuery('.'+menuProduct).hide();
		jQuery('.'+menuCompany).hide();
		jQuery('.'+menuInsight).hide();
		jQuery('.'+menushow).hide();	
		jQuery('.zero').attr('style','opacity: 0 !important;');	
}

