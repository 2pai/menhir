const apiModel = require('./api-model');
const query = require('./service/query/user');
const command = require('./service/command/user');
const wrapper = require('../lib/infra/wrapper');
const { validatePayload } = require('../lib/infra/util');
const log = require('../lib/infra/logger');
const Logger = new log();


const register = async (req,res) => {
  let data;
  const payload = req.body;
  const validate = await validatePayload(payload,apiModel.register);
  if(validate){
    data = await command.register(payload);
  }else{
    data = validate;
  }
  const sendResponse = async(result)=>{
    (result.err)?wrapper.response(res, 'fail',result)
      : wrapper.response(res, 'success',result);
  };
  await sendResponse(data);
};

const userInfo = async (req,res) => {
  const payload = req.params.email;
  let data = await query.userInfo(payload);
  const sendResponse = async(result)=>{
    (result.err)?wrapper.response(res, 'fail',result)
      : wrapper.response(res, 'success',result);
  };
  await sendResponse(data);
};

module.exports = {
  register,
  userInfo
};
