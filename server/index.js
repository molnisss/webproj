const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser');
const commentsRoutes = require('./routes/comments')

const PORT = 3000
const CONNECTION_STRING = 'mongodb+srv://maxy200516:qwMLCgIUuwgPMK1q@cluster0.dnyb4jf.mongodb.net/lp'

const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(commentsRoutes)

async function start() {
    try {
        await mongoose.connect(CONNECTION_STRING)

        app.listen(PORT, () => {})
        
    } catch (error) {
        console.log(error)
    }
} 



start()