'use strict';

let currentPlayer = 'x';
let turn = 0;

const playerMove = function() {

  $('.tile').on('click', function(event) {
    event.preventDefault();
    if(currentPlayer === 'x' && $(this).text() !== 'O') {
     $(this).text('X').css('font-size', '30px').css('text-align', 'center');
     $(this).removeClass('player2').addClass('player1');
     currentPlayer = 'o';
     turn+=1;
   }

     else if (currentPlayer === 'o' && $(this).text() !== 'X') {
       $(this).text('O').css('font-size', '30px').css('text-align', 'center');
       $(this).removeClass('player1').addClass('player2');
       currentPlayer = 'x';
       turn+=1;
     }

   });
};



module.exports = {
  playerMove,
};
