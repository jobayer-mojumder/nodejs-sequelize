const router = require('express').Router()
var category = require('../models').category;
var post = require('../models').post;

router.get('/', (req, res) => {
    category.findAll({ include: post }).then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ message: error })
    })
})

module.exports = router;