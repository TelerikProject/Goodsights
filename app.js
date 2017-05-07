var express = require('express'),
    bodyParser = require('body-parser')
  lowdb = require('lowdb');

//var db = lowdb('./data/data.json');
//db._.mixin(require('underscore-db'));
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/libs',express.static(__dirname + '/node_modules'));

var port = 80;

app.listen(port, function(){
    console.log('Server is running at port ' + port);
})