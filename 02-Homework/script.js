// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {

  const lowercase = "abcdefghijklmnopqrstuvwxyxz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()?/;:~";


  const passwordLength = Number(prompt("Enter password length (10-132):"));

  if (passwordLength < 10 || passwordLength > 132) {
    alert("Please choose a different length?");
    return passwordLength;
  } else (passwordLength >= 10 || passwordLength <= 132) {
  }


  const isLowerCase = confirm("Do you want to add a lowercase?");
  const isUpperCase = confirm("Do you want to add a uppercase?");
  const isNumbers = confirm("Do you want to add a number?");
  const isSpecials = confirm("Do you want to add a special character?");

  if (!isLowerCase && !isUpperCase && !isNumbers && !isSpecials) {
    alert("please choose at least one option");
    return;
  }
}


var confirm; (lowercase)
var confirm; (uppercase)
var confirm; (number)
var confirm; (special)

if (if all is false) {
  alert and break

} else {
  return criteria
}

const (uppercase) "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const (lowercase) "abcdefghijklmnopqrstuvwxyz"
const (number) "0123456789"
const (special) " !#$%&'()\*+,-./:;<=>?@[\]^\_`{|}~ "

function getrandomcharacter () {

  Array; "uppercase"
  Array; "lowercase"
  Array; "number"
  Array; "special"
  Array; "password collection"
  
  var lowercase = "password collection"
  var uppercase = "password collection"
  var number = "password collection"
  var special = "password collection"
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
