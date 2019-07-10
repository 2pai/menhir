// const Wrapper = 
const statusCode = require('./statusCode');

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