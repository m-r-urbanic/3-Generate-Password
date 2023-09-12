// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  // True/False box selectors that will allow the user to select if they want a certain criteria for their password or not
  // Note: binary confirmation box chosen because it reduces the amount of potential inputs, and reduces the question to a simple 'yes/no' with no oppertunity for errors.
  // Made prompts into a function so that they can be called again if the user does not select at least one set of criteria
  function passwordPrompts(){
    var choiceLowercase = confirm("If you want to require lowercase characters, click 'Ok', if not, click 'Cancel'.");
    var choiceUppercase = confirm("If you want to require uppercase characters, click 'Ok', if not, click 'Cancel'.");
    var choiceNumeric = confirm("If you want to require numeric characters, click 'Ok', if not, click 'Cancel'.");
    var choiceSpecialCharater = confirm("If you want to require special characters, click 'Ok', if not, click 'Cancel'.");
  }

  // Call function
  passwordPrompts();

  function promptResult(){
  if (choiceLowercase == true)
  {
    window.alert("sometext");
  }
  else
  {
    window.alert("boo");
  }
  }

  promptResult();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  /* if (choiceLowercase == true) {
    window.alert("sometext");
  }
  else {

  };
  if (choiceUppercase == true) {
    window.alert("sometext");
  }
  else {

  };
  if (choiceNumeric == true) {
    window.alert("sometext");
  }
  else {

  };
  if (choiceSpecialCharacter == true) {
    window.alert("sometext");
  }
  else {

  }; */
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Lowercase
// Uppercase
// Numeric
// Special Characters