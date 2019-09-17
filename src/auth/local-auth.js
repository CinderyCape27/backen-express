const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Distintos métodos de autenticación según passport
// usuario para comparar o encriptar
const User = require('../models/user');
// Cómo se utilizan los datos que vienen del cliente --- funcioón----
// ----------nombre del método, método de autenticación
// ------------------------------------------auth object, callback de ejecución
passport.use('local-signup', new LocalStrategy({
//--A través de qué dato será la autent.
    usernameField:  'email',
    passwordField: 'password',
    passReqToCallback: true // permitirá recibir datos reequest, no sólo los anteriores
}, async (req, email, password, done) => {
    const user = new User();
    user.email = email,
    user.password = password;
   await user.save();
   done(null, user)
}));