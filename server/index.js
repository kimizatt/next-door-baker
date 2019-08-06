require('dotenv').config({path:__dirname+'/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ac = require('./controllers/authController')
const pc = require('./controllers/productController')
const oc = require('./controllers/orderController')
const initSession = require('./middleware/initSession')
const authCheck = require('./middleware/authCheck')
const client = require('twilio')(process.env.REACT_APP_TWILIO_ACCOUNT_SID, process.env.REACT_APP_TWILIO_AUTH_TOKEN);
const MessagingResponse = require('twilio').twiml.MessagingResponse
const path = require('path')

const aws = require('aws-sdk')
const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = process.env;

const app = express()
app.use(express.json())

app.post('/api/messages', (req, res) => {
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
})

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge: 1000*60*60*24*365
    }
}))

client.messages
    .create({
        body: '',
        from: '',
        to: ''
    })
    .then(message => console.log(message.sid))

massive(CONNECTION_STRING)
.then(db => {
    console.log('db connection successful')
    app.set('db', db)

app.use(initSession)

//AWS stuff
app.get('/api/signs3', (req, res) => {
    aws.config = {
      region: AWS_REGION,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    };
  
    const s3 = new aws.S3();
    const fileName = req.query['file-name'];
    const fileType = req.query['file-type'];
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: 'public-read',
    };
  
    s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
      };
  
      return res.send(returnData);
    });
  });

// Authorization Endpoints
app.post('/api/login', ac.login)
app.post('/api/signup', ac.signup)
app.delete('/api/logout', ac.logout)
app.put('/api/profile/:id', ac.editProfile)

// Product display endpoints
app.get('/api/products', pc.getAllProducts)
app.post('/api/product', authCheck, pc.saveProduct)
app.delete('/api/product/:productId', authCheck, pc.deleteProduct)
app.put('/api/product/:productId', authCheck, pc.editProduct)

// Order endpoints
app.post('/api/order', oc.saveOrder)

app.put('/api/updateimage', (req, res, next) => {
    console.log('REQ: ', req.body, req.session)
    db.update_image([req.body.url, req.session.user.id]).then(response => {
        console.log(response);
        res.status(200).send(response);
    }).catch((err) => console.log(err) || res.sendStatus(500));
})

app.use(express.static(__dirname + '/../build'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => 
console.log(`Listening on port ${SERVER_PORT}`))
})



