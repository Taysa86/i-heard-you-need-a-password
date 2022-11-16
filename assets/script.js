// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()";

 // Variables
  var wantlowercase;
  var wantuppercase; 
  var wantnumbers ;
  var wantspecial ;
  var wantlength = "";

// Write password to the #password input
 function writePassword() {
  var wantlength = (prompt ("Pick a length between 8 and 128 characters."));

// Prompts for parameters
 var wantlowercase = comfirm("Would you like lowercase letters?");
 var wantuppercase = confirm("Would you like uppercase letters?");
 var wantnumbers = confirm("Would you like Uppercase letters?");
 var wantspecial = confirm("would you like special characters?");
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  

 /*let  password = "" {
  if (password.numbers) {
    
  } else {
    
  } (password) {
    
  }
  
    
  }; */

 //--reference code: trying to reverse engineer code to fix 
 /*
 var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
  password = generatePassword();
document.getElementById("display").value = password;
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
 */