const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling missing
    console.error(err);
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate an error
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}