const Joi = require('@hapi/joi');
const validate = require('validate.js');

const isObject = (value) => {
  return value instanceof Object;
};

const timeToSecond = (interval = 0) => {
  const matchRegex = /(\d+)([mhd])/;
  const strMatch = interval.match(matchRegex);
  if (strMatch.length > 0) {
    switch (strMatch[2]) {
    // Minute
    case 'm':
      return parseInt(strMatch[1]) * 60;
      // Hour
    case 'h':
      return parseInt(strMatch[1]) * 60 * 60;
      // Day
    case 'd':
      return parseInt(strMatch[1]) * 24 * 60 *60;
    default:
      return null;
    }
  } else {
    return null;
  }
};

const validatePayload = async (payload,schema) => {
  const { error } = Joi.validate(payload,schema);
  if(!validate.isEmpty(error)){
    let result = error.details[0].message;
    return result;
  }
  return true;
};

module.exports = {
  isObject,
  timeToSecond,
  validatePayload,
};
