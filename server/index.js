const express = require('express');
const request = require('request');
var compression = require('compression')
var cors = require('cors')

var app = express();
app.use(cors())
app.use(compression())
let wallmartEndPoint='http://api.walmartlabs.com/v1';
let wallmartApiKey='n7mtt4ufwbrxbcjp3vc47wyb';

app.use('/api', function(req, res) {  
    var url = wallmartEndPoint + req.url+"&apiKey="+wallmartApiKey;
    req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3000); 


