'use strict';

const app = require('../app-data');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
  console.log(data);
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
};
