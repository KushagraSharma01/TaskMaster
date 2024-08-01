const jwt = require('jsonwebtoken');

function generatetoken(data){

    let dataString = JSON.stringify(data);

    let token = jwt.sign(dataString, "k");   //can also include a secret key

    return token;
}

module.exports = generatetoken;