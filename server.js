var express = require('express')
var bodyParser = require('body-parser')
var topTen_api = require('./routes/topTen.js')
var path = require('path')

var app = express()

// Serves the vue app
app.use(express.static(path.join(__dirname, 'blackfish-redux', 'dist')))

app.use(bodyParser.json())

app.use('/api', topTen_api)

//Error handling
app.use(function(req, res, next){
  res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Server error')
})


//start server running
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('app running on port', server.address().port)
})
