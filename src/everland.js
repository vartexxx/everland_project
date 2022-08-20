//Переменные
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide');
      numbers = document.querySelector('.everland__slider-number');

//Индекс сладйа
let index = 0;

//Функция активного слайда, добавляет модификатор slide_active
const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('slide_active');
    }
    numbers.textContent = (n+1) + '/6'
    slides[n].classList.add('slide_active');
}

//Функция перехода на предыдущий слайд
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

//Функция перехода на следующий слайд
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

//Обработчики событий клика на кнопки next и prev
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
