var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

// Do something with each response
// weather API can only handle http and heroku is looking for https
app.use(function(req, res, next) {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
   console.log('Express Server up and running on port ' + PORT);
 });
