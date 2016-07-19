// Require packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');


var app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));

// Testing out Multer for image uploads
// app.use(multer({ dest: './uploads/'}))

// Stormpath for authentication must be initialized before any routes
app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));

// Require controller ajax functions for database interaction
var blogControl = require('./controllers/blogControl.js');

app.post('/blog/', blogControl.create);
app.get('/blog/', blogControl.read);
app.put('/blog/:id', blogControl.update);
app.delete('/blog/:id', blogControl.update);
app.get('/blog/:id', blogControl.readById);


// This section is all about hot reloading
if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

// Connect to the database "blog-db"
mongoose.connect("mongodb://localhost:27017/blog-db");
mongoose.connection.once('open', function(){
  console.log("Firing data cannons at MongoDB!");
});

// Render the index (referring to root of views specified above (__dirname + '/views'))
app.get('/', function(req, res){
  res.render('index');
});

app.on('stormpath.ready', function () {
  app.listen(9797, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Spinning up the blog blasters! Targeting coordinates: 9797');
  });
});
