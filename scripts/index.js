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

new Swiper('.image-slider', {
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


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

const themeSwitcherHeader = document.querySelector('.theme__switcher');

themeSwitcherHeader.addEventListener('click', () => {
  if (!page.classList.contains('page_theme_dark')) {
    page.classList.add('page_theme_dark');
    themeSwitcherHeader.classList.add('theme__switcher_active');
  } else {
    page.classList.remove('page_theme_dark');
    themeSwitcherHeader.classList.remove('theme__switcher_active');
  }
})

// bikes cards

const cards = document.querySelectorAll('.card');
const cardsMenuButtons = document.querySelectorAll('.bikes__menu-item');
const bike = document.querySelectorAll('.bike');

function hideContent() {
  cards.forEach(item => {
      item.classList.remove('card_active');
  });

  cardsMenuButtons.forEach(item => {
      item.classList.remove('bikes__menu-item_active');
  });

  bike.forEach(item => {
    item.classList.remove('bike_active');
  });
}

function showContent(i = 0) {
  cards[i].classList.add('card_active');
  cardsMenuButtons[i].classList.add('bikes__menu-item_active');
  bike[i].classList.add('bike_active');
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

