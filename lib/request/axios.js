const axios = require('axios');
const util = require('../infra/util');

const post = async (url,payload = {},options = {}) => {
  if(!util.isObject(options)){
    return new Error('Options must be object');
  }else if(!util.isObject(payload)){
    return new Error('Payload must be object');
  }
  try {
    let data = await axios({
      url:url,
      method:'POST',
      data:payload,
      headers:options
    });
    return data;
  } catch (error) {
    return error;
  }

};

const put = async (url,payload = {},options = {}) => {
  if(!util.isObject(options)){
    return new Error('Options must be object');
  }else if(!util.isObject(payload)){
    return new Error('Payload must be object');
  }
  try {
    let data =  await axios({
      url:url,
      method:'PUT',
      data:payload,
      headers:options
    });
    return data;
  } catch (error) {
    return error;
  }

};

const get = async (url,options = {}) => {
  if(!util.isObject(options)){
    return new Error('Options must be object');
  }
  try {
    let data = await axios({
      url:url,
      method:'GET',
      headers:options
    });
    return data;
  } catch (error) {
    return error;
  }


};


const del = async (url,payload = {},options = {}) => {
  if(!util.isObject(options)){
    return new Error('Options must be object');
  }else if(!util.isObject(payload)){
    return new Error('Payload must be object');
  }
  try {
    let data = await axios({
      url:url,
      method:'DELETE',
      data:payload,
      headers:options
    });
    return data;
  } catch (error) {
    return error;
  }

};

module.exports = {
  post,
  get,
  put,
  del
};
