// Assignment code here
window.alert("Welcome to Password Generator!")

var password = '';
const characters = {
  numeric: JSON.stringify = "0123456789",
  expressions: JSON.stringify = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  letters: JSON.stringify = "abcdefghijklmnopqrstuvwxyz",
  capital: JSON.stringify = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};
// pick your poison
var chooseLexicon = function () {
  characters.expressions.confirm("Would you like to include special characters?");
  characters.numbers.confirm("Would you like to include numbers?");
  characters.letters.confirm("Would you like to include lower case letters?");
  characters.capital.confirm("Would you like to include upper case letters?");
  if (!characters.expressions && !characters.numbers && !characters.letters && !characters.capital) {
      prompt("Please accept at least one criteria")
  chooseLexicon();
  } else if (characters.expressions && characters.numbers && characters.letters && characters.capital) {
  character.concat(characters.expressions, characters.numbers, characters.letters, characters.capital);
  } else if (characters.expressions && characters.numbers && characters.letters) {
  character.concat(characters.expressions, characters.numbers, characters.letters);
  } else if (characters.expressions && characters.numbers && characters.capital) {
  character.concat(characters.expressions, characters.numbers, characters.capital);
  } else if (characters.expressions && characters.letters && characters.capital) {
  character.concat(characters.expressions, characters.letters, characters.capital);
  } else if (characters.numbers && characters.letters && characters.capital) {
  character.concat(characters.numbers, characters.letters, characters.capital);
  } else if (characters.expressions && characters.numbers) {
  character.concat(characters.expressions, characters.numbers);
  } else if (characters.expressions && characters.capital) {
  character.concat(characters.expressions, characters.capital);
  } else if (characters.expressions && characters.letters) {
  character.concat(characters.expressions, characters.letters);
  } else if (characters.numbers && characters.letters) {
  character.concat(characters.numbers, characters.letters);
  } else if (characters.numbers && characters.capital) {
  character.concat(characters.numbers, characters.capital);
  } else if (characters.letters && characters.capital) {
  character.concat(characters.letters, characters.capital);
  } else if (characters.expressions) {
  character.concat(characters.expressions);
  } else if (characters.numbers) {
  character.concat(characters.numbers);
  } else if (characters.letters) {
  character.concat(characters.letters);
  } else if (characters.capital) {
  character.concat(characters.capital);
  } return (generatePassword.charactersLength);
};

function generatePassword() {
  console.log("At least I have a message for the button click...")
  var range = function () {
        prompt("Please choose a length between 8-128 characters.");
        if (password >= 8 || password <= 128) {
            localStorage.setItem(range);
            chooseLexicon();
         } else {
    alert("The length must be a number between 8 and 128");
        range()};
         return (generatePassword);         
        };
  var charactersLength = characters.range;
  for ( var i = 0; i < range; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return ("I tried so hard and leveraged all the resources I could access within the timeframe available. Holiday travel killed me in the end.");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//add prompt for characters

// var generatePassword = function () {
//     console.log("Button clicked");
//     var range = function () {
//         prompt("Please choose a length between 8-128 characters.");
//         if (password >= 8 || password <= 128) {
//             localStorage.setItem(range);
//             chooseLexicon();
//          } else {
//     alert("The length must be a number between 8 and 128");
//         range()};
//          };
//          return (generatePassword)
// };
// generatePassword();

// //generate random number of characters
// function getRandomArbitrary(chooseLexicon) {

//   return Math.random() * (max - min) + min;
// };

//generat

// Write password to the #password input
function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate a random numeric value
// var randomNumber = function (min, max) {
//     var value = Math.floor(Math.random() * (max - min + 1) + min);
//     return value;
// };


generatePassword();