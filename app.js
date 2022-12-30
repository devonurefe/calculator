let button = document.querySelectorAll("button");
console.log(button);
let input = document.querySelector(".mainInput");
let calculate = document.querySelector(".equal");
let del = document.querySelector(".all-clear");
let err = document.querySelector(".error");
let errText = document.querySelector("#errText");
let ex = document.querySelector("#ex");

for (let i = 0; i < 17; i++) {
  if (i != 0 && i != 16) {
    button[i].addEventListener("click", print);
  }
}
console.log(input.value);
function print(e) {
  e.preventDefault();
  input.value = input.value + this.value;
}

err.style.display = "none";

calculate.addEventListener("click", calc);
function calc() {
  input.value = eval(input.value);
}
ex.addEventListener("click", erase);
function erase() {
  err.style.display = "none";
}

del.addEventListener("click", deleter);
function deleter() {
  input.value = "";
  err.style.display = "none";
}
