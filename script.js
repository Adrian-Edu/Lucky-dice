'use strict';

const playerActive1 = document.querySelector('.player--0');
const playerActive2 = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
const zar = document.querySelector('.dice');
const selectDice = document.querySelector('.btn--roll');
const changePlayer = document.querySelector('.btn--hold');
const currentScore1 = document.querySelector('#current--0');
const currentScore2 = document.querySelector('#current--1');
const scorePlayer1 = document.querySelector('#score--0');
const scorePlayer2 = document.querySelector('#score--1');
const player1 = document.querySelector('#name--0');
const player2 = document.querySelector('#name--1');
const buttonOpenModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');

let scoreP1 = 0;
let scoreP2 = 0;

selectDice.addEventListener('click', function () {
  zar.classList.remove('hidden');
});

function changeDiceImage(image) {
  zar.src = image;
}

function countCurrentScore(number) {
  if (playerActive1.classList.contains('player--active')) {
    currentScore1.textContent = scoreP1 += number;
  } else {
    currentScore2.textContent = scoreP2 += number;
  }
}

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  countCurrentScore(dice);
  if (dice === 1) {
    changeDiceImage('dice-1.png');
    switchPlayersOne();
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
  } else {
    changeDiceImage(`dice-${dice}.png`);
  }
}

selectDice.addEventListener('click', rollDice);

function switchPlayers() {
  if (playerActive1.classList.contains('player--active')) {
    playerActive2.classList.add('player--active');
    playerActive1.classList.remove('player--active');
    scorePlayer1.textContent =
      Number(scorePlayer1.textContent) + Number(currentScore1.textContent);
    if (scorePlayer1.textContent > 100) {
      playerActive1.classList.add('player--winner');
      player1.classList.add('player--winner.name');
      selectDice.disabled = true;
      changePlayer.disabled = true;
    }
    currentScore1.textContent = 0;
    scoreP1 = 0;
  } else {
    playerActive2.classList.remove('player--active');
    playerActive1.classList.add('player--active');
    scorePlayer2.textContent =
      Number(scorePlayer2.textContent) + Number(currentScore2.textContent);
    if (scorePlayer2.textContent > 100) {
      playerActive2.classList.add('player--winner') &&
        player2.classList.add('player--winner.name');
      selectDice.disabled = true;
      changePlayer.disabled = true;
    }
    currentScore2.textContent = 0;
    scoreP2 = 0;
  }
}

function switchPlayersOne() {
  if (playerActive1.classList.contains('player--active')) {
    playerActive2.classList.add('player--active');
    playerActive1.classList.remove('player--active');
    currentScore1.textContent = 0;
    scoreP1 = 0;
  } else {
    playerActive2.classList.remove('player--active');
    playerActive1.classList.add('player--active');
    currentScore2.textContent = 0;
    scoreP2 = 0;
  }
}

changePlayer.addEventListener('click', switchPlayers);

newGame.addEventListener('click', function () {
  zar.classList.add('hidden');
  scorePlayer1.textContent = 0;
  currentScore1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScore2.textContent = 0;
  playerActive1.classList.remove('player--winner');
  playerActive2.classList.remove('player--winner');
  scoreP1 = 0;
  scoreP2 = 0;
  selectDice.disabled = false;
  changePlayer.disabled = false;
});

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonOpenModal.length; i++) {
  buttonOpenModal[i].addEventListener('click', openModal);
  buttonCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
