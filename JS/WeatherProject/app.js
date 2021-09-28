
const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');

});

app.post('/', (req, res)=> {
  const query = req.body.cityName;
  const unit = 'metric';
  const apiKey = '1cfd9ddca757c0f858f9287c9e198dda';
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=' + unit + '&lang=en&appid=' + apiKey;
  https.get(url, (response) => {
    console.log('statusCode:' , response.statusCode);
    console.log('header:', response.header);

    response.on('data', (d) => {
      // process.stdout.write(d);
      const weatherData = JSON.parse(d);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const weatherConditionIcon = weatherData.weather[0].icon;
      const imageURL = 'http://openweathermap.org/img/wn/' + weatherConditionIcon + '@2x.png';
      res.write('<p>The weather is currently ' + weatherDescription + '</p>');
      res.write('<h1>The temperature in ' + query + ' is ' + temp + ' degrees Celcius.</h1>');
      res.write('<img src=' + imageURL + '>');
      res.send();
    });
  });
})


app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
