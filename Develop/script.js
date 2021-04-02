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

var Password = {
  "length":  129,
  "upperCase": [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"],
  "lowerCase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"],
  "numeric": ["1", "2", "3", "4", "5", "6", "7", "8", "9"] ,
  "specialChar": ["!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")"]  
};

console.log(Password) 
// to check if object successfully created

// length >= 8 characters && length <= 129 characters 
// character types: uppercase, lowercase, numeric, special characters 
// input variable that loops through answers to prompts so at least 1 of each char type is selected


// result variable should be called to display selected input
// password can be displayed as an alert as well 


// Random Number Generator 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
