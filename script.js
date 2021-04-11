// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Password Variable 

// 1ST ATTEMPT


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "*", "(", ")"];  
var allChar = upperCase + lowerCase + numeric + specialChar;
var thirdOpt = upperCase + lowerCase + numeric;
var secondOpt = upperCase + lowerCase;
var fourthOpt = lowerCase + numeric + specialChar;
var choices; 
var newPass = "";
// Prompt Variables of:

// 3rd ATTEMPT

function generatePassword() {
  
  var Lengthinput = prompt("Choose a number from 8-129");
  passLength = parseInt(Lengthinput);
  if ((passLength > 7) && (passLength < 129)) {
    alert("Got it!")
    console.log(passLength);
  } else {
    alert("Invalid!")
    generatePassword();
   };

  
  var UpperCaseinput = confirm("Would you like to add a UpperCase?");

  var LowerCaseinput = confirm("Would you like to add a LowerCase?");
  
  var Numericinput = confirm("Would you like to add numbers?");
  
  var SpecialCharinput = confirm("Would you like to add a Special Character?");

 
  if (!UpperCaseinput && !LowerCaseinput && !Numericinput && !SpecialCharinput) {
    alert("You need to include something!");
  }
   else if (UpperCaseinput && LowerCaseinput && Numericinput && SpecialCharinput) {
     choices = upperCase.concat(lowerCase, numeric, specialChar);
     console.log(choices)
   }
   else if (UpperCaseinput && LowerCaseinput && Numericinput) {
    choices = upperCase.concat(lowerCase, numeric);
   }

   else if (LowerCaseinput && Numericinput && SpecialCharinput &&!UpperCaseinput) {
     choices = lowerCase.concat(Numericinput, specialChar);
   }
   else if (UpperCaseinput && Numericinput && SpecialCharinput &&!LowerCaseinput) {
     choices = upperCase.concat(numeric, specialChar);
   }

   else if (UpperCaseinput && LowerCaseinput && SpecialCharinput && !Numericinput) {
     choices = upperCase.concat(lowerCase, specialChar);
   }
   else if (UpperCaseinput && LowerCaseinput && !SpecialCharinput && !Numericinput) {
     choices = upperCase.concat(lowerCase);
   }

   else if (UpperCaseinput && Numericinput &&!LowerCaseinput && !SpecialCharinput) {
     choices = upperCase.concat(numeric);
   }
   else if (UpperCaseinput && SpecialCharinput && !LowerCaseinput && !Numericinput) {
     choices = upperCase.concat(specialChar);
   }

   else if (Lowercaseinput && Numericinput &&!UpperCaseinput &&!SpecialCharinput) {
    choices = lowerCase.concat(numeric);
  }
  else if (Lowercaseinput && SpecialCharinput &&!UpperCaseinput && !Numericinput) {
    choices = lowerCase.concat(specialChar);
  }

  else if (Numericinput && SpecialCharinput &&!LowerCaseinput &&!UpperCaseinput) {
    choices = numeric.concat(specialChar);
  }
  else if (UpperCaseinput) {
    choices = upperCase;
  }

  else if (LowerCaseinput) {
    choices = lowerCase;
  }
  else if (SpecialCharinput) {
    choices = specialChar;
  }

  else if (Numericinput) {
    choices = numeric;
  };

  console.log(choices);

  // For Loop Go Through Array of Prompts

  for (var i = 0; i < passLength; i++){
    var fullPass = choices[Math.floor(Math.random() * choices.length)];
    newPass += fullPass;
  }
  console.log(newPass);
  return newPass;
  };

generatePassword();








// Maybe Useful later
// Lengthinput.array = Lengthinput.value;
// var fullPass = allChar[Math.floor(Math.random() * passLength)];
// 2nd Attempt
// var questions = {
//   "questions": [
//     "Choose a length from 8 to 129",
//     "Would you like to include uppercase?",
//     "Would you like to include lowercase?",
//     "Would you like to include numbers?",
//     "Would you like to include special characters?"
//   ]
// };

// 2nd Attempt
// var requirements = 
// prompt("Choose a number from 8-129") 
// prompt("Would you like to add an UpperCase?").toUpperCase()
// prompt("CWould you like to add an LowerCase?").toLowerCase()
// prompt("Would you like to add numbers?")
// prompt("Would you like to add a Special Character?");




// console.log(Passwordelements) 
// to check if object successfully created

// length >= 8 characters && length <= 129 characters 
// character types: uppercase, lowercase, numeric, special characters 
// input variable that loops through answers to prompts so at least 1 of each char type is selected

// 1st ATTEMPT
// var Lengthinput = prompt("Choose a number from 8-129")
// var UpperCaseinput = prompt("Would you like to add an UpperCase?").toUpperCase();
// var LowerCaseinput = prompt("CWould you like to add an LowerCase?").toLowerCase();
// var Numericinput = prompt("Would you like to add numbers?")
// var SpecialCharinput = prompt("Would you like to add a Special Character?")

// result variable should be called to display selected input


// password can be displayed as an alert as well 

// Generate password function 



// Random Number Generator 

// var ranPick = Math.floor(Math.random() * length) + 1;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
