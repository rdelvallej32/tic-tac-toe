'use strict';

const app = require('../app-data');
const api = require('../auth/api');
const ui = require('../auth/ui');

let gameBoard = ['','','','','','','','',''];
let currentPlayer = '';
let turn = 0;
let playerIcon = ['X', 'O'];
let win = false;

  const checkWin = function(gameBoard) {
        if (currentPlayer === gameBoard[0] && currentPlayer === gameBoard[1] && currentPlayer === gameBoard[2] ||
            currentPlayer === gameBoard[3] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[5] ||
            currentPlayer === gameBoard[6] && currentPlayer === gameBoard[7] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[0] && currentPlayer === gameBoard[3] && currentPlayer === gameBoard[6] ||
            currentPlayer === gameBoard[1] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[7] ||
            currentPlayer === gameBoard[2] && currentPlayer === gameBoard[5] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[0] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[8] ||
            currentPlayer === gameBoard[2] && currentPlayer === gameBoard[4] && currentPlayer === gameBoard[6]){

        console.log("Player " + currentPlayer + " wins!");
        win = true;
        debugger;
        if(win){
          debugger;
          $('.available').removeClass('available');
        }
          // $('.tile').off('click');
      }

    };

    const checkTie = function() {
        if(turn >=9 && win === false) {
          console.log('Tie game! Start a new game');
        }

    };

const playerMove = function(self) {
      // debugger;
      // $('.tile').on('click', function(){
      //   if(turn % 2 === 0) {
      //     currentPlayer = playerIcon[0];
      //     $(this).removeClass('available').addClass('player1');
      //   }
      //   else {
      //     currentPlayer = playerIcon[1];
      //     $(this).removeClass('available').addClass('player2');
      //   }
      //   turn++;
      let currentTile = $(self);
        // let currentTile = $(this);
          currentTile.text(currentPlayer);
          // debugger;
          $(this).data('gameBoard', currentPlayer);
          let attrId = $(self).attr('id');
          gameBoard[attrId] = currentPlayer;
          console.log(gameBoard[attrId]);
          console.log(attrId);
          console.log(gameBoard);
          currentTile.text(currentPlayer);
          app.index = $(self).attr('id');
          app.value = currentPlayer;
          // console.log(api.updateGame(ui.success, ui.failure));
          api.updateGame(ui.success, ui.failure); ///I'm calling the function here
          checkWin(gameBoard);
          checkTie(gameBoard);


      };

const clickTurn = function() {
  $('.tile').on('click', function(){
    // debugger;
    if(turn % 2 === 0) {
      currentPlayer = playerIcon[0];
      $(this).removeClass('available').addClass('player1');
    }
    else {
      currentPlayer = playerIcon[1];
      $(this).removeClass('available').addClass('player2');
    }
    turn++;
    let self = this;
      playerMove(self);
    });
};


  const clearBoard = function() {
    $('.newGame').find('#eraseBoard').on('click', function() {
      $('.tile').addClass('available');
      $('.tile').each(function() {
        $(this).text('');
        gameBoard = ['','','','','','','','',''];
        win = false;
        turn = 0;
      });
      $('.tile').each(function() {
        $(this).removeClass('player1').addClass('available');
        $(this).removeClass('player2').addClass('available');
      });
      $(this).removeAttr('id');
    });
  };


module.exports = {
  playerMove,
  clearBoard,
  clickTurn,
};
