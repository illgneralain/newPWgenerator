// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password Variable 

// Prompt Variables of:
// length >= 8 characters && length <= 129 characters 
// character types: uppercase, lowercase, special characters 
// input variable that loops through answers to prompts so at least 1 of each char type is selected
// result variable should be called to display selected input
// password can be displayed as an alert as well 


// Random Number Generator 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
