document.addEventListener('DOMContentLoaded', function () {
  var splides = document.querySelectorAll('.carousel-portfolio');

  splides.forEach(function (element) {
    new Splide(element, {
      type: 'fade',
      rewind: true,
    }).mount();
  });
});
