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
  const choices = [];

  if (isLowerCase) {
    choices.push(lowercase);
  }
  if (isUpperCase) {
    choices.push(uppercase);
  }
  if (isNumbers) {
    choices.push(numbers);
  }
  if (isSpecials) {
    choices.push(specials);
  }

  let password = "";
  // generate random password
  for (let i = 0; i < 10; i++) {
    // get random choice index
    const randomChoiceIndex = Math.floor(Math.random() * choices.length);
    // get random characters
    const randomCharacters = choices[randomChoiceIndex];
    password += randomCharacters.charAt(
      Math.floor(Math.random() * randomCharacters.length)
    );
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
