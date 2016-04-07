'use strict';

const game = require('./gameplay');
const user = require('./users');

let gameBoard = ['','','','','','','','',''];
let currentPlayer = '';
let turn = 0;
// let players = ['player1', 'player2'];
let playerIcon = ['X', 'O'];

// //counts clicks & alternates players
//   $('.board').one('click', function(){
//       if (turn % 2 === 0) {
//         currentPlayer = players[0];
//       } else {
//         currentPlayer = players[1];
//       }
//       console.log(turn);
//   });

  const checkWin = function(gameBoard) {
    let win = false;
        if (currentPlayer === gameBoard[0] && currentPlayer === gameBoard[1] && currentPlayer === gameBoard[2] ||
            currentPlayer === gameBoard[3] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[5] ||
            currentPlayer === gameBoard[6] && currentPlayer === gameBoard[7] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[0] && currentPlayer === gameBoard[3] && currentPlayer === gameBoard[6] ||
            currentPlayer === gameBoard[1] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[7] ||
            currentPlayer === gameBoard[2] && currentPlayer === gameBoard[5] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[0] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[2] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[6]){

        console.log("You win " + 'player');
        win = true;
          $('.tile').off('click');
      }

    };

    const checkTie = function() {

        if(turn >=9 ) {
          console.log('Tie game! Start a new game');
        }

    };

const playerMove = function() {
  $('.tile').one('click', function(){
    if(turn % 2 === 0) {
      currentPlayer = playerIcon[0];
    }
    else {
      currentPlayer = playerIcon[1];
    }
    turn++;
    let currentTile = $(this);
      console.log(currentPlayer);
      console.log(turn);
      currentTile.text(currentPlayer);
      $(this).data('gameBoard', currentPlayer);
      let attrId = $(this).attr('id');
      gameBoard[attrId] = currentPlayer;
      // console.log(currentTile.attr('id'));
      // console.log(currentTile.attr('class'));
      console.log(gameBoard);
      currentTile.text(currentPlayer);
      checkWin(gameBoard);
      checkTie(gameBoard);
    });
  };

  const clearBoard = function() {
    $('.newGame').find('#eraseBoard').on('click', function() {
        turn = 0;
        let attrId = $(this).attr('id');
        gameBoard[attrId] = '';
      $('.tile').each(function() {
        $(this).text('');
      });
      $('.tile').each(function() {
        $(this).removeClass('player1').removeClass('player2').addClass('available');
      });
      $(this).removeAttr('id');
    });
  };



module.exports = {
  playerMove,
  clearBoard,
};
