// Assignment code here
var passInputVerify;
var lowercaseVerify;
var uppercaseVerify;
var numVerify;
var specCharVerify;

// Array assignment for password content
var passCharUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var passCharLwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passSym = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Get password requirements
var passDetail = function () {
  var passLength = prompt('how many characters long would you like your password to be?  Must be between 8 and 128!');
  alert("Please confirm any character types to include");
  var lowercase = confirm("Lowercase Characters? 'OK' for Yes 'Cancel' for No");
  var uppercase = confirm("Uppsercase characters? 'OK' for Yes 'Cancel' for No");
  var nums = confirm("Numbers? 'OK' for Yes 'Cancel' for No");
  var specChars = confirm("Special Characters? 'OK' for Yes 'Cancel' for No");


  if (passLength === '' || isNaN(passLength) || passLength === null) {
    alert("Please enter a number!")
    generatePassword();
  }
  else {
    var convertPassPrompt = Number(passLength);
    if (convertPassPrompt < 7 || convertPassPrompt > 128) {
      alert("please enter a number betwee 8 & 128!")
      generatePassword();
    } else {
      passInput = convertPassPrompt;
    }
  }
  passInputVerify = passInput;
  lowercaseVerify = lowercase;
  uppercaseVerify = uppercase;
  numVerify = nums;
  specCharVerify = specChars;
}

// generate password 
var generatePassword = function () {
  let chars = '';
  if (uppercaseVerify) {
    chars = passCharUpper.join('');
  }
  if (lowercaseVerify) {
    chars = chars.concat(passCharLwr.join(''));
  }
  if (numVerify) {
    chars = chars.concat(passNum.join(''));
  }
  if (specCharVerify) {
    chars = chars.concat(passSym.join(''));
  }
  if (!uppercaseVerify && !lowercaseVerify && !numVerify && !specCharVerify) {
    alert("Please apply one password type!");
    writePassword();
  } else {
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < passInputVerify; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }
}


// Write password to the #password input
function writePassword() {
  passDetail();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //console.log(password);
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
