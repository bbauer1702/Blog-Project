// Require packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views'));

// Require controller ajax functions for database interaction
var blogControl = require('./controllers/blogControl.js');
var userControl = require('./controllers/userControl.js');

app.post('/blog/', blogControl.create);
app.get('/blog/', blogControl.read);
app.put('/blog/:id', blogControl.update);
app.delete('/blog/:id', blogControl.update);
app.get('/blog/:id', blogControl.readById);

app.post('/users/', userControl.create);
app.get('/users/', userControl.read);
app.put('/users/', userControl.update);
// app.delete('/users/', userControl.delete);  // Do I need this?


// STORMPATH !!!!! I hope it works!



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


app.listen(9797, function(){
  console.log("Spinning up the blog blasters! Targeting coordinates: 9797")
});
