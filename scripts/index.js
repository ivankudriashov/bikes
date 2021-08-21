'use strict';


// hamburger menu

const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger__line');
const menu = document.querySelector('.header__menu');

function doTheCross() {
  hamburgerLine.forEach(item => {
    if (!item.classList.contains('hamburger__line_active')) {
      item.classList.add('hamburger__line_active');
    } else {
      item.classList.remove('hamburger__line_active');
    }
  })
}

function activeMenu() {
  if (!menu.classList.contains('header__menu_active')) {
    menu.classList.add('header__menu_active');
  } else {
    menu.classList.remove('header__menu_active');
  }
}

hamburger.addEventListener('click', () => {
  doTheCross();
  activeMenu();
})

// slider
$('.carousel').slick({
  variableWidth: true,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1200,
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon" d="M9 1L2 9L9 17" stroke-width="2"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="icon" d="M1 17L8 9L1 0.999999" stroke-width="2"/></svg></button>',
  responsive: [
      {
          breakpoint: 992,
          settings: {
            variableWidth: false,
            slidesToShow: 1
          }
      }
  ]
});

if (screen.width <= 992) {
	$('.bike__wrapper').slick({
    variableWidth: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
}

//dark theme

const page = document.querySelector('.page');
const themeSwitcher = document.querySelector('.footer__switcher');
const arrowImg = document.querySelectorAll('.button__img')

themeSwitcher.addEventListener('click', () => {
  if (!page.classList.contains('page_theme_dark')) {
    page.classList.add('page_theme_dark');
    themeSwitcher.classList.add('footer__switcher_theme_dark');
    arrowImg.forEach(item => {
      item.style.stroke="#151515"
    })
  } else {
    page.classList.remove('page_theme_dark');
    themeSwitcher.classList.remove('footer__switcher_theme_dark');
  }
})

// bikes cards

const cards = document.querySelectorAll('.card');
const cardsMenuButtons = document.querySelectorAll('.bikes__menu-item');

function hideContent() {
  cards.forEach(item => {
      item.classList.remove('card_active');
  });

  cardsMenuButtons.forEach(item => {
      item.classList.remove('bikes__menu-item_active');
  });
}

function showContent(i = 0) {
  cards[i].classList.add('card_active');
  cardsMenuButtons[i].classList.add('bikes__menu-item_active');
}

hideContent();
showContent();

cardsMenuButtons.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideContent();
    showContent(i);
  })
})

const select = document.querySelector('select.bikes__menu')

select.addEventListener('change', (e) => {
  if (e.target.value === 'highway') {
    hideContent();
    showContent(0);
  } else if (e.target.value === 'gravel') {
    hideContent();
    showContent(1);
  } else if (e.target.value === 'tt') {
    hideContent();
    showContent(2);
  }
})
