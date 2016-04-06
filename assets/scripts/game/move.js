'use strict';

const game = require('./gameplay');
const user = require('./users');

let gameBoard = [];
let currentPlayer = 'x';
let turn = 0;

const clearBoard = function() {
  $('.newGame').find('#eraseBoard').on('click', function() {
    $('.tile').each(function() {
      $(this).text('');
    });
  });
};

const playerMove = function() {
  $('.tile').on('click', function(event) {
    event.preventDefault();
    if(currentPlayer === 'x' && $(this).hasClass('available')) {
     $(this).removeClass('available').addClass('player1');
     $(this).text('X').css('font-size', '50px').css('text-align', 'center');
     currentPlayer = 'o';
     turn+=1;
   }

     else if (currentPlayer === 'o' && $(this).hasClass('available')) {
       $(this).removeClass('available').addClass('player2');
       $(this).text('O').css('font-size', '50px').css('text-align', 'center');
       currentPlayer = 'x';
       turn+=1;
     }

     if(turn >= 4) {
       for(let i = 0; i < game.winArray; i++) {
        game.winArray[i].every(game.checkWin);
          console.log();
       }
     }

   });
};



module.exports = {
  playerMove,
  clearBoard,
};
