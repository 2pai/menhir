const wrapper = require("../lib/infra/wrapper");

const Endpoints = (app) => {
    
    app.get('/user',(req,res) => wrapper.response(res,"This Is User",200,true));
    app.get('/',(req,res) => res.send("this app "));
}
module.exports = Endpoints;