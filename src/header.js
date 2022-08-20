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
const everlandBlock = document.querySelector('.everland');
const supportBlock = document.querySelector('.support');
const whomBlock = document.querySelector('.whom');
const directionsBlock = document.querySelector('.directions');
const advantagesBlock = document.querySelector('.advantages');
const numbersBlock = document.querySelector('.numbers');
const projectsBlock = document.querySelector('.projects');
const storiesBlock = document.querySelector('.stories');
const agencyBlock = document.querySelector('.agency');
const newsBlock = document.querySelector('.news');

const platformButton = document.querySelector('.menu__button_pointer_platform');
const supportButton = document.querySelector('.menu__button_pointer_support');
const whomLink = document.querySelector('.menu__link_pointer_whom');
const directionsLink = document.querySelector('.menu__link_pointer_directions');
const advantagesLink = document.querySelector('.menu__link_pointer_advantages');
const numbersLink = document.querySelector('.menu__link_pointer_numbers');
const projectsLink = document.querySelector('.menu__link_pointer_projects');
const storiesLink = document.querySelector('.menu__link_pointer_stories');
const agencyLink = document.querySelector('.menu__link_pointer_agency');
const newsLink = document.querySelector('.menu__link_pointer_news');

if (supportButton.hasAttribute('disabled')) {
  platformButton.classList.add('menu__button_active');
}
platformButton.addEventListener('click', () => {
  if (platformButton.classList.contains('menu__button_active')) {
    supportButton.classList.remove('menu__button_active');
  } else {
    platformButton.classList.add('menu__button_active')
    supportButton.classList.remove('menu__button_active');
  }
  everlandBlock.scrollIntoView({behavior: "smooth"});
});

supportButton.addEventListener('click', () => {
  if (supportButton.classList.contains('menu__button_active')) {
    platformButton.classList.remove('menu__button_active');
  } else {
    supportButton.classList.add('menu__button_active')
    platformButton.classList.remove('menu__button_active');
  }
  supportBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" })
});

whomLink.addEventListener('click', () => {
  whomBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

directionsLink.addEventListener('click', () => {
  directionsBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

advantagesLink.addEventListener('click', () => {
  advantagesBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

numbersLink.addEventListener('click', () => {
  numbersBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

projectsLink.addEventListener('click', () => {
  projectsBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});


storiesLink.addEventListener('click', () => {
  storiesBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

agencyLink.addEventListener('click', () => {
  agencyBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});

newsLink.addEventListener('click', () => {
  newsBlock.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
});


