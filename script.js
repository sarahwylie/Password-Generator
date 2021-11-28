// Assignment code here
window.alert("Welcome to Password Generator!")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 
  
//add prompt for characters

var generatePassword = function() {
  var range = function() {
    window.prompt("Please choose a length between 8-128 characters.");
    if (password => 8 || password <= 128)
      writePassword();
    else if (password < 8 || password > 128)
      alert("The length must be a number between 8 and 128");
      range();
  }
// characters
var characters = function() {
  prompt("Would you like to include special characters?")
  if ("Yes")

}
return password();
};
generatePassword();

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