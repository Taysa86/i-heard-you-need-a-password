// Assignment Code
var generateBtn = document.querySelector("#generate");

// strings
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

// Random math function
function getRandomArbitrary (max) {
    return Math.random() * (max);
  }

//generate password function
function generatePassword() {
  let letter = letters.charAt(0)
  console.log (letter)
  var selectedcharacters = "";
  
  if (wantlowercase) { 
    selectedcharacters = selectedcharacters.concat(letters)
    
  }
  if (wantuppercase) { 
    selectedcharacters = selectedcharacters.concat(caps)
    
  }
  if (wantnumbers) { 
    selectedcharacters = selectedcharacters.concat(numbers)
    
  }
  if (wantspecial) { 
    selectedcharacters = selectedcharacters.concat(special)
    
  }
    let index = getRandomArbitrary(selectedcharacters.length)
  console.log(selectedcharacters.charAt(index))
// Variable for loop
  var ranpass = ""
// Loop for generatepassword function
  for (var i = 0; i < wantlength; i++) {
    ranpass = ranpass + selectedcharacters[Math.floor(Math.random() * selectedcharacters.length)];
    console.log(ranpass)
  }
  return ranpass;
} 

// Write password to the #password input
function writePassword() {
  wantlength = (prompt ("Pick a length between 8 and 128 characters."));

//should place alert here incase they select a length outside of 8 & 128, will have to fix later

// Prompts for parameters
  wantlowercase = confirm("Would you like lowercase letters?");
  wantuppercase = confirm("Would you like uppercase letters?");
  wantnumbers = confirm("Would you like numbers?");
  wantspecial = confirm("would you like special characters?");
  console.log (wantlowercase,wantuppercase,wantnumbers,wantspecial)
  
  var password = generatePassword()

  ;
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  

 