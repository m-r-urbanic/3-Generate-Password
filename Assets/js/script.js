// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var userChoice = confirm("TEST");
  var userChoice2 = confirm("TEST 2");
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