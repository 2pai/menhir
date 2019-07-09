const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const log = require('../lib/infra/logger');
const logger = new log();

class Server{
    constructor(){
        this.app = new express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
    }
    init(port) {
       this.app.listen(port,() => {
        logger.info("App-init",`app listening on port ${port}!`);
    });
    }
}

module.exports = Server;