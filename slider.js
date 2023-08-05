// gestion slider

$('.slider').slick({
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    accessibility: true
  });

$('.btn-slider').click(function() {
  let slid = $(this).data('slide');
  $('.slider').slick(slid)
})