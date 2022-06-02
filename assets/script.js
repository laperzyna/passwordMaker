// Assignment code here
var play = true;
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//This function will call the generate password function to generate the password
function writePassword() {
    //using a while loop to execute while play is true just makes for a smoother program
    while (play) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
        break;
    }  
}
//this function will display the generated password on the screen when prompted
function getPassword(result) {
    result = document.getElementById("password").textContent;
}

function generatePassword() {    
    //prompt in order to get users preferred pass length
    var pass = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    var userChoice = new Array;
    //error handling
    if (!pass || pass < 8 || pass > 128) {
        alert("Invalid number.\nplease choose between 8 and 128");
    } else if (pass >= 8 && pass <= 128) {
        var lowerChoice = confirm("Will this contain Lowercase letters?");
        var upperChoice = confirm("Will this contain Uppercase letters?");
        var numChoice = confirm("Will this contain numbers?");
        var charChoice = confirm("Will this contain special characters?");  
    }
    //checker to establish what specifications the user wants
    //originally wanted to put this in a for loop but not really sure how 
    //to do it considering there are a ton of options for user to choose
    if (numChoice && charChoice && upperChoice && lowerChoice) {
        userChoice = number.concat(character, lower, upper);
    } else if (numChoice && charChoice && lowerChoice) {
        userChoice = character.concat(number, lower);
    } else if (charChoice && numChoice && upperChoice) {
        userChoice = character.concat(number, upper);
    } else if (charChoice && upperChoice && lowerChoice) {
        userChoice = character.concat(upper, lower);
    } else if (numChoice && upperChoice && lowerChoice) {
        userChoice = number.concat(upper, lower);
    } else if (charChoice && numChoice) {
        userChoice = character.concat(number);
    } else if (charChoice && upperChoice) {
        userChoice = character.concat(upper);
    } else if (charChoice && lowerChoice) {
        userChoice = character.concat(lower);
    } else if (numChoice && upperChoice) {
        userChoice = number.concat(upper);
    } else if (numChoice && lowerChoice) {
        userChoice = number.concat(lower);
    } else if (upperChoice && lowerChoice) {
        userChoice = upper.concat(lower);
    } else if (numChoice) {
        userChoice = number;
    } else if (charChoice) {
        userChoice = character;
    } else if (upperChoice) {
        userChoice = upper;
    } else if (lowerChoice) {
        userChoice = lower;
    }
    //new array established
    let password = new Array(pass);
    //picks random and pushes selected vars into new array with user's preferred length
    for (var i = 0; i < pass; i++) {
        var pickChoices = userChoice[Math.floor(Math.random() * password.length)];
        password.push(pickChoices);
    }
    //joins the selected characters together to create a password
    var result = password.join("");
    //calls function in order to present password onto screen
    getPassword(result);
    //must return var in order to not get undef. error
    return result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);