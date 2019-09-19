const express = require('express');
const path = require('path');
const morgan = require('morgan');
const engine = require('ejs-mate');
const app = express();

// Initialization
require('./database');
// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.urlencoded({extended: false})); // Indica como se recibirán los datos 
app.use(morgan('dev'));


// Routes
const routesIndex = require('./routes/index'); 
app.use('/', routesIndex);


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port  ${app.get('port')}`);
});