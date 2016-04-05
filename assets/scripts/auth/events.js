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
      authApi.signIn(authUi.success, authUi.failure, data);
    });
    $('#sign-out').on('submit', function(event){
      event.preventDefault();
      authApi.signOut(authUi.success, authUi.failure);
    });
};

module.exports = {
  signCheck,
};
