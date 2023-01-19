// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Define a function called generatePassword()
  function generatePassword(){
    
    // Prompt 1: Ask the length of password
    let passwordLength = window.prompt("How many characters do you want in your password?\nChoose between 8 and 128.");

    // Prompt 1-1: In case the chosen length is invalid (non-number or invalid number is input)
    let minOK = (passwordLength >= 8)
    let maxOK = (passwordLength <= 128)

    if (minOK == false || maxOK == false){
      window.alert("⚠︎ Invalid input was detected.\nPlease start over and choose a length of between 8 and 128");
      return "Click 'Generate Password' again to start over.";
    }
    
    // Prompt 2: Ask which type of characters should be included/excluded & validate user's selection
    let includeLower = window.confirm("Do you want to include lowercase letters (a, b, c, etc.)?\nClick 'OK' for Yes and 'Cancel' for No.");
    if (includeLower) {
      window.alert("✅ Lowercase letters will be used for your new password.");
    } else {
      window.alert("❌ Lowercase letters won't be used for your new password.");
    }

    let includeUpper = window.confirm("Do you want to include uppercase letters (A, B, C, etc.)?\nClick 'OK' for Yes and 'Cancel' for No.");
    if (includeUpper) {
      window.alert("✅ Uppercase letters will be used for your new password.");
    } else {
      window.alert("❌ Uppercase letters won't be used for your new password.");
    }

    let includeNumber = window.confirm("Do you want to include numbers (0, 1, 2, etc.)?\nClick 'OK' for Yes and 'Cancel' for No.");
    if (includeNumber) {
      window.alert("✅ Numbers will be used for your new password.");
    } else {
      window.alert("❌ Numbers won't be used for your new password.");
    }
    
    let includeSpecial = window.confirm("Do you want to include special characters (!, $, ?, etc.)?\nClick 'OK' for Yes and 'Cancel' for No.");
    if (includeSpecial) {
      window.alert("✅ Special characters will be used for your new password.");
    } else {
      window.alert("❌ Special characters won't be used for your new password.");
    }

    let includeTrueFalse = [includeLower, includeUpper, includeNumber, includeSpecial];
    let includeYesNo =[];

    for (let i = 0; i < includeTrueFalse.length; i++){
      if (includeTrueFalse[i]) {
        includeYesNo.push("✅");
      } else {
        includeYesNo.push("❌");
      }
    }

    // Prompt 3: Confirmation of the selection of the character types
    let confirmation;

    // Prompt 3-1: In case user selected at least 1 type of characters
    if (includeLower || (includeUpper || (includeNumber || includeSpecial))) {
      confirmation = window.confirm("You have selected the following criteria. Are you okay with them?\n✅ = Selected\n❌ = Not selected\n----------------------------------------\nNumber of characters: " + passwordLength +
      "\nLowercase letters: " + includeYesNo[0] +
      "\nUppercase letters: " + includeYesNo[1] +
      "\nNumbers: " + includeYesNo[2] +
      "\nSpecial characters: " + includeYesNo[3] +
      "\n----------------------------------------"
      );
    } else {
      // Prompt 3-2: In case user selected none of them
      window.alert("⚠︎ No type of characters was selected.\nPlease start over and choose at least one type of characters.");
      return "Click 'Generate Password' again to start over.";
    }

    // Prompt 3-3: In case user wants to select criteria again
    if (confirmation == false) {
      window.alert("⚠︎ If you wish to select criteria again, please start over!");
      return "Click 'Generate Password' again to start over.";
    }
  
    // Step 4: Generate random password
    // Step 4-1: Create lists of each type of characters
    let lowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    let upperList = [];
    for (let j = 0; j < lowerList.length; j++) {
      // console.log(j + ":" + lowerList[j]);
      upperList.push(lowerList[j].toUpperCase());
    }
    
    let numberList = [];
    for (let k = 0; k < 10; k++) {
      numberList.push(k.toString());
    }
    
    let specialList = [" ", "!", '"', "#", "$", "%", "$", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

    // console.log(lowerList);
    // console.log(upperList);
    // console.log(numberList);
    // console.log(specialList);

    // Step 4-2: Create a list of characters whose types were selected by user

    let listOfLists= [lowerList, upperList, numberList, specialList]; 
    let selectedTypeList = [];
    
    for (let l = 0; l < listOfLists.length; l++) {
      if (includeTrueFalse[l]) {
        selectedTypeList = selectedTypeList.concat(listOfLists[l]);
        // console.log(l + " : " + includeYesNo[l] + " : " + randomList);
      }
    }

    // Step 4-3: Randomly choose characters from the list created in Step 4-2
    let createdPassword = "";
    let m = 0;

    while (m < passwordLength){
      let randomIndex = Math.floor(Math.random() * selectedTypeList.length);
      let newLetter = selectedTypeList[randomIndex];
      createdPassword = createdPassword + newLetter;
      // console.log(m + "," + randomIndex + "," + newLetter + "," + createdPassword);
      m++;
    }

    // Step 5: Indicate the new password in alarm window and return the value as a result of the function so that it can be shown in the box as well
    window.alert("Your new password (length = " + passwordLength + ") is shown below:\n----------------------------------------\n" + createdPassword + "\n----------------------------------------\n✅This password will be shown in the box below as well after clicking OK here.");

    return createdPassword;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
