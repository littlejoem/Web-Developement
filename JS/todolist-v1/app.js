let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  var daysOfWeek = ['Sunday', 'Monday', 'Tusday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];

  day = daysOfWeek[currentDay];
  res.render('list', {
    kindOfDay: day
  });

});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
