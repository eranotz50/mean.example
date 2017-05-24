console.log('server running...');


var dal = require('./dal');
dal.connect();

var controller = require('express')();

controller.get('/', function (req, res) {
    res.sendfile(__dirname + '/app/index.html');
})

controller.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
