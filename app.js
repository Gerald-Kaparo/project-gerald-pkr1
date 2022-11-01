https://web.postman.co/workspace/My-Workspace~eb9eea1d-b64b-4ffa-89a5-1233c68592b4/collection/23812039-95911c15-d16f-4ea7-b533-0cf6f259ca72?action=share&creator=23812039


// // Import the express library here
// const express = require('express');
// // Instantiate the app here
// const app = express();

// const PORT = process.env.PORT || 4001;

// // Invoke the app's `.listen()` method below:
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// })


// 2: 
// const express = require('express');
// const app = express();

// const PORT = process.env.PORT || 4001;
// // Use static server to serve the Express Yourself Website
// app.use(express.static('public'));

// // Open a call to `app.get()` below:


// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });
// const moods=[{mood: 'excited about express'}, {mood: 'root-tastic'}];
// app.get('/moods', (req, res, next)=>{
//   // Here we would send back the moods array in response
// })


// 3:
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Open a call to `app.get()` below:


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
const express=[{mood: 'excited about express'}, {mood: 'root-tastic'}];
app.get('/express', (req, res, next)=>{
  // Here we would send back the moods array in response
})

// SafARICOM DEVELOPERS
// *** Authorization Request in NodeJS ***|
 
var unirest = require("unirest");
var req = unirest("GET", "https://sandbox.safaricom.co.ke/oauth/v1/generate");
 
req.query({
 "grant_type": "client_credentials"
});
 
req.headers({
 "Authorization": "Basic SWZPREdqdkdYM0FjWkFTcTdSa1RWZ2FTSklNY001RGQ6WUp4ZVcxMTZaV0dGNFIzaA=="
});
 
req.end(res => {
 if (res.error) throw new Error(res.error);
 console.log(res.body);
});
