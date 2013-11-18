var express = require("express");
var app = express();
app.use(express.logger());
app.use(express.json());

info = {
  name: "The Amazing RandBot"
  , btcWallet: "1DAxkDntXRk6N7eUaKiiPGvwXuaaAkd7PL"
}

app.get('/randBot', function(req, res) {
  res.json(200, info);
});

app.post('/randBot', function(req, res) {
  console.log(req.body);
  var game = req.body;
  if (game.state !== "complete") {
    var heads = Math.random() > 0.5;
    if (heads) {
      res.json(200, game.betting.raise);
    } else {
      res.json(200, game.betting.call);
    }
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
