// const Wrapper = 
const statusCode = require('./statusCode');

console.log(statusCode[1001] || "Unknown");
module.exports = {
    response(res,message,code,err = false){
        res.send({
            error:err,
            data:{
                message:message
            },
            code:code,
            status:statusCode[code] || "Unknown"
            })
    }
}