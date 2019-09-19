// -------------Cofiguración de passport--------------------

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // Distintos métodos de autenticación según passport
// usuario para comparar o encriptar
const User = require('../models/user');

// Serializar usuario para navegar en multiples páginas, logueado
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id)
    done(null, user)
});

// Cómo se utilizan los datos que vienen del cliente --- función----
// ----------nombre del método, método de autenticación
// ------------------------------------------auth object, callback de ejecución
passport.use('local-signup', new LocalStrategy({
//--A través de qué dato será la autent.
    usernameField:  'email',
    passwordField: 'password',
    passReqToCallback: true // permitirá recibir datos reequest, no sólo los anteriores
}, async (req, email, password, done) => {

    const user = User.findOne({email: email});
    if(user){
        return done(null, false, req.flash('signupMessage', 'Email already exist.'))
    } else {
        const newUser = new User();
        newUser.email = email,
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        done(null, newUser);
    }



    
}));