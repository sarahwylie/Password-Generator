// Assignment code here
window.alert("Welcome to Password Generator!")

var options = function() {
var expressions = function(" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~");
var numbers = function(JSON.stringify["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
var letters = function(JSON.stringify["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
var capital = function (letters.map(toUpperCase));
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
  
//add prompt for characters

var generatePassword = function() {
  console.log("Button clicked");
  var range = function() {
    prompt("Please choose a length between 8-128 characters.");
    if (password => 8 || password <= 128)
    setLocalStorage = JSON.stringify()
      chooseLexicon();
    else if (password < 8 || password > 128)
      alert("The length must be a number between 8 and 128");
      range;
};
// pick your poison
var chooseLexicon = function() {
  expressions = confirm("Would you like to include special characters?");
  numbers = confirm("Would you like to include numbers?");
  letters = confirm("Would you like to include lower case letters?");
  capital = confirm("Would you like to include upper case letters?");
    if (!expressions && !numbers && !letters && !capital)
    prompt("Please accept at least one criteria")
    chooseLexicon();
  else if (expressions && numbers && letters && capital)
  character.concat(expressions & numbers & letters & capital) = password.length(range);
else if (expressions && numbers && letters)
  character.concat(expressions & numbers & letters) = password.length(range);
else if (expressions && numbers && capital)
  character.concat(expressions & numbers & capital) = password.lenth(range);
  else if (expressions && letters && capital)

  else if (numbers && letters && capital)

  else if (expressions && numbers)

  else if (expressions && capital)

  else if (expressions && letters)
return (password);
};
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// return password();
// };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// length of at least 8 characters and no more than 128 characters
//  var range = function() {
//    window.prompt("Please choose a length between 8-128 characters.")
// //add error message if the number falls outside the range
//   for (password => 8 || password <= 128) 
//   {
//   if (password < 8 || password > 128) {
//   alert("The length must be a number between 8 and 128");
// }
//  }};
// range();

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

generatePassword();