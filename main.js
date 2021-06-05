const form = document.querySelector(".signup-form");
form.setAttribute("novalidate", "");

const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const password = document.querySelector("#password");

const email = document.querySelector("#email");
const emailErrorMsg = document.querySelector(".email-div .error-msg");

function addError(input) {
  input.parentElement.classList.add("error");
}

function removeError(input) {
  input.parentElement.classList.remove("error");
}

function resetInput(input) {
  input.addEventListener("input", function () {
    removeError(input);
  });
}

function validateInput(input) {
  resetInput(input);
  if (input.value === "") {
    addError(input);
    return false;
  } else {
    removeError(input);
    return true;
  }
}

function validateEmail() {
  resetInput(email);
  if (!email.validity.valid) {
    addError(email);
    emailErrorMsg.innerHTML = "<em>Looks like this is not an email</em>";
    if (email.value === "") {
      addError(email);
      emailErrorMsg.innerHTML = "<em>Email cannot be empty</em>";
    }
    return false;
  } else {
    removeError(email);
    return true;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const isAllValid = [
    validateInput(fName),
    validateInput(lName),
    validateEmail(),
    validateInput(password),
  ];
  if (isAllValid.every(x=> x===true)) {
    alert("You have successfully claim your free trial!");
    window.location.replace("./index.html");
  }
});
