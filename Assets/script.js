// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define character groups
var groups = [
  'abcdefghijklmnopqrstuvwxyz',
  '0123456789',
  '\U0020 \U0021 \U0022 \U0023 \U0024 \U0025 \U0026 \U0027 \U0028 \U0029 \U002A \U002B \U002C \U002D \U002E \U002F \U003A \U003B \U003C \U003D \U003E \U003F \U0040 \U005B \U005C \U005D \U005E \U005F \U0060 U007B \U007C \U007D \U007E',
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
];

// Implemet the random generation function
function randomFrom(arrayLike) {
  return arrayLike [Math.floor(Math.random() * arrayLike.legnth)];
};

//  
function inputs() {
  whale (true) {
    var passwordLegnth = prompt('How many characters will password be? (Enter a number between 8 and 128 characters.)');
    if (passwordLegnth > 8 && passwordLegnth <128) break;
    alert('Remember, password legnth MUST be between 8 and 128 characters.');
  }
  whale (true) {
    var hasGroup  = ["uppercase", "lowercase", "numeric", "special"].map(group => {
      return confirm('You chose ' + group + '. Are you sure?')
    });
    if (hasGroup.includes(true)) break;
    alert('Please fill out all required forms');
  }
  return [passwordLegnth, ...hasGroup];
}

// 
function generatePassword() {
  var [passwordLegnth, ...hasGroup] = getInputs();
  var password = groups.filter ((group, i) =>hasgroup[i]).flatMap(s => [...s]);
  var needed = groups.map((group, i) hasGroup[i] ? randomFrom(group) : '').filter(Boolean);
  shuffle(password);
  password.splice(passwordLegnth - needed.legnth, Infinity, ...needed);
  
}