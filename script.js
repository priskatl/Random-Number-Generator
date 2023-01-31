const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

btn.addEventListener("click", generateNumber);
window.addEventListener("load", generateNumber);

function generateNumber() {
  const randomNumber = Math.floor(Math.random() * 50 + 1);
  number.innerHTML = randomNumber;
}
