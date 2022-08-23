"use strict";

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
document.querySelector(".dice").classList.add("hidden");

// WORKING ON 

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (playing) {
    let secretNumber = Math.trunc(Math.random() * 6) + 1;
    currentScore = currentScore + secretNumber;
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
    document.querySelector(".dice").classList.remove("hidden");
    document.querySelector(".dice").src = `dice-${secretNumber}.png`;
    if (secretNumber !== 1) {
      // we shoud write some thing
    } else {
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;

      document.querySelector(`.player--0`).classList.toggle("player--active");
      document.querySelector(`.player--1`).classList.toggle("player--active");
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (playing) {
    score[activePlayer] = score[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document.querySelector(".dice").classList.add("hidden");
    }

    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--0`).classList.toggle("player--active");
    document.querySelector(`.player--1`).classList.toggle("player--active");
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  playing = true;
  currentScore = 0;
  score = [0, 0];
  activePlayer = 0;

  document.querySelector("#current--0").textContent = 0;
  document.querySelector("#current--1").textContent = 0;
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;

  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");

  document.querySelector(".player--0").classList.add("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
});
