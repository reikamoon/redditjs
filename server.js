// Initialize express
const express = require('express')
const app = express()
require('./controllers/posts.js')(app);

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set db
require('./data/reddit-db');

// Add after body parser initialization!
app.use(expressValidator());

// require handlebars
const exphbs = require('express-handlebars');

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Use handlebars to render
app.set('view engine', 'handlebars');

// Require Handlebars
// const handlebars = require('handlebars');
// const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({
//     defaultLayout: 'main',
//     handlebars: allowInsecurePrototypeAccess(handlebars),
// });
//
// app.engine('handlebars', hbs.engine); 
// app.set('view engine', 'handlebars');

// INDEX
  app.get('/', (req, res) => {
    res.render('home', {msg: 'Nice!'});
  })

// New posts
  app.get('/posts/new',(req, res) => {
    res.render('posts-new', {});
  })


// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})
