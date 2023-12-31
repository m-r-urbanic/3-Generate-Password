// declare variables
var generateBtn = document.querySelector("#generate");
var choiceLowercase ;
var choiceUppercase;
var choiceNumeric;
var choiceSpecialCharacter;
var passwordLength;
var lowercaseCharacter;
var uppercaseCharacter;
var numericCharacter;
var specialCharacter;


lowercaseCharacter = 'abcdefghijklmnopqrstuvwxyz';
uppercaseCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
numericCharacter = '1234567890';
specialCharacter = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// create array that password will be stored in as it is generated
var passwordArray = [];
// create array of variable types
var validationTypes = [];

// Write password to the #password input
function writePassword() {

  // True/False box selectors that will allow the user to select if they want a certain criteria for their password or not
  // Note: binary confirmation box chosen because it reduces the amount of potential inputs, and reduces the question to a simple 'yes/no' with no oppertunity for errors.
  // Made prompts into a function so that they can be called again if the user does not select at least one set of criteria
  function passwordPrompts(){
    window.alert("Please choose if your password should require lowercase, uppercase, numeric, or special characters. Your password should require at least one type. If you do not select a type these options will replay.");
    choiceLowercase = confirm("If you want to require lowercase characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceLowercase)
      validationTypes.push(lowercaseCharacter);
    choiceUppercase = confirm("If you want to require uppercase characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceUppercase)
      validationTypes.push(uppercaseCharacter);
    choiceNumeric = confirm("If you want to require numeric characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceNumeric)
      validationTypes.push(numericCharacter);
    choiceSpecialCharacter = confirm("If you want to require special characters, click 'Ok', if not, click 'Cancel'.");
      if (choiceSpecialCharacter)
      validationTypes.push(specialCharacter);
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

  // Call results
  promptResult(); 

  // make the password based on the selected parameters
  function makePassword(){
      
      // create function that gets random type
      function getRandomCharacterType(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
      }

      // select random varaible and display in console
      let randomVariableSelect = getRandomCharacterType(Object.values(validationTypes));
  

      // generate a random character based on the selected character type
      const generateRandomString = (length) => {
        let result = '';
        const charactersLength = randomVariableSelect.length;
        for (let i = 0; i < length; i++) {
          result += randomVariableSelect.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };

      passwordArray.push(generateRandomString(1));
  }
  // loop through selecting a random character from a random character type for the number of characters selected
  for (var i = 0; i < passwordLength; i++) {
    makePassword();
  }

  //turn make password array into string
  password = passwordArray.join('');
  // clear password array to make sure that there is a new password, not just a password appended onto the old one
  passwordArray = [];


  var passwordText = document.querySelector("#password");

  // Set contents of the password textbox equal to password variable
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);