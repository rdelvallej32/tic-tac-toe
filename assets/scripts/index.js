'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
const authEvents = require('./auth/events.js');
const gameMove = require('./game/move.js');
//
// // use require without a reference to ensure a file is bundled
// require('./example');

$(() => {
  authEvents.signCheck();
  gameMove.playerMove();
  gameMove.clearBoard();
});
