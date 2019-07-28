const app = require('./bin/server');
require('dotenv').config();
const Server = new app();
const redis = require('./lib/cache/redis');
const mongo = require('./lib/db/mongo');


Server.init(process.env.PORT,() =>{
  redis.client();
  mongo.createConnection();
});
