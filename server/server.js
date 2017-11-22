var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start server on port 8888
var port = process.env.PORT || 8888;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Something is happening');
    next();
});

// GET request to /api returns { message: 'Hello World' }
// In my C9 account the request must be sent to https://node-angular-lgobinath.c9users.io:8080/api
router.get('/', function(req, res) {
    res.json({ message: 'Hello World' });
});

app.use('/api', router);

app.listen(port);
console.log('Server is running on port ' + port)