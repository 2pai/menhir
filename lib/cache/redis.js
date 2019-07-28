const redis = require('redis');
const asyncRedis = require('async-redis');

const client = async () => {
  return asyncRedis.decorate(redis.createClient({
    url:process.env.REDISURL
    // retry_strategy: function(options) {
    //     if (options.error) {
    //       if (options.error.code === 'ECONNREFUSED') {
    //         // End reconnecting on a specific error
    //         // and flush all commands with a individual errors
    //         return new Error('The server refused the connection');
    //       }
    //       if (options.error.code === 'ECONNRESET') {
    //         return new Error('The server reset the connection');
    //       }
    //       if (options.error.code === 'ETIMEDOUT') {
    //         return new Error('The server timeouted the connection');
    //       }
    //     }
    //     if (options.total_retry_time > 1000 * 60 * 60) {
    //       // End reconnecting after a specific timeout and flush all commands
    //       // with a individual error
    //       logger.error('Retry time exhausted');
    //       return new Error('Retry time exhausted');
    //     }
    //     if (options.attempt > 10) {
    //       // End reconnecting with built in error
    //       logger.error('Retry attempt exceed');
    //       return undefined;
    //     }
    //     // reconnect after
    //     return Math.min(options.attempt * 100, 3000);
    //   }
  }));
};

const getData = async (key) => {
  let client = await client();
  client.on('error',(err) => {
    return err;
  });
};

module.exports = {
  client,
  getData
};
