// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // True/False box selectors that will allow the user to select if they want a certain criteria for their password or not
  var choiceLowercase = confirm("TEST");
  var choiceUpercase = confirm("TEST 2");
  var choiceNumeric = confirm("TEST");
  var choiceSpecialCharater = confirm("TEST");
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