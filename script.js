// Assignment code here
window.alert("Welcome to Password Generator!")

var characters = {
  nums: "0123456789",
  expressions: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
  letters: "abcdefghijklmnopqrstuvwxyz",
  capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

var promptFunction = function () {

  var length = prompt("Please choose a length between 8-128 characters.");
  if (length < 8 || length > 128) {
    // localStorage.setItem(length);
    alert("The length must be a number between 8 and 128")
    return null;
  };

  var special = confirm("Would you like to include special characters?");
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters?");
  var nums = confirm("Would you like to include numbers?");

  if (!special && !lowerCase && !upperCase && !nums) {
    alert("Please accept at least one criteria")
    return null;
  }
  var options = {
    length: length,
    special: special,
    lowerCase: lowerCase,
    upperCase: upperCase,
    nums: nums
  }
  return options;
};

function generatePassword() {

  var possibilities = promptFunction();
  var password = '';
  var futureChars = '';
  if (possibilities.special) {
    futureChars = futureChars + characters.expressions
  }
  if (possibilities.lowerCase) {
    futureChars = futureChars + characters.letters
  }
  if (possibilities.upperCase) {
    futureChars = futureChars + characters.capital
  }
  if (possibilities.nums) {
    futureChars = futureChars + characters.nums
  }
  for (var i = 0; i < possibilities.length; i++) {
    password += futureChars.charAt(randomNumber(0, futureChars.length));
  }
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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