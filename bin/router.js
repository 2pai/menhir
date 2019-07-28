const wrapper = require('../lib/infra/wrapper');
const service = require('./service/user');
const Endpoints = (app) => {

  app.get('/user',(req,res) => wrapper.response(res,'This Is User',200));
  app.get('/',service.login);
  app.post('/register',service.register);
  app.get('/users', service.users);
  app.get('/user/:email', service.user);
};
module.exports = Endpoints;
