'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const signCheck = function() {
  $('#sign-up').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
  });
    $('#sign-in').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      console.log(data);
    });
};



module.exports = {
  signCheck,
};
