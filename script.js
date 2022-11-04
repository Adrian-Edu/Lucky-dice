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

let scoreP1 = 0;
let scoreP2 = 0;

// cand dam click sa apara zarul
selectDice.addEventListener('click', function () {
  zar.classList.remove('hidden');
});

// asa schimbam imaginea
function myFunction(image) {
  zar.src = image;
}

// count score
function countScore(number) {
  if (playerActive1.classList.contains('player--active')) {
    currentScore1.textContent = scoreP1 += number;
  } else if (playerActive2.classList.contains('player--active')) {
    currentScore2.textContent = scoreP2 += number;
  }
}

// dam cu zarul

function rollDice() {
  const generateNumber = Math.trunc(Math.random() * 6) + 1;
  countScore(generateNumber);
  if (generateNumber === 1) {
    myFunction('dice-1.png');
    switchPlayersOne();
  } else if (generateNumber === 2) {
    myFunction('dice-2.png');
  } else if (generateNumber === 3) {
    myFunction('dice-3.png');
  } else if (generateNumber === 4) {
    myFunction('dice-4.png');
  } else if (generateNumber === 5) {
    myFunction('dice-5.png');
  } else if (generateNumber === 6) {
    myFunction('dice-6.png');
  }
}

// cand dam click pe zar generam un numar random si schimbam imaginea
selectDice.addEventListener('click', rollDice);

// schimba jucatorul
function switchPlayers() {
  if (playerActive1.classList.contains('player--active')) {
    playerActive2.classList.add('player--active');
    playerActive1.classList.remove('player--active');
    scorePlayer1.textContent = currentScore1.textContent;
  } else {
    playerActive2.classList.remove('player--active');
    playerActive1.classList.add('player--active');
    scorePlayer2.textContent = currentScore2.textContent;
  }
}

// schimba jucatorul cand da jarul 1
function switchPlayersOne() {
  if (playerActive1.classList.contains('player--active')) {
    playerActive2.classList.add('player--active');
    playerActive1.classList.remove('player--active');
    scorePlayer1.textContent = 0;
    currentScore1.textContent = 0;
  } else {
    playerActive2.classList.remove('player--active');
    playerActive1.classList.add('player--active');
    scorePlayer2.textContent = 0;
    currentScore2.textContent = 0;
  }
}

// cand dam click pe hold schimbam jucatorii
changePlayer.addEventListener('click', switchPlayers);

//cand dam click pe new game zarul dispare
newGame.addEventListener('click', function () {
  zar.classList.add('hidden');
  scorePlayer1.textContent = 0;
  currentScore1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScore2.textContent = 0;
});
