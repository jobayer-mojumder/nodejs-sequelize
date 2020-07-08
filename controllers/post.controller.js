const router = require('express').Router()
var user = require('../models').user;
var post = require('../models').post;

router.get('/', (req, res) => {
    post.findAll({ include: user }).then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ message: error })
    })
})

module.exports = router;