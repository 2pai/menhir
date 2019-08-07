const Joi = require('@hapi/joi');

const register = Joi.object({
  'email':Joi.string().email().lowercase().max(25).trim().required(),
  'password' : Joi.string().min(6).max(50).required(),
  'penName':Joi.string().alphanum().trim().required(),
  'fullName':Joi.string().required(),
  'birthDate':Joi.date().required(),
  'phoneNumber':Joi.number().required()
});

module.exports = {
  register
};
