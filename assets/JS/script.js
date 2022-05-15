// Assignment code here

//RNG function
var rng = function (arg) {};

//global variables for password generation
var numbers = "1234567890";
var lowerAlpha = "qwertyuiopasdfghjklzxcvbnm";
var upperAlpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
var specialChar = "!\"#$%&'()*+,-./;:<=>?@[]\\^_`{}|~";
//start of generator
var generatePassword = function () {
  //setup for switch statement
  var char = "0";
  //setup for future for loop for RNG
  var promptOne = window.prompt("Password length between 8-128 characters");
  //validation for correct response
  if (!promptOne) {
    window.alert("Please input a valid response.");
    generatePassword();
  } else if (promptOne >= 8 && promptOne <= 128) {
  } else {
    window.alert("Please input a valid response.");
    generatePassword();
  }
  //setting what characters are used
  var promptTwo = window.confirm("Do you want lowercase charaters included?");
  if (promptTwo) {
    char = char + "1";
  } else {
    char = char + "0";
  }
  var promptThree = window.confirm(
    "Do you want uppercase characters included?"
  );
  if (promptThree) {
    char = char + "1";
  } else {
    char = char + "0";
  }
  var promptFour = window.confirm("Do you want numbers included?");
  if (promptFour) {
    char = char + "1";
  } else {
    char = char + "0";
  }
  var promptFive = window.confirm("Do you want special charaters");
  if (promptFive) {
    char = char + "1";
  } else {
    char = char + "0";
  }

  switch (char) {
  }
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
