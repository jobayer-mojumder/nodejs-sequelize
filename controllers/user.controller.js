const router = require('express').Router()
var user = require('../models').user;
var post = require('../models').post;

router.get('/', (req, res) => {
    user.findAll({ include: post }).then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ er: error })
    })
})

module.exports = router;