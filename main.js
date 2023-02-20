const router = require('./router')
const cors = require('cors')

const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use('/api' , router)

const port = process.env.PORT || 9000;
app.listen(port)