let inputFieldId = document.getElementById("input-text");

// this is a function to generate random values from chars, sum them, and then display on input field =========================>>

function generatePassword() {
  let chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

  let passwordLength = 12;
  let password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputFieldId.value = password;
}

// this is the function to copy the password from input field ==================================================================>>

function copyPassword() {
  let copyText = document.getElementById("input-text");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}

// getting the ids of the buttons to add a click event to them ==================================================================>

let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
