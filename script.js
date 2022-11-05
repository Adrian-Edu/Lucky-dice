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
function changeDiceImage(image) {
  zar.src = image;
}

// count score
function countCurrentScore(number) {
  if (playerActive1.classList.contains('player--active')) {
    currentScore1.textContent = scoreP1 += number;
    scoreP1 > 60
      ? console.log('Player 1 Wins')
      : console.log('Continue playing');
  } else if (playerActive2.classList.contains('player--active')) {
    currentScore2.textContent = scoreP2 += number;
    scoreP2 > 60
      ? console.log('Player 2 Wins')
      : console.log('Continue playing');
  }
}

// dam cu zarul

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;
  countCurrentScore(dice);
  if (dice === 1) {
    changeDiceImage('dice-1.png');
    switchPlayersOnDiceOne();
    // scorePlayer1.textContent = scoreP1 += number;
    // scorePlayer2.textContent = scoreP2 += number;
    currentScore1.textContent = 0;
    currentScore2.textContent = 0;
  } else if (dice === 2) {
    changeDiceImage('dice-2.png');
  } else if (dice === 3) {
    changeDiceImage('dice-3.png');
  } else if (dice === 4) {
    changeDiceImage('dice-4.png');
  } else if (dice === 5) {
    changeDiceImage('dice-5.png');
  } else if (dice === 6) {
    changeDiceImage('dice-6.png');
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
    // console.log('player 2');
    currentScore1.textContent = 0;
    scoreP1 = 0;
  } else {
    playerActive2.classList.remove('player--active');
    playerActive1.classList.add('player--active');
    scorePlayer2.textContent = currentScore2.textContent;
    //   console.log('player 1');
    currentScore.textContent = 0;
    scoreP2 = 0;
  }
}

// schimba jucatorul cand da jarul 1
function switchPlayersOnDiceOne() {
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

// cand dam click pe hold schimbam jucatorii
changePlayer.addEventListener('click', switchPlayers);

//cand dam click pe new game zarul dispare
newGame.addEventListener('click', function () {
  zar.classList.add('hidden');
  scorePlayer1.textContent = 0;
  currentScore1.textContent = 0;
  scorePlayer2.textContent = 0;
  currentScore2.textContent = 0;
  scoreP1 = 0;
  scoreP2 = 0;
});
