'use strict';

const game = require('./gameplay');
const user = require('./users');

let gameBoard = ['','','','','','','','',''];
let currentPlayer = '';
let turn = 0;
let playerIcon = ['X', 'O'];

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

        console.log(currentPlayer + " wins!");
        win = true;
          $('.tile').off('click');
      }

    };

    const checkTie = function(gameboard) {
      if(turn >= 9) {
        console.log("It's a tie! Start a new Game");
      }

    };

const playerMove = function() {
  $('.tile').one('click', function(){
    if(turn % 2 === 0) {
      currentPlayer = playerIcon[0];
      $(this).removeClass('available').addClass('player1');
    }
    else {
      currentPlayer = playerIcon[1];
      $(this).addClass('player2');
    }
    turn++;
    let currentTile = $(this);
      currentTile.text(currentPlayer); ///what is this doing?
      $(this).data('gameBoard', currentPlayer); ///what is happening
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
