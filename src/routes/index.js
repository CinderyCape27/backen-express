const express = require('express');
const router = express.Router();

// Here you can add as routes as you wants
router.get('/', (req, res) => {
    res.render('index.html')
    
});



module.exports = router;