const mongoose = require('mongoose');
const config = require('../config/config')

module.exports = function(){
    const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
    return connection.connection.db;
}