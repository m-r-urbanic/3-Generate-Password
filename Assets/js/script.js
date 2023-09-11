// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // True/False box selectors that will allow the user to select if they want a certain criteria for their password or not
  var choiceLowercase = confirm("If you want to require lowercase characters, click 'Ok', if not, click 'Cancel'.");
  var choiceUpercase = confirm("If you want to require uppercase characters, click 'Ok', if not, click 'Cancel'.");
  var choiceNumeric = confirm("If you want to require numeric characters, click 'Ok', if not, click 'Cancel'.");
  var choiceSpecialCharater = confirm("If you want to require special characters, click 'Ok', if not, click 'Cancel'.");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Lowercase
// Uppercase
// Numeric
// Special Characters