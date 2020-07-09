require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const userController = require('./controllers/user.controller')
const postController = require('./controllers/post.controller')
const categoryController = require('./controllers/category.controller')

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Welcome to the application"
    });
})

//----------routes-------//
app.use('/api/users', userController);
app.use('/api/posts', postController);
app.use('/api/categories', categoryController);
//-----------------------//


const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("server up and running on PORT :", port);
});