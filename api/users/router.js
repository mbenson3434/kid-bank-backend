const express = require('express');
const Users = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Users.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    if(process.env.NODE_ENV === 'development') {
        res.status(500).json({
            error: err.message,
            stack: err.stack
        })
    } else {
        res.status(500).json({
            message: 'data cannot be retrieved from server'
        })
    }
})

module.exports = router;