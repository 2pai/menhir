const wrapper = require('../../lib/infra/wrapper');
const model = require('./user-model');
const log = require('../../lib/infra/logger');
const Logger = new log();
const redis = require('../../lib/cache/redis');

const login = (req,res) => {
  // const userKitten = new user.Kitten({
  //     name:"Paijo"
  // });
  // userKitten.save().then(doc => {
  //     console.log(doc)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   })

  // wrapper.response(res,"This Is login",400);
};
const register = async (req,res) => {
  const body = req.body;
  const registerUser = new model.User({
    email: body.email,
    fullName: body.fullName,
    password: body.password,
    penName:req.body.penName,
    birthDate:new Date(body.birthDate),
    created: Date.now()
  });
  try {
    const fetchData = await registerUser.save();
    wrapper.response(res,{data:fetchData},200);
  } catch (err) {
    wrapper.response(res,err,500,true);
  }

};
const users = async (req, res) => {
  const allUser = model.User;
  allUser.find({}, (errors, listUser) => {
    wrapper.response(res, listUser, 200);
  });
};
const user = async (req, res) => {
  const userInfo = model.User;
  const email = req.params.email;
  const keyRedis = 'dataUsers:'+email;
  try {
    const data = await redis.client().get(keyRedis);
    if(data){
      wrapper.response(res, JSON.parse(data), 200);
    }else{
      let fetchData = await userInfo.find({email: email});
      await redis.client().set(keyRedis,JSON.stringify(fetchData),'EX',60);
      wrapper.response(res, fetchData, 200);
    }
  } catch (err) {
    wrapper.response(res, err, 500,true);
    Logger.error(err,{ctx:'user-user'});
  }


};

module.exports = {
  login,
  register,
  users,
  user
};
