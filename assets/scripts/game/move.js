'use strict';

const game = require('./gameplay');
const user = require('./users');

let gameBoard = [];
let currentPlayer = 'X';
let turn = 0;

const clearBoard = function() {
  $('.newGame').find('#eraseBoard').on('click', function() {
    $('.tile').each(function() {
      $(this).text('');
    });
    $('.tile').each(function() {
      $(this).removeClass('player1').removeClass('player2').addClass('available');
    });
  });
};

const playerMove = function() {
  $('.tile').on('click', function(event) {
    event.preventDefault();
    if(currentPlayer === 'X' && $(this).hasClass('available')) {
     $(this).removeClass('available').addClass('player1');
     $(this).text(currentPlayer);
     currentPlayer = 'O';
     turn+=1;
   }

     else if (currentPlayer === 'O' && $(this).hasClass('available')) {
       $(this).removeClass('available').addClass('player2');
       $(this).text(currentPlayer);
       currentPlayer = 'X';
       turn+=1;
     }

     if(turn >= 4) {
       let testArray = game.winArray;
       for(let i = 0; i < testArray.length; i++) {
        testArray[i].every(game.checkWin);
       }
     }

   });
};



module.exports = {
  playerMove,
  clearBoard,
};
