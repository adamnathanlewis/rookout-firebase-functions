const functions = require('firebase-functions');
const express = require('express');

// Create an express app
const app = express();

// Define your HTTP route and handler
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Create the HTTP function
exports.httpFunction = functions.https.onRequest(app);



exports.scheduledFunction = functions.pubsub
  .schedule('every 24 hours')
  .onRun((context) => {
    console.log('This function will run every 24 hours!');
    // Add your scheduled function logic here
    // For example, you could send an email, update a database, etc.
    return null;
  });


