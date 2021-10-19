let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  let today = new Date();
  let option = {
    weekday:  "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString('en-US', option);

  res.render('list', {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;

  items.push(item);

  res.redirect('/');
});



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
