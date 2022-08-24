const imageMenu = document.querySelector('.menu__image');
const containerBigMenu = document.querySelector('.menu__big-container');
const menuOpenIcon = document.querySelector('.menu__open-icon');

const buttonMenuOProjecte = document.querySelector('.menu__bigtitle-mobile_o-projecte');
const buttonMenuLyudyam = document.querySelector('.menu__bigtitle-mobile_lyudyam');
const buttonMenuUslugi = document.querySelector('.menu__bigtitle-mobile_uslugi');

const listMenuOProjecte = document.querySelectorAll('.menu__big-link_o-projecte');
const listMenuLyudyam = document.querySelectorAll('.menu__big-link_lyudyam');
const listMenuUslugi = document.querySelectorAll('.menu__big-link_uslugi');

const statusImageButtonOProjecte = document.querySelector('.menu__button-status-mobile_o-projecte');
const statusImageButtonLyudyam = document.querySelector('.menu__button-status-mobile_lyudyam');
const statusImageButtonUslugi = document.querySelector('.menu__button-status-mobile_uslugi');

menuOpenIcon.addEventListener('click', () => {
  imageMenu.classList.toggle('menu__image_opened');
  if (containerBigMenu.style.visibility === 'visible') {
    containerBigMenu.style.visibility = 'hidden';
    containerBigMenu.style.opacity = '0';
  } else {
    containerBigMenu.style.visibility = 'visible'
    containerBigMenu.style.opacity = '1';
  }
});

buttonMenuOProjecte.addEventListener('click', () => {
  listMenuOProjecte.forEach((el) => {
    el.classList.toggle('menu__big-link_opened')
  });
  statusImageButtonOProjecte.classList.toggle('menu__button-status-mobile_opened')
});

buttonMenuLyudyam.addEventListener('click', () => {
  listMenuLyudyam.forEach((el) => {
    el.classList.toggle('menu__big-link_opened')
  });
  statusImageButtonLyudyam.classList.toggle('menu__button-status-mobile_opened')
});

buttonMenuUslugi.addEventListener('click', () => {
  listMenuUslugi.forEach((el) => {
    el.classList.toggle('menu__big-link_opened')
  });
  statusImageButtonUslugi.classList.toggle('menu__button-status-mobile_opened')
});



