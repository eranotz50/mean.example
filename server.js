console.log('server running...');

var dal = require('./dal');
dal.connect();

var express = require('express');
var app = express();

app.use(express.static('app'));

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
