//Переменные для блока "projects"
const btnNext = document.querySelector('.sliders-control__next');
const btnPrv = document.querySelector('.sliders-control__prev');
const slides = document.querySelectorAll('.slider');


//Функция переключения слайдов через добавление класса актив
let indexSlide = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('slider_active');
    }
    slides[n].classList.add('slider_active');
}

const nextSlide = () => {
    if (indexSlide == slides.length - 1) {
        indexSlide = 0;
        activeSlide(indexSlide);
    } else {
        indexSlide++;
        activeSlide(indexSlide);
    }

}

const prevSlide = () => {
    if (indexSlide == 0) {
        indexSlide = slides.length - 1;
        activeSlide(indexSlide);
    } else {
        indexSlide--;
        activeSlide(indexSlide);
    }

}

//Применение функций на кнопки
btnNext.addEventListener('click', nextSlide);
btnPrv.addEventListener('click', prevSlide);
