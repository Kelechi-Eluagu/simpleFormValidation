// var onloadCallback = function() {
//       alert("grecaptcha is ready!");
//     };

const form = document.getElementById("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();
});

function validate() {
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();

  if (firstNameValue === "" || firstName.length < 4) {
    //show error
    //add error class
    setErrorFor(firstName, "First Name field is required");
  } else {
    //add success class
    setSuccessFor(firstName);
  }

  if (lastNameValue === "" || lastName.length < 4) {
    //show error
    //add error class
    setErrorFor(lastName, "Larst Name field is required");
  } else {
    //add success class
    setSuccessFor(lastName);
  }

  if (emailValue.indexOf("@") == -1 || email.length < 4 || email == "") {
    //show error
    //add error class
    setErrorFor(email, "Email field is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    //add success class
    setSuccessFor(email);
  }

  if (phoneValue === "" || phone.length !== 11) {
    //show error
    //add error class
    setErrorFor(phone, "Phone field is required, not less than 11 characters");
  } else if (!number(phoneValue)) {
    setErrorFor(phone, "Email is not valid");
  } else {
    //add success class
    setSuccessFor(pass);
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement; //.form-group
  const errorBlock = formGroup.querySelector("small");

  //add error message inside p tag
  errorBlock.innerText = message;

  //add error class
  formGroup.className = "error-block";
}
