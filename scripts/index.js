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
