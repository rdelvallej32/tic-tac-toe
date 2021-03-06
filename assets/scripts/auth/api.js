'use strict';

const app = require('../app-data');
// const gameMoves = require('../game/move.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-up',
    data,

  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-in',
    data,

  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  //if(!app.user) bad;
  $.ajax({
    method: "DELETE",
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const passwordChange = (success, failure, data) => {
  //if(!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/change-password/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const gameCreate = (success, failure) => {
  //if(!app.user) bad;
  $.ajax({
    method: "POST",
    url: app.api + '/games',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const updateGame = (success, failure) => {
  // debugger;
  //if(!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": app.index,
          "value": app.value
        },
          // "over": app.game.over,
      }
    }

  })
  .done(success)
  .fail(failure);
};

  const gameData = (success, failure) => {
  console.log('Started request');
  $.ajax({
    method: 'GET',
    url: app.api + '/games/' + app.game.id,

  headers: {
    Authorization: 'Token token='+ app.user.token,
  },
})
  .done(success)
  .fail(failure);
  console.log('Request queued');

};

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange,
  gameCreate,
  updateGame,
  gameData,
  app,
};
