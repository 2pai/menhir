const winston = require("winston");
const Sentry = require('winston-sentry-raven-transport');

require('dotenv').config();

class Logger{
    constructor(){
        this.options = {
            dsn: process.env.DSN_SENTRY
        }
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
                winston.format.json()
            ),    
            defaultMeta: { service: process.env.SERVICE_NAME },
            transports: [
                new winston.transports.Console({
                    handleExceptions: true,
                    json: true
                })
            ]
          });
        if(process.env.STAGE !== "DEV") this.logger.add(new Sentry(this.options));
    }
    info(msg,context){
        this.logger.info(msg,context)
    }
    warn(msg,context){
        this.logger.warn(msg,context)
    }
    error(msg,context){
        this.logger.error(msg,context)
    }
}
module.exports = Logger;