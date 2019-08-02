// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
// require('dotenv').config({path:__dirname+'/../.env'})
// const {TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN} = process.env
const accountSid = 'AC6a687194c79395cc42b7ce94aa553769';
const authToken = 'd4ead3b930569ce4aee71b0bde195529';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13852638948',
     to: '+18013105292'
   })
  .then(message => console.log(message.sid));
