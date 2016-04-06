'use strict';

const game = require('./gameplay');

let topRow = [$('#tile1'), $('#tile2'), $('#tile3')];
let middleRow = [$('#tile4'), $('#tile5'), $('#tile6')];
let bottomRow = [$('#tile7'), $('#tile8'), $('#tile9')];
let firstCol = [$('#tile1'), $('#tile4'), $('#tile7')];
let secondCol = [$('#tile2'), $('#tile5'), $('#tile8')];
let thirdCol = [$('#tile3'), $('#tile6'), $('#tile9')];
let leftDiag = [$('#tile1'), $('#tile5'), $('#tile9')];
let rightDiag = [$('#tile3'), $('#tile5'), $('#tile7')];




const checkWin = function(winArray) {
  for(let i = 0; i < winArray.length; i++) {


  }

};




module.exports = {
  checkWin,

};
