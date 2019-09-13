const express = require('express');
const morgan = require('morgan');
const path = require('path');

//  Express app
const app = express();
const indexRoutes = require('./routes/index')

// Settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') )

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); 

// Routes 
app.use('/', indexRoutes)

// Server
app.listen(app.get('port'), () => {
    console.log(`Server on por ${app.get('port')}`);
    
});