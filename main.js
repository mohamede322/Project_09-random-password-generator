let resultEl = document.getElementById("result");
let lengthEl = document.getElementById("length");
let symbolsEl = document.getElementById("symbol");
let numbersEl = document.getElementById("numbers");
let lowerCase = document.getElementById("lowercase");
let upperCase = document.getElementById("uppercase");
let generateBtn = document.getElementById("getpw-btn");
let CopyBtn = document.getElementById("copy-btn");

function getUpperChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getLowerChar() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getSymbol() {
  let symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function check() {
  let passwordArr = [];

  if (symbolsEl.checked) {
    passwordArr.push(getSymbol());
  }
  if (numbersEl.checked) {
    passwordArr.push(getNumber());
  }
  if (lowerCase.checked) {
    passwordArr.push(getLowerChar());
  }
  if (upperCase.checked) {
    passwordArr.push(getUpperChar());
  }

  return passwordArr[Math.floor(Math.random() * passwordArr.length)];
}

function generatePassword() {
  let length = lengthEl.value;
  let password = "";

  for (i = 0; i < length; i++) {
    let pCheck = check();
    password += pCheck;
    if (pCheck === undefined) {
      password = "";
    }
  }
  resultEl.value = password;
}

function CopyPassword() {
  const textarea = document.createElement("textarea");
  const password = resultEl.value;

  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();

  alert("Password Copied");
}

generateBtn.addEventListener("click", generatePassword);
CopyBtn.addEventListener("click", CopyPassword);
