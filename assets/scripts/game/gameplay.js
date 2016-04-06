'use strict';

const game = require('./gameplay');

const getBoard = function() {
let topRow = [$('#1').val(), $('#2').val(), $('#3').val()];
let middleRow = [$('#4').val(), $('#5').val(), $('#6').val()];
let bottomRow = [$('#7').val(), $('#8').val(), $('#9').val()];
let firstCol = [$('#1').val(), $('#4').val(), $('#7').val()];
let secondCol = [$('#2').val(), $('#5').val(), $('#8').val()];
let thirdCol = [$('#3').val(), $('#6').val(), $('#9').val()];
let leftDiag = [$('#1').val(), $('#5').val(), $('#9').val()];
let rightDiag = [$('#3').val(), $('#5').val(), $('#7').val()];

};

let gameBoard = game.gameBoard;

const checkWin = function(playerIcon) {
  debugger;
      if (playerIcon === gameBoard[0] && playerIcon === gameBoard[1] && playerIcon === gameBoard[2] ||
          playerIcon === gameBoard[3] && playerIcon === gameBoard[4] && playerIcon === gameBoard[5] ||
          playerIcon === gameBoard[6] && playerIcon === gameBoard[7] && playerIcon === gameBoard[8] ||
          playerIcon === gameBoard[0] && playerIcon === gameBoard[3] && playerIcon === gameBoard[6] ||
          playerIcon === gameBoard[1] && playerIcon === gameBoard[4] && playerIcon === gameBoard[7] ||
          playerIcon === gameBoard[2] && playerIcon === gameBoard[5] && playerIcon === gameBoard[8] ||
          playerIcon === gameBoard[0] && playerIcon === gameBoard[4] && playerIcon === gameBoard[8] ||
          playerIcon === gameBoard[2] && playerIcon === gameBoard[4] && playerIcon === gameBoard[6]){
        }
      console.log("You win " + 'player');
      };

      // const checkWin = function(player) {
      //       if (player === gameBoard[0] && player === gameBoard[1] && player === gameBoard[2] ||
      //           player === gameBoard[3] && player === gameBoard[4] && player === gameBoard[5] ||
      //           player === gameBoard[6] && player === gameBoard[7] && player === gameBoard[8] ||
      //           player === gameBoard[0] && player === gameBoard[3] && player === gameBoard[6] ||
      //           player === gameBoard[1] && player === gameBoard[4] && player === gameBoard[7] ||
      //           player === gameBoard[2] && player === gameBoard[5] && player === gameBoard[8] ||
      //           player === gameBoard[0] && player === gameBoard[4] && player === gameBoard[8] ||
      //           player === gameBoard[2] && player === gameBoard[4] && player === gameBoard[6]){
      //         }
      //       console.log("You win " + player);
      //       };


      // const checkWinx = function(playerIcon) {
      //       if (playerIcon === gameBoard[0] && playerIcon === gameBoard[1] && playerIcon === gameBoard[2] ||
      //           playerIcon === gameBoard[3] && playerIcon === gameBoard[4] && playerIcon === gameBoard[5] ||
      //           playerIcon === gameBoard[6] && playerIcon === gameBoard[7] && playerIcon === gameBoard[8] ||
      //           playerIcon === gameBoard[0] && playerIcon === gameBoard[3] && playerIcon === gameBoard[6] ||
      //           playerIcon === gameBoard[1] && playerIcon === gameBoard[4] && playerIcon === gameBoard[7] ||
      //           playerIcon === gameBoard[2] && playerIcon === gameBoard[5] && playerIcon === gameBoard[8] ||
      //           playerIcon === gameBoard[0] && playerIcon === gameBoard[4] && playerIcon === gameBoard[8] ||
      //           playerIcon === gameBoard[2] && playerIcon === gameBoard[4] && playerIcon === gameBoard[6]){
      //         }
      //       console.log("You win " + 'player');
      //       };


module.exports = {
  checkWin,
  getBoard,

};
