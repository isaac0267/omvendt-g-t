"use strict";

// Corrected variable names and usage of 'let' for mutable values
const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again"); // Corrected class name
const btnCheckEl = document.querySelector(".btn_check"); // Corrected class name
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_number");
const scEl = document.querySelector(".score");
const highSCEl = document.querySelector(".high_score");

// Initialization of game values
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// Correct display of the secret number for debugging
console.log(secretNumber);

// Correction for 'value' and use of 'let' to update values
btnCheckEl.addEventListener("click", () => {
  const guess = Number(inputNumEl.value); // Corrected to 'value'
  if (!guess) {
    msgEl.textContent = "No number!"; // Use this or define displayMessage function
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      msgEl.textContent = guess > secretNumber ? "Too high" : "Too low";
      scEl.textContent = score;
    } else {
      msgEl.textContent = "Du har tabt!"; // Use this or define displayMessage function
      scEl.textContent = 0;
    }
  } else {
    msgEl.textContent = "korrekt nummer!"; // Use this or define displayMessage function
    containerEl.style.backgroundColor = "#60b347";
    hideNumEl.textContent = secretNumber;
  }
});

btnPlayEl.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  msgEl.textContent = "Start guessing..."; // Use this or define displayMessage function
  scEl.textContent = score;
  hideNumEl.textContent = "?";
  inputNumEl.value = "";
  containerEl.style.backgroundColor = "#222";
});
