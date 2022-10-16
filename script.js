function generatePassword(){ // when I click the red button
  let inputData = parseInt(window.prompt("how many characters do you want password to be?")); //an prompt requesting an input of an integer "parseInt" which will be stored inside a variable called "inputData"

  if(isNaN(inputData)){ //if the data inputted is not a number "isNan"
    window.alert("must be an integer (whole number)"); // the following message will be displayed
    return // and due to not meeting the criteria, will be returned to to the top of the function
  } else if(inputData < 8 || inputData > 128) { // if the input is NOT an integer between 8 & 128
    window.alert ("must be an integer between 8  and 128 characters");// the following message will be displayed
    return // will be returned to to the top of the function
  }



}

  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);