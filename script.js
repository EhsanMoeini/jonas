'use strict';

let card_1 = document.querySelector(".window-1-a");
let card_2 = document.querySelector(".window-2-a");
let btn_1 = document.querySelector(".window-1-b");
let txt_1 = document.querySelector(".window-1-p");
let btn_2 = document.querySelector(".window-2-b");
let input_2 = document.querySelector(".window-2-i");
let eror = document.querySelector(".eror");

btn_1.addEventListener("click", function () {
  card_1.style.display = "none";
  card_2.style.display = "flex";
});
btn_2.addEventListener("click", function () {
  let numbers = input_2.value;
  if (numbers === "") {
    eror.style.display = "inline";
    setTimeout(function () {
      eror.style.display = "none";
    }, 1500);
  } else {
    let arrNum = numbers.split("").reduce(function (acc, i) {
      return (acc += +i);
    }, 0);
    card_1.style.display = "flex";
    card_2.style.display = "none";
    txt_1.textContent = arrNum;
    btn_1.textContent = "again";
    input_2.value = "";
  }
});

