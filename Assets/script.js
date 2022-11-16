// Assign code and add event listener to button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword)

// Write generated password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Define character groups
var groups = [
  'abcdefghijklmnopqrstuvwxyz',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  '1234567890',
  '\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~',
]

// Create prompts to gather desired information from user about password 
function getInputs() {
  while (true) {
      var passwordLength = prompt('Password legnth? (Password MUST be between 8 and 128 characters)');
      if (passwordLength >= 8 && passwordLength <= 128) break;
      alert('Password MUST be between 8 and 128 characters');
  }
  while (true) {
      var hasGroup = ["uppercase", "lowercase", "numeric", "special"].map(group => {
          return confirm('Will password contain ' + group + ' characters?')
      });
      if (hasGroup.includes(true)) break;
      alert('ERROR: At least one character type must be selected');
  }
  return [passwordLength, ...hasGroup];
}

// pick a character value from array
function randomFrom(arrayLike) {
  return arrayLike[Math.floor(Math.random() * arrayLike.length)];
}

// Shuffle the character values
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
}

//  Use user inputs to create a random password and display it in the text area
function generatePassword() {
  var [passwordLength, ...hasGroup] = getInputs();
  var password = groups.filter((group, i) => hasGroup[i]).flatMap(s => [...s]);
  var needed = groups.map((group, i) => hasGroup[i] ? randomFrom(group) : "").filter(Boolean);
  shuffle(password);
  password.splice(passwordLength - needed.length, Infinity, ...needed);
  shuffle(password);
  return password.join("");
}