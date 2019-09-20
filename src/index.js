const express = require('express');
const path = require('path');
const morgan = require('morgan');
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

// Initialization
require('./database');
require('./auth/local-auth'); // necesita ser un middleware
// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.urlencoded({extended: false})); // Indica como se recibirán los datos 
app.use(morgan('dev'));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next();
}) 

// Routes
const routesIndex = require('./routes/index'); 
app.use('/', routesIndex);


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port  ${app.get('port')}`);
});