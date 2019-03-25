var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: false,
    margin: 0,
    columns: 3,
    breakAt: {
        1200: 3,
        940: 2,
        520: 1,
        400: 1
    }
});

$('.portfolio-link').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-item'
    }
  });


  $('.view').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 350,
        easing: 'ease-in-out' 
      } 
  });