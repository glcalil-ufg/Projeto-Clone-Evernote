const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/',(req,res ) => {
    bcrypt.hash('olá',10).then(result => {
        res.json({'palavra':'olá','hash': result});
    });
    
});

module.exports = router;