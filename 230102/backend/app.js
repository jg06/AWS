var express = require("express");
var app = express();

app.use(express.static(__dirname + "/../frontend/build"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server is running : port 3000");
});
