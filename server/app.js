// server/app.js
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

var index = require('./routes/index');
var apiRoutes = require('./routes/api');

app.on('connection', function(socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(30 * 1000); 
  // 30 second timeout. Change this as you see fit.
})
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(cors())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
// use api routes
app.use('/api', apiRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;