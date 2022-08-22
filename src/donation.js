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
const supportSection = document.querySelector("#support");

donationLink.addEventListener("click", checkStatus);
donationLink.addEventListener("click", scrollTo);
supportOther.addEventListener("click", disabledInput);

function checkStatus() {
  debugger;
  if (donation250.checked) {
    support250.checked = true;
  } else if (donation500.checked) {
    support500.checked = true;
  } else if (donation750.checked) {
    support750.checked = true;
  } else if (donation1000.checked) {
    support1000.checked = true;
  } else {
    supportOther.checked = true;
  }
  disabledInput();
}

function disabledInput() {
  if (supportOther.checked === true) {
    inputOtherPrice.classList.remove("form__input_disabled");
  } else {
    inputOtherPrice.classList.add("form__input_disabled");
  }
}

function scrollTo() {
  supportSection.scrollIntoView({ block: "start", behavior: "smooth" });
}