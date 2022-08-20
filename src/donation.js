/* Получить доступ к dom элементам секции donations*/
const donation250 = document.querySelector("#donation_250");
const donation500 = document.querySelector("#donation_500");
const donation750 = document.querySelector("#donation_750");
const donation1000 = document.querySelector("#donation_1000");
const donationOther = document.querySelector("#donation_other");

/* Получить доступ к dom элементам секции support */
const support250 = document.querySelector("#support_250");
const support500 = document.querySelector("#support_500");
const support750 = document.querySelector("#support_750");
const support1000 = document.querySelector("#support_1000");
const supportOther = document.querySelector("#support_other");

donation250.addEventListener("click", checkStatus);

function checkStatus(evt) {
  if ((evt.target.checked = true)) {
    support250.setAttribute("checked", true);
  }
}
