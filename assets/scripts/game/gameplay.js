'use strict';

const game = require('./gameplay');

let topRow = [$('#tile1').text(), $('#tile2').text(), $('#tile3').text()];
let middleRow = [$('#tile4').text(), $('#tile5').text(), $('#tile6').text()];
let bottomRow = [$('#tile7').text(), $('#tile8').text(), $('#tile9').text()];
let firstCol = [$('#tile1').text(), $('#tile4').text(), $('#tile7').text()];
let secondCol = [$('#tile2').text(), $('#tile5').text(), $('#tile8').text()];
let thirdCol = [$('#tile3').text(), $('#tile6').text(), $('#tile9').text()];
let leftDiag = [$('#tile1').text(), $('#tile5').text(), $('#tile9').text()];
let rightDiag = [$('#tile3').text(), $('#tile5').text(), $('#tile7').text()];

let winArray = [topRow,middleRow,bottomRow,firstCol,secondCol,thirdCol,leftDiag,rightDiag];



const checkWin = function(token) {
  for(let i = 0; i < winArray.length; i++) {
    if(winArray[i][0] === token && winArray[i][1] === token && winArray[i][2] === token) {
      console.log(token + 'won');
    }
    }
};




module.exports = {
  checkWin,

};
