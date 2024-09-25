$('.slide_items').slick({
  slidesToShow: 3,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});

$('.categories_slider').slick({
  slidesToShow: 4,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
window.onload = function() {
  const navbar = document.querySelector('.navbar'); 
  const navbarHeight = navbar.offsetHeight;
  const main = document.querySelector('main');
  main.style.marginTop = navbarHeight + 'px';
};

document.querySelectorAll('ul.services li').forEach(function(item) {
  item.addEventListener('click', function() {
    document.querySelectorAll('ul.services li').forEach(function(sibling) {
      sibling.classList.remove('active');
    });
    this.classList.add('active');
  });
});



