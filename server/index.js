require('dotenv').config({path:__dirname+'/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ac = require('./controllers/authController')
const pc = require('./controllers/productController')
const initSession = require('./middleware/initSession')
const authCheck = require('./middleware/authCheck')

const app = express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000*60*60*24*365
    }
}))

massive(CONNECTION_STRING)
.then(db => {
    console.log('db connection successful')
    app.set('db', db)

app.use(initSession)

app.listen(SERVER_PORT, () => 
console.log(`Listening on port ${SERVER_PORT}`))
})

// Authorization Endpoints
app.post('/api/login', ac.login)
app.post('/api/signup', ac.signup)
app.delete('/api/logout', ac.logout)

// Product display endpoints
app.get('/api/products', pc.getAllProducts)
app.post('/api/product', authCheck, pc.saveProduct)
app.delete('/api/product/:productId', authCheck, pc.deleteProduct)
app.put('/api/product/:productId', authCheck, pc.editProduct)

