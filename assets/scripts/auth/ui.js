'use strict';

const app = require('../app-data');

const signInSuccess = (data) => {
  app.user = data.user;
  $('#eraseBoard').click();
  console.log(app);
};

const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
  console.log(data);
};

const createGameSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  console.log(app);
  console.log(data);
  console.log('Nice, you are starting a new game!');
};

const updateGameSuccess = (data) => {
  console.log(data);
  app.gameID = data.game.id;
  console.log(app);
  console.log(data);
  console.log('Nice, you updated the game!');
};

const getDataSuccess = (data) => {
  app.game = data.game;
  $('.gameInfo').text(data.game);
  console.log(app);
};


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  updateGameSuccess,
  getDataSuccess,
  app,
};
