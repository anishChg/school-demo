$('.slider-slide').slick({
  // dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  fade: true,
  cssEase: 'linear', 
  // autoplay: true,
});

$('.test-wrap').slick({
 
  arrows: false,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
  {
    breakpoint: 1199,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 991,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1,
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: false,
      slidesToShow: 1
    }
  }
  ]
});


$("#cssmenu").menumaker({
  format: "multitoggle"
});

$('.datepicker').datepicker();

// $('.datepicker').datepicker({,
//     startDate: '-3d'
// });