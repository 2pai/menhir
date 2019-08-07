const wrapper = require('../../../lib/infra/wrapper');
const model = require('../user-model');
const log = require('../../../lib/infra/logger');
const Logger = new log();
const redis = require('../../../lib/cache/redis');
const {timeToSecond} = require('../../../lib/infra/util');

const userInfo = async (payload) => {
  const userInfo = model.User;
  const email = payload;
  const keyRedis = 'dataUsers:'+email;
  const data = await redis.getData(keyRedis);
  if(data){
    return wrapper.data(JSON.parse(data),'success',200);
    // eslint-disable-next-line no-else-return
  }else{
    let result = await userInfo.find({email:email});
    redis.setData(keyRedis,JSON.stringify(result),timeToSecond('1m'));
    return wrapper.data(result,'success',200);
  }
};

module.exports = {
  userInfo
};
