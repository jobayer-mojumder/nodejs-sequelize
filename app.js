require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

var postModel = require('./models').post;
var userModel = require('./models').user;
var categoryModel = require('./models').category;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Welcome to the application')
    res.status(200).json({
        message: "Welcome to the application"
    });
})

app.get('/users', (req, res) => {
    userModel.findAll({ include: postModel }).then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ er: error })
    })
})

app.get('/posts', (req, res) => {
    postModel.findAll().then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ er: error })
    })
})

app.get('/categories', (req, res) => {
    categoryModel.findAll().then(function (data) {
        res.json({ data: data })
    }).catch(function (error) {
        res.json({ er: error })
    })
})


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});