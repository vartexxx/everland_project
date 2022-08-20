/* Получить доступ к dom элементам секции donations*/
const donation250 = document.querySelector("#donation_250");
const donation500 = document.querySelector("#donation_500");
const donation750 = document.querySelector("#donation_750");
const donation1000 = document.querySelector("#donation_1000");
const donationOther = document.querySelector("#donation_other");
const donationLink = document.querySelector(".donations-link_place_donations");

/* Получить доступ к dom элементам секции support */
const support250 = document.querySelector("#support_250");
const support500 = document.querySelector("#support_500");
const support750 = document.querySelector("#support_750");
const support1000 = document.querySelector("#support_1000");
const supportOther = document.querySelector("#support_other");
const inputOtherPrice = document.querySelector("#otherPrice");

donationLink.addEventListener("click", checkStatus);

function checkStatus() {
  debugger;
  if (donation250.checked === true) {
    support250.setAttribute("checked", true);
  } else if (donation500.checked === true) {
    support500.setAttribute("checked", true);
  } else if (donation750.checked === true) {
    support750.setAttribute("checked", true);
  } else if (donation1000.checked === true) {
    support1000.setAttribute("checked", true);
  } else {
    supportOther.setAttribute("checked", true);
  }
  disabledInput();
}

function disabledInput() {
  if (donationOther.checked === true) {
    inputOtherPrice.classList.remove("form__input_disabled");
  } else {
    inputOtherPrice.classList.add("form__input_disabled");
  }
}
