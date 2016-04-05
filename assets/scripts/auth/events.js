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

const playerX = function() {
  $('.tile').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('X');

  });


};



module.exports = {
  signCheck,
  playerX
};
