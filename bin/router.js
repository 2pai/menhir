const api = require('./api-handler');
const Endpoints = async (app) => {

  app.post('/register',api.register);
  app.get('/user/:email', api.userInfo);
};
module.exports = Endpoints;
