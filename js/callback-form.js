const callbackForm = document.querySelector(".callback-form-container");
const callbackResponce = document.querySelector("#response-modal-form");

const userName = document.querySelector("#callback-input-name");
const userEmail = document.querySelector("#callback-input-email");
const userPhone = document.querySelector("#callback-input-phone");

callbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let hasError = false;
  if (!userName.value.trim()) {
    userName.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userName.classList.remove("callback-form-input-error");
  }
  if (!userEmail.value.trim() || !isEmailValid(userEmail.value)) {
    userEmail.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userEmail.classList.remove("callback-form-input-error");
  }
  if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
    userPhone.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userPhone.classList.remove("callback-form-input-error");
  }
  if (hasError) {
    return;
  }

  console.log(userName.value);
  console.log(userEmail.value);
  console.log(userPhone.value);

  userName.value = "";
  userEmail.value = "";
  userPhone.value = "";

  callbackResponce.classList.add("modal-active");
  setTimeout(function () {
    callbackResponce.classList.remove("modal-active");
  }, 2700);
});

function isPhoneValid(phone = "") {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

  return phone.match(regexp);
}

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
