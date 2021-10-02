
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/8d232db6f8";
  const options = {
    method: "POST",
    auth: "littlejoem:ed1ccfac558621ee87f1a7438be6969d-us5"
  };

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();

});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// API key
// ed1ccfac558621ee87f1a7438be6969d-us5

//Audience ID
// 8d232db6f8
