const app = require('./bin/server');
require('dotenv').config();
const Server = new app();
Server.init(process.env.PORT);