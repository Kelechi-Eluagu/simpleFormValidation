// var onloadCallback = function() {
//       alert("grecaptcha is ready!");
//     };

function validate() {
  // let email = document.getElementById('email').value;
  // let phone = document.getElementById('phone').value;
  let firstName = document.getElementById('firstName').value;
  // let lastName = document.getElementById('lastName').value;
  // let errorEmail = document.getElementById('error-email');
  // let errorEmail = document.getElementById('error-email');
  let errorFirst = document.getElementById('error-first');
  let message;

  if(firstName === '' || firstName.length < 4) {
    message = 'This field is required';
    errorFirst.innerHTML = message; 
    return false;
  }

  // if(email.indexOf('@') == -1 || email.length < 4 || email == '') {
  //   message = 'This field is required';
  //   errorEmail.innerHTML = message;
  //   return false;
  //   console.log('name grabbed');
  // }
  alert('Form Submitted Successfully');

  return true;
}