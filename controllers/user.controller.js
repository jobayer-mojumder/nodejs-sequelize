const router = require('express').Router()
const { hashSync, genSaltSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

var user = require('../models').user;
var post = require('../models').post;

router.get('/', (req, res) => {
    user.findAll({ include: post }).then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ message: error })
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    const salt = genSaltSync();
    body.password = hashSync(body.password, salt);
    user.create({
        name: body.name,
        email: body.email,
        password: body.password,
        status: 1
    }).then(function (data) {
        res.status(200).json({
            data: 'user created successfully'
        })
    }).catch(function (error) {
        res.json({ message: error.message })
    });

})


router.post('/login', (req, res) => {
    const body = req.body;
    console.log(body.email);
    user.findOne(
        {
            where:
            {
                email: body.email,
                status: 1
            }
        }).then(function (data) {

            if (!data) {
                return res.status(401).json({
                    status: 401,
                    message: 'No user found'
                });
            }

            const result = compareSync(body.password, data.password);
            if (result) {
                data.password = undefined;
                const jsontoken = sign({ result: data }, process.env.JWT_KEY, {
                    expiresIn: '1h'
                });
                return res.status(200).json({
                    status: 200,
                    message: 'login successfully',
                    token: jsontoken
                });
            } else {
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid password'
                });
            }

        }).catch(function (error) {
            res.json({ message: error })
        })
})




module.exports = router;