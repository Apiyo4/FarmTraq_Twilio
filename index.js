require('dotenv').config()
var twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const unhealthy= 'Dear farmer, the health status check of 91740A requires urgent attention' 
const healthy = "Dear farmer, the health status check of 91740A is good. No need to worry"

client.messages
  .create({
     body: unhealthy,
     from: process.env.TWILIO_NUMBER,
     to: process.env.MY_PHONE_NUMBER,
   })
  .then(message => console.log(message.sid));