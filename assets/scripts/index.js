'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
const app = require('./app-data');
const authEvents = require('./auth/events.js');
const gameMove = require('./game/move.js');
const gameLogic = require('./game/gameplay.js');
//
// // use require without a reference to ensure a file is bundled
// require('./example');

$(() => {
  authEvents.signCheck();
  authEvents.gameCheck();
  // gameMove.playerMove();
  gameMove.clearBoard();
  gameMove.clickTurn();
});
