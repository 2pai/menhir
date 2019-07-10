const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const log = require('../lib/infra/logger');
const router = require('./router');
const logger = new log();

class Server{
    constructor(){
        this.app = new express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        router(this.app);
    }
    init(port) {
       this.app.listen(port,() => {
        logger.info(`app listening on port ${port}!`,{"ctx":"app-init"});
    });
    }
}

module.exports = Server;