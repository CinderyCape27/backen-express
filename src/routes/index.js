const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index')
}),
router.get('/signup', (req, res, next) => {
    res.render('signup');
}),
// Escuchará los datos del usurario
router.post('/signup', (req, res, next) => {
    console.log(req.body);
    res.send('Received')
    
}),
router.get('/signin', (req, res, next) => {
    
}),
// Escuchará los datos del usuario
router.post('/signin', (req, res, next) => {
    
});

module.exports = router;