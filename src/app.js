const express = require('express')
const path = require('path')
const configs = require('./config/config')
const loader = require('./loaders/loader');

var app = express();

// Archivos estaticos
app.use(express.static(path.join(__dirname, '../clientApp/dist/clientApp')));

// Configuro API
loader(app);


// Cualquier otro request que pida y no sea parte de mi api
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, '../clientApp/dist/clientApp/index.html'));
});

// Lanzo el servidor
app.listen(configs.PORT, () => console.log(`Listening on ${ configs.PORT }`))
