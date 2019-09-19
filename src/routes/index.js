const express = require('express');
const router = express.Router();
const passport =require('passport');

router.get('/', (req, res, next) => {
    res.render('index')
}),
router.get('/signup', (req, res, next) => {
    res.render('signup');
}),
// Escuchará los datos del usurario
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
})),
router.get('/signin', (req, res, next) => {
    res.render('signin')
}),
// Escuchará los datos del usuario
router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
})

router.get('/profile', (req, res, next) => {
    res.render('profile')
});

module.exports = router;