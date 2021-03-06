'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');


const signCheck = function() {
  $('#sign-up').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signUp(authUi.success, authUi.failure, data);
  });
    $('#sign-in').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      console.log(data);
      authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    });
    $('#sign-in-two').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      console.log(data);
      authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    });
    $('#sign-out').on('submit', function(event){
      event.preventDefault();
      authApi.signOut(authUi.signOutSuccess, authUi.failure);
    });
    $('#change-password').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(this);
      authApi.passwordChange(authUi.success, authUi.failure, data);
    });

      $('.gameInfo').on('submit', function (event) {
        event.preventDefault();
        authApi.gameData(authUi.getDataSuccess, authUi.failure);
      });
};

  const gameCheck = function() {
    $('#eraseBoard').on('click', function(event){
      event.preventDefault(); ///what data do I put here for user?
      authApi.gameCreate(authUi.createGameSuccess, authUi.failure);
  });






};

module.exports = {
  signCheck,
  gameCheck,
};
