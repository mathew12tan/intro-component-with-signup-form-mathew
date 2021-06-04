const form = document.querySelector(".signup-form");

const fName = document.querySelector("#fName");
const lName = document.querySelector("#lName");
const password = document.querySelector("#password");

const emailDiv = document.querySelector(".email-div");
const email = document.querySelector("#email");
const emailErrorMsg = document.querySelector(".email-div .error-msg");
emailErrorMsg.innerHTML = "<em>Email cannot be empty</em>";

function validateInput(element) {
  const input = document.getElementById(`${element}`);
  const inputDiv = document.querySelector(`.${element}-div`);
  if (input.value === "") {
    inputDiv.classList.add("error");
  } else {
    inputDiv.classList.remove("error");
  }
  input.addEventListener("click", function () {
    inputDiv.classList.remove("error");
  });
  input.addEventListener("keypress", function () {
    inputDiv.classList.remove("error");
  });
}

function validateEmail() {
  if (email.value === "") {
    emailErrorMsg.innerHTML = "<em>Email cannot be empty</em>";
    emailDiv.classList.add("error");
  } else if (!email.validity.valid) {
    emailDiv.classList.add("error");
    emailErrorMsg.innerHTML = "<em>Looks like this is not an email</em>";
  } else {
    emailDiv.classList.remove("error");
  }
  email.addEventListener("click", function () {
    emailDiv.classList.remove("error");
  });
  email.addEventListener("keypress", function () {
    emailDiv.classList.remove("error");
  });
}

//clear input if all input is valid
function clearInput() {
  if (fName.value !== "") {
    if (lName.value !== "") {
      if (email.value !== "" && email.validity.valid) {
        if (password.value !== "") {
          fName.value = "";
          lName.value = "";
          email.value = "";
          password.value = "";
        }
      }
    }
  }
}

form.addEventListener("submit", function (e) {
  validateInput("fName");
  validateInput("lName");
  validateEmail();
  validateInput("password");
  e.preventDefault();
  clearInput();
});



