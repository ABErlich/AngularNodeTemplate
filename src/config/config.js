const dotenv = require('dotenv/config')

module.exports = function(){

    var port = process.env.PORT || 5000;


    return {
        PORT: port
    }
}()