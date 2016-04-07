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


module.exports = {
  

};
