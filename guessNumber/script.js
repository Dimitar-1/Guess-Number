"use strict";
let guessNumber = Math.trunc(Math.random() * 20 + 1);
let counter = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    let guess = Number(document.querySelector(".guess").value);
    let message = document.querySelector(".message");

    if (!guess) {
        message.textContent = "⛔ No number!";
    } else if (guess === guessNumber) {
        message.textContent = "🎉 Correct number!";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = guessNumber;

        if (counter > highscore) {
            highscore = counter;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else {
        if (guess < guessNumber) {
            message.textContent = "📉 Too low!";
        } else {
            message.textContent = "📈 Too high!";
        }

        counter--;
        if (counter > -1) {
            document.querySelector(".score").textContent = counter;
        } else {
            message.textContent = "💥 You lose the game!";
            counter = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    guessNumber = Math.trunc(Math.random() * 20 + 1);
    counter = 20;

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
});

const btnToShowModal = document.querySelector(".show-modal");
const btnToCloseModal = document.querySelector(".close");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnToShowModal.addEventListener("click", showModal);
btnToCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
