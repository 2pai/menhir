const wrapper = require('../../../lib/infra/wrapper');
const model = require('../user-model');
const log = require('../../../lib/infra/logger');
const Logger = new log();
const redis = require('../../../lib/cache/redis');
const {timeToSecond} = require('../../../lib/infra/util');

const register = async (payload) => {
  const body = payload;
  const registerUser = new model.User({
    email: body.email,
    fullName: body.fullName,
    password: body.password,
    penName: body.penName,
    birthDate:new Date(body.birthDate),
    created: Date.now()
  });
  try {
    const fetchData = await registerUser.save();
    return wrapper.data(fetchData,'List User',200);
  } catch (err) {
    return wrapper.error(err,err.errmsg,500);
  }
};


module.exports = {
  register
};
