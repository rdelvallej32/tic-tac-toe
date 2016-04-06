'use strict';

const game = require('./gameplay');

let gameBoard = [$('#tile1'),$('#tile2'),$('#tile3'),$('#tile4'),$('#tile5'),$('#tile6'),
$('#tile7'),$('#tile8'),$('#tile9')];

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
    if(currentPlayer === 'x' && $(this).text() !== 'O') {
     $(this).text('X').css('font-size', '50px').css('text-align', 'center');
     $(this).removeClass('player2').addClass('player1');
     currentPlayer = 'o';
     turn+=1;
   }

     else if (currentPlayer === 'o' && $(this).text() !== 'X') {
       $(this).text('O').css('font-size', '50px').css('text-align', 'center');
       $(this).removeClass('player1').addClass('player2');
       currentPlayer = 'x';
       turn+=1;
     }

     if(turn > 4) {
       for (var i = 0; i < gameBoard.length; i++) {

         game.checkWin(gameBoard);

       }

   }

   });
};



module.exports = {
  playerMove,
  clearBoard,
};
