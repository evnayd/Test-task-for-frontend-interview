"use strict";

var form = document.querySelector(".form");
var info = document.querySelector(".form-header__info");
var formBtn = document.querySelector(".form__btn");
var inputs = document.querySelectorAll(".form__input");
var radioBtns = document.querySelectorAll(".form__radio");
var percent = 0;
info.innerHTML = percent + " %";
var time = 400;
var step = 1;
var num = 0;
var t = Math.round(time / (num / step));

//check if event took place on input element and if input wasn't empty.
//if so, increase the percent of % of form fullness;

form.addEventListener("change", function (event) {
  let target = event.target;
  if (target.classList.contains("form__input") && target.value.length > 0) {
    increaseThePercentage();
  } else if (
    target.classList.contains("form__input") &&
    target.value.length == 0
  ) {
    reduceThePercentage();
  }
  return;
});

//check if event took place on radio button.
//if so, increase the percent of % of form fullness

form.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("form__radio")) {
    increaseThePercentage();
  }
  return;
});

function increaseThePercentage() {
  if (percent > 99) {
    info.innerHTML = 100 + " %";
  } else {
    var interval = setInterval(() => {
      percent = percent + step;
      if (percent === num) {
        clearInterval(interval);
      }
      info.innerHTML = percent + " %";
    }, t);
    num = num + 25;
  }
}

function reduceThePercentage() {
  if (percent < 1) {
    info.innerHTML = 0 + " %";
  } else {
    var interval = setInterval(() => {
      percent = percent - step;
      if (percent === num) {
        clearInterval(interval);
      }
      info.innerHTML = percent + " %";
    }, t);
    num = num - 25;
  }
}

//when form is 100% full

form.addEventListener("submit", function (event) {
  alert("form is send");
  event.preventDefault();
  clearTheInputs();
  clearThePercentage();
  clearTheRadioBtns();
});

//clear the form inputs

var i;

function clearTheInputs() {
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

//clear the form radio buttons

var k;

function clearTheRadioBtns() {
  for (k = 0; k < radioBtns.length; k++) {
    radioBtns[k].checked = false;
  }
}

//return the percentage to 0;

function clearThePercentage() {
  percent = 0;
  info.innerHTML = percent + " %";
}
