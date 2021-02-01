const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const inputFields = document.querySelectorAll(".input");
const emailInput = document.querySelector(".input-email");
const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  validateEmail();

  isValidInput();

  firstname.value = "";
  lastname.value = "";
  email.value = "";
  password.value = "";
});

function isValidInput() {
  inputFields.forEach((input) => {
    if (input.value.length === 0) {
      input.parentElement.parentElement.style.border = "2px solid #FF7979";
      input.parentElement.parentElement.childNodes[3].style.display = "block";
      input.parentElement.parentElement.nextElementSibling.style.display =
        "block";
    } else {
      input.parentElement.parentElement.style.border = "1px solid #dedede";
      input.parentElement.parentElement.childNodes[3].style.visibility =
        "hidden";
      input.parentElement.parentElement.nextElementSibling.style.visibility =
        "hidden";
    }
  });
}

function validateEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}/;

  if (emailInput.value.length === 0 || !emailInput.value.match(pattern)) {
    emailInput.parentElement.parentElement.style.border = "2px solid #FF7979";
    emailInput.parentElement.parentElement.childNodes[3].style.display =
      "block";
    emailInput.style.color = "#ff7979";
    emailInput.parentElement.parentElement.nextElementSibling.style.display =
      "block";
  } else {
    emailInput.parentElement.parentElement.style.border = "1px solid #dedede";
    emailInput.parentElement.parentElement.childNodes[3].style.visibility =
      "hidden";
    emailInput.style.color = "initial";
    emailInput.parentElement.parentElement.nextElementSibling.style.visibility =
      "hidden";
  }
}
