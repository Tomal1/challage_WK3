function generatePassword(){ // when I click the red button
  let inputData = parseInt(window.prompt("how many characters do you want password to be?")); //an prompt requesting an input of an integer "parseInt" which will be stored inside a variable called "inputData"

  if(isNaN(inputData)){ //if the data inputted is not a number "isNan"
    window.alert("must be an integer (whole number)"); // the following message will be displayed
    return // and due to not meeting the criteria, will be returned to to the top of the function
  } else if(inputData < 8 || inputData > 128) { // if the input is NOT an integer between 8 & 128
    window.alert ("must be an integer between 8  and 128 characters");// the following message will be displayed
    return // will be returned to to the top of the function
  }

  /*confirm is a type of alert which only takes: true(ok) or false(cancel), so 4 confirm alerts will
  appear in a series asking us to refine the password criteria.*/
  let wantsNumber = window.confirm("do you want numbers in the password?");
  let wantsSpecial = window.confirm("do you want special characters in the password?");
  let wantsLower = window.confirm("do you want lower case characters?");  
  let wantsUpper = window.confirm("do you want upper case characters?");

  let numberList = []; //an empty array stored inside "numberList" variable"
  for (let i = 0; i < 10; i++){ 
    numberList.push(i); //a for loop pushing integers into an numberList from 0-9
  }

  let specialList = ["!", "@", "#", "£", "$", "%", "^", "&", "*"]; //an array containing special characters
  let lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];//an array containing letters from a-z

  let upperList = [];// same array pushed into another variable which capitalises all letters
  for (let i = 0; i<lowerList.length; i++ ){
    upperList.push(lowerList[i].toUpperCase());
  }

  let basket = []; // an empty array which will act as a container to store all the selected criteria (truthy values) from the confirm alerts
   
  if(wantsNumber){ // when the confirm alert arises requesting numbers, if the user clicks ok (true);
    basket.push(numberList);// push all numbers from "numberList" array into the empty array "basket"
  }

  if(wantsSpecial === true){// when the confirm alert arises requesting special characters, if the user clicks ok (true);
    basket.push(specialList);// push all special characters from "specialList" array into the empty array "basket"
  }

  if(wantsLower === true){// when the confirm alert arises requesting lower case characters, if the user clicks ok (true);
    basket.push(lowerList);// push all lower case characters from "lowerList" array into the empty array "basket"
  }

  if(wantsUpper === true){// when the confirm alert arises requesting upper case characters, if the user clicks ok (true);
    basket.push(upperList);// push all upper case characters from "upperList" array into the empty array "basket"
  }

  if(basket.length === 0){//if all the confirm alerts have a false values (cancel for all of them), at leasts one character type should be selected
    basket.push(upperList); //I choose lowerList
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