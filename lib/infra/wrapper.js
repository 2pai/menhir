const statusCode = require('./statusCode');
const util = require('./util');

const data = (data, description = '', code = 200) => ({ err: null, message: description, data, code });
const error = (err, description = '', code = 500) => ({ err:err,code, data: err, message: description });

const response = (res,status,data = {}) => {
  let code,err;
  if(status == 'success'){
    err = false;
    code = data.code || 204;
  }else{
    err = true;
    code = data.code || 500;
  }

  res.status(code).send({
    error:err,
    data:data.data,
    message:data.message,
    code:code,
    status:statusCode[code] || 'Unknown'
  });
};
module.exports = {
  data,
  error,
  response
};
