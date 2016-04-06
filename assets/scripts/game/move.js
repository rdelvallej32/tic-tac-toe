'use strict';

const game = require('./gameplay');
const user = require('./users');

let gameBoard = ['','','','','','','','',''];
let currentPlayer = '';
let turn = 0;
let players = ['player1', 'player2'];
let playerIcon = ['X', 'O'];

//counts clicks & alternates players
  $('.available').on('click', function(){
    let currentTile = $(this);
      if (turn % 2 === 0) {
        currentPlayer = players[0];
      } else {
        currentPlayer = players[1];
      }
      console.log(turn);
  });

//changes block color on click & adds player class (x or o)



// let topRow = [$('#1').hasClass(), $('#2').hasClass(), $('#3').hasClass()];
// let middleRow = [$('#4').hasClass(), $('#5').hasClass(), $('#6').hasClass()];
// let bottomRow = [$('#7').hasClass(), $('#8').hasClass(), $('#9').hasClass()];
// let firstCol = [$('#1').hasClass(), $('#4').hasClass(), $('#7').hasClass()];
// let secondCol = [$('#2').hasClass(), $('#5').hasClass(), $('#8').hasClass()];
// let thirdCol = [$('#3').hasClass(), $('#6').hasClass(), $('#9').hasClass()];
// let leftDiag = [$('#1').hasClass(), $('#5').hasClass(), $('#9').hasClass()];
// let rightDiag = [$('#3').hasClass(), $('#5').hasClass(), $('#7').hasClass()];
//
// let winArray = [topRow,middleRow,bottomRow,firstCol,secondCol,thirdCol,leftDiag,rightDiag];
//
//
//
// const checkWin = function(element) {
//
//   for(let i = 0; i < winArray.length; i++) {
//
//     if(winArray[i][0] === token && winArray[i][1] === token && winArray[i][2] === token) {
//       console.log("who" + 'won');
//     }
//     }
// };

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

const playerMove = function() {
  $('.tile').on('click', function(){
  let currentTile = $(this);
  if (currentTile.hasClass('available')) {
    currentTile.removeClass('available').addClass('player');
  if (currentPlayer === 'player1') {
    currentTile.addClass('player1');
    $(this).text('X');
    gameBoard[$(this).attr('id')] = playerIcon[0];
      turn++;
  }else {
    currentTile.addClass('player2');
    currentTile.text('O');
    gameBoard[$(this).attr('id')] = playerIcon[1];
    console.log(gameBoard);
      turn++;
    }
  }
  if(turn >= 4) {
    for(let i = 0; i < gameBoard.length; i++) {

      game.checkWin(gameBoard[i]);
    }
  }

});
};

// const playerMove = function() {
//   $('.tile').on('click', function(event) {
//     event.preventDefault();
//     if(currentPlayer === 'X' && $(this).hasClass('available')) {
//      $(this).removeClass('available').addClass('player1');
//      $(this).text(currentPlayer);
//      gameBoard[$(this).attr('id')] = currentPlayer;
//      console.log(gameBoard);
//      currentPlayer = 'O';
//      turn+=1;
//    }
//
//      else if (currentPlayer === 'O' && $(this).hasClass('available')) {
//        $(this).removeClass('available').addClass('player2');
//        $(this).text(currentPlayer);
//        gameBoard[$(this).attr('id')] = currentPlayer;
//        console.log(gameBoard);
//        currentPlayer = 'X';
//        turn+=1;
//      }
//
//      if(turn >= 4) {
//       game.checkWin(gameBoard);
//       }
//      }
//
//    );
// };



module.exports = {
  playerMove,
  clearBoard,
};
