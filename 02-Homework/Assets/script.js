//Declaring Arrays
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "w",
  "y",
  "z",
];

const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "W",
  "Y",
  "Z",
];

const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "]",
  "[",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const userCriteria = finalCriteria();

  //Main Array
  const choicesArray = getChoices(userCriteria);

  //Final password
  const password = [];

  //Loop
  for (let index = 0; index < userCriteria.length; index++) {
    //pick a random character from the main array
    let randomCharacter =
      choicesArray[Math.floor(Math.random() * choicesArray.length)];

    //Push the character to the password array
    password.push(randomCharacter);
  }

  return password.join("");
}
