// Assignment Code
var generateBtn = document.querySelector("#generate");
var choiceLowercase ;
var choiceUppercase;
var choiceNumeric;
var choiceSpecialCharacter;
var passwordLength;
var lowercaseCharacter = '1';
var uppercaseCharacter = '2';
var numericCharacter = '3';
var specialCharacter = '4';

// create array of variable types
const validationTypes = [lowercaseCharacter, uppercaseCharacter, numericCharacter, specialCharacter];

// create function that gets random type
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// select random varaible and display in console
let randomValidation = getRandom(Object.values(validationTypes));
console.log('Random validation type', randomValidation);

// empty array
const testy = [];

// Write password to the #password input
function writePassword() {

  // True/False box selectors that will allow the user to select if they want a certain criteria for their password or not
  // Note: binary confirmation box chosen because it reduces the amount of potential inputs, and reduces the question to a simple 'yes/no' with no oppertunity for errors.
  // Made prompts into a function so that they can be called again if the user does not select at least one set of criteria
  function passwordPrompts(){
    window.alert("Please choose if your password should require lowercase, uppercase, numeric, or special characters. Your password should require at least one type. If you do not select a type these options will replay.");
    choiceLowercase = confirm("If you want to require lowercase characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceLowercase)
      testy.push("1");
    choiceUppercase = confirm("If you want to require uppercase characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceUppercase)
      testy.push("2");
    choiceNumeric = confirm("If you want to require numeric characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceNumeric)
      testy.push("3");
    choiceSpecialCharacter = confirm("If you want to require special characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceSpecialCharacter)
      testy.push("4");
  }

  // Call password type prompts
  passwordPrompts();

  // Create function that has a password length prompt
  function getPasswordLength(){
    passwordLength = window.prompt("Please select a password length between 8 and 128 characters.");
  }

  // Create a function that will loop infinitely until an answer that fits the parameter length request is entered
  function varifyLength(){
    getPasswordLength();
    if (passwordLength >= 8 && passwordLength <= 128){
      window.alert("Thank you!")
    }
    else {
      varifyLength();
    }
  }

  // Validate that the user chose at least one prompt type. Check if each variable is true, and if not, re-display the prompts until at least one validation type is chosen.
  function promptResult(){
  if (choiceLowercase || choiceUppercase || choiceNumeric || choiceSpecialCharacter)
  {
    varifyLength();
  }
  else
  {
    window.alert("You did not select a validation type. Please try again.");
    passwordPrompts();
  }
  }

  console.log('Test array', testy);

  // Call results
  promptResult();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Set contents of the password textbox equal to password variable
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);