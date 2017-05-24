console.log('server running...');


var dal = require('./dal');
dal.connect();

var controller = require('express')();

controller.get('/', function (req, res) {
    res.send('Hello World!')
})

controller.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
