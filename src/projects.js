//Переменные для блока "projects"
const btnNext = document.querySelector('.sliders-control__next');
const btnPrv = document.querySelector('.sliders-control__prev');
const slidess = document.querySelectorAll('.slider');


//Функция переключения слайдов через добавление класса актив
let indexSlider = 0;

const activeSlider = n => {
    for (slider of slidess) {
        slider.classList.remove('slider_active');
    }
    slidess[n].classList.add('slider_active');
}

const nextSlider = () => {
    if (indexSlider == slidess.length - 1) {
        indexSlider = 0;
        activeSlider(indexSlider);
    } else {
        indexSlider++;
        activeSlider(indexSlider);
    }

}

const prevSlider = () => {
    if (indexSlider == 0) {
        indexSlider = slidess.length - 1;
        activeSlider(indexSlider);
    } else {
        indexSlider--;
        activeSlider(indexSlider);
    }

}

//Применение функций на кнопки
btnNext.addEventListener('click', nextSlider);
btnPrv.addEventListener('click', prevSlider);
