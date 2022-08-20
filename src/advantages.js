const openButtons = document.querySelectorAll('.btn')
const closeButtons = document.querySelectorAll('.btn_type_close')
const advantagesHeader = document.querySelectorAll('.advantages__header')
const advantagesText = document.querySelector('.advantages__text')

openButtons.forEach((button) => {
  button.addEventListener('click', function (evt) {
    const itemMain = evt.target.closest(
      '.advantages__header'
    ).nextElementSibling
    evt.target.classList.toggle('btn_type_close')
    itemMain.classList.toggle('advantages__text_opened')
  })
})
