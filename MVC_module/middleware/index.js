const fs = require('fs')

function logReqResp(filename){
    return (req,resp,next) => {
        fs.appendFile(filename,`\n${Date.now().toLocaleString}:${req.ip}  ${req.method} : ${req.path}`,(err, data)=>{
        next();
        });
    }
}

module.exports = {logReqResp}