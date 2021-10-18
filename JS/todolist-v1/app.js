let express = require('express');
let bodyParser = require('body-parser');
let app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  var today = new Date();
  var option = {
    weekday:  "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString('en-US', option);

  res.render('list', {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post('/', (req, res) => {
  var item = req.body.newItem;

  items.push(item);

  res.redirect('/');
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
