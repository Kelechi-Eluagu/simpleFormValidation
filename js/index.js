// var onloadCallback = function() {
//       alert("grecaptcha is ready!");
//     };

function validate() {
  let errorEmail = getElementById('error-email');
  let email = getElementById('email');
  let phone = getElementById('phone');
  let firstName = getElementById('firstName');
  let lastName = getElementById('lastName');
  let message;

  if(email.indexOf('@') == -1 || email.length < 4 || email == '') {
    // message = 'This field is required';
    // errorEmail.innerHTML = message;
    // return false;
    console.log('name grabbed');

  }
}