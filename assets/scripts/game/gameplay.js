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

let winArray = [topRow,middleRow,bottomRow,firstCol,secondCol,thirdCol,leftDiag,rightDiag];



const checkWin = function(token) {
  for(let i = 0; i < winArray.length; i++) {

    if(token === winArray[i][0] && token === winArray[i][1] && token === winArray[i][2]) {
      console.log(token);
      return token; 
    }

  }

};




module.exports = {
  checkWin,

};
