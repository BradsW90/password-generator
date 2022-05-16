// Assignment code here

//global variables for password generation
var numbers = "1234567890";
var lowerAlpha = "qwertyuiopasdfghjklzxcvbnm";
var upperAlpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
var specialChar = "!\"#$%&'()*+,-./;:<=>?@[]\\^_`{}|~";
//start of generator
var generatePassword = function () {
  //setup for future for loop for RNG
  var promptOne = window.prompt("Password length between 8-128 characters");
  var selectedChar = [];
  var password = "";
  //validation for correct response
  if (!promptOne) {
    window.alert("Please input a valid response.");
    generatePassword();
    //passing condition
  } else if (promptOne >= 8 && promptOne <= 128) {
    promptOne = parseInt(promptOne);
    //catch all
  } else {
    window.alert("Please input a valid response.");
    generatePassword();
  }
  //setting what characters are used
  var promptTwo = window.confirm("Do you want lowercase charaters included?");
  if (promptTwo) {
    selectedChar.push(lowerAlpha);
  }
  var promptThree = window.confirm(
    "Do you want uppercase characters included?"
  );
  if (promptThree) {
    selectedChar.push(upperAlpha);
  }
  var promptFour = window.confirm("Do you want numbers included?");
  if (promptFour) {
    selectedChar.push(numbers);
  }
  var promptFive = window.confirm("Do you want special charaters");
  if (promptFive) {
    selectedChar.push(specialChar);
  }
  // RNG using first var to set length of for loop
  for (i = 0; i <= promptOne; i++) {
    // guarentee password meets condition
    if (i < selectedChar.length) {
      password =
        password +
        selectedChar[i].charAt(
          Math.floor(Math.random() * (selectedChar[i].length - 1) + 1)
        );
      //finish generating latter part of password
    } else {
      var index = Math.floor(Math.random() * selectedChar.length - 1) + 1;
      password =
        password +
        selectedChar[index].charAt(
          Math.floor(Math.random() * (selectedChar[index].length - 1) + 1)
        );
    }
  }
  console.log(password);
  return password;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
