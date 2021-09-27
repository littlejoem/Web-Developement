
const express = require("express");
const app = express();
const https = require("https");

app.get('/', (req, res) => {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=New%20York&units=metric&lang=de&appid=1cfd9ddca757c0f858f9287c9e198dda';
  https.get(url, (response) => {
    console.log('statusCode:' , response.statusCode);
    console.log('header:', response.header);

    response.on('data', (d) => {
      // process.stdout.write(d);
      const weatherData = JSON.parse(d);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description
      console.log(temp);
      console.log(weatherDescription);
    });
  // }).on('error', (e) => {
  //   console.log(e);
  })


  res.send("Server is up and running.");
});



app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});
