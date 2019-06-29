/**
 * WebTicket Server Setup & Start
 *
 * @date 2019-04-07
 * @author Lee Sangkug
*/
var express     = require('express');               // express
var app         = express();                        // express -> app

var cors        = require('cors');                  // Cross Domain
var helmet      = require('helmet');                // security
var path        = require('path');

var router          = express.Router();

// security & cross domain
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE');
    next();
});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
//app.use(express.static(path.join(__dirname, '/static')));

app.all('*', (req, res) => res.render('notice'));


app.listen(8080, function(){
    
    
});