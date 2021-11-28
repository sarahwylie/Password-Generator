// Assignment code here
window.alert("Welcome to Password Generator!")

function generatePassword(length) {
  var range = function () {
        prompt("Please choose a length between 8-128 characters.");
        if (password >= 8 || password <= 128) {
            localStorage.setItem(range);
            characters();
         } else {
    alert("The length must be a number between 8 and 128");
        range()};
         };
         return (generatePassword);
        };
  var password = '';
  var characters = {
    numeric: JSON.stringify = "0123456789",
    expressions: JSON.stringify = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    letters: JSON.stringify = "abcdefghijklmnopqrstuvwxyz",
    capital: JSON.stringify = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return password;
console.log(password);

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

// // pick your poison
// var chooseLexicon = function () {
//     expressions.confirm("Would you like to include special characters?");
//     numbers.confirm("Would you like to include numbers?");
//     letters.confirm("Would you like to include lower case letters?");
//     capital.confirm("Would you like to include upper case letters?");
//     if (!expressions && !numbers && !letters && !capital) {
//         prompt("Please accept at least one criteria")
//     chooseLexicon();
//     } else if (expressions && numbers && letters && capital) {
//     character.concat(expressions & numbers & letters & capital) = password.length(range);
//     } else if (expressions && numbers && letters) {
//     character.concat(expressions & numbers & letters) = password.length(range);
//     } else if (expressions && numbers && capital) {
//     character.concat(expressions & numbers & capital) = password.lenth(range);
//     } else if (expressions && letters && capital) {
//     character.concat(expressions & letters & capital) = password.lenth(range);
//     } else if (numbers && letters && capital) {
//     character.concat(numbers & letters & capital) = password.lenth(range);
//     } else if (expressions && numbers) {
//     character.concat(expressions & numbers) = password.lenth(range);
//     } else if (expressions && capital) {
//     character.concat(expressions & capital) = password.lenth(range);
//     } else if (expressions && letters) {
//     character.concat(expressions & letters) = password.lenth(range);
//     } else if (numbers && letters) {
//     character.concat(numbers & letters) = password.lenth(range);
//     } else if (numbers && capital) {
//     character.concat(numbers & capital) = password.lenth(range);
//     } else if (letters && capital) {
//     character.concat(letters & capital) = password.lenth(range);
//     } else if (expressions) {
//     character.concat(expressions) = password.lenth(range);
//     } else if (numbers) {
//     character.concat(numbers) = password.lenth(range);
//     } else if (letters) {
//     character.concat(letters) = password.lenth(range);
//     } else if (capital) {
//     character.concat(capital) = password.lenth(range);
//     } return (password);
// };

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
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

// generatePassword();