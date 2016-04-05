'use strict';

let currentPlayer = 'x';
let turn = 0;

const playerMove = function() {

  $('.tile').on('click', function(event) {
    event.preventDefault();
    if(currentPlayer === 'x') {
     $(this).text('X').css('font-size', '30px').css('text-align', 'center');
     currentPlayer = 'o';
     turn+=1;
   }

     else {
       $(this).text('O').css('font-size', '30px').css('text-align', 'center');
       currentPlayer = 'x';
       turn+=1;
     }

   });
};



module.exports = {
  playerMove,
};
