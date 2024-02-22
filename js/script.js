
$('.service_body').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    prevArrow:'<i class="fa-solid fa-arrow-left prev_arr"></i>',
    nextArrow: '<i class="fa-solid fa-arrow-right next_arr"></i>',
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
    ]
  });


  $('.counter_count').counterUp({
    delay: 10,
    time: 1000
});

$('.about_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1700,
  prevArrow:'<i class="fa-solid fa-arrow-left prev_arr"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next_arr"></i>',
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        
      }
    }
  ]
});

let main_manu = document.querySelector('.main_menu')
console.log(main_manu);
window.addEventListener('scroll',()=>{
  let scrollAmount = window.scrollY
  if(scrollAmount > 300){
main_manu.classList.add('fixed_menu')
  }
  else{
    main_manu.classList.remove('fixed_menu')
  }
})



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
