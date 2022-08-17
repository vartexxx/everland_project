const imageMenu = document.querySelector('.menu__image');
const containerBigMenu = document.querySelector('.menu__big-container');
const menuOpenIcon = document.querySelector('.menu__open-icon');



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

const buttonMenuOProjecte = document.querySelector('.menu__bigtitle-mobile_o-projecte');
const buttonMenuLyudyam = document.querySelector('.menu__bigtitle-mobile_lyudyam');
const buttonMenuUslugi = document.querySelector('.menu__bigtitle-mobile_uslugi');

const listMenuOProjecte = document.querySelectorAll('.menu__big-link_o-projecte');
const listMenuLyudyam = document.querySelectorAll('.menu__big-link_lyudyam');
const listMenuUslugi = document.querySelectorAll('.menu__big-link_uslugi');

const statusImageButtonOProjecte = document.querySelector('.menu__button-status-mobile_o-projecte');
const statusImageButtonLyudyam = document.querySelector('.menu__button-status-mobile_lyudyam');
const statusImageButtonUslugi = document.querySelector('.menu__button-status-mobile_uslugi');

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
//---------------------
// Скролл по ссылкам на нужные блоки
//---------------------
const whomBlock = document.querySelector('.whom');
const directionsBlock = document.querySelector('.directions');
const advantagesBlock = document.querySelector('.advantages');
const numbersBlock = document.querySelector('.numbers');
const projectsBlock = document.querySelector('.projects');
const storiesBlock = document.querySelector('.stories');
const agencyBlock = document.querySelector('.agency');
const newsBlock = document.querySelector('.news');

const whomLinkList = document.querySelectorAll('.menu__link_pointer_whom');
const directionsLinkList = document.querySelectorAll('.menu__link_pointer_directions');
const advantagesLinkList = document.querySelectorAll('.menu__link_pointer_advantages');
const numbersLinkList = document.querySelectorAll('.menu__link_pointer_numbers');
const projectsLinkList = document.querySelectorAll('.menu__link_pointer_projects');
const storiesLinkList = document.querySelectorAll('.menu__link_pointer_stories');
const agencyLinkList = document.querySelectorAll('.menu__link_pointer_agency');
const newsLinkList = document.querySelectorAll('.menu__link_pointer_news');


whomLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    whomBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

directionsLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    directionsBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

advantagesLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    advantagesBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

numbersLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    numbersBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

projectsLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    projectsBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

storiesLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    storiesBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

agencyLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    agencyBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});

newsLinkList.forEach((el) => {
  el.addEventListener('click', () => {
    newsBlock.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
  });
});


