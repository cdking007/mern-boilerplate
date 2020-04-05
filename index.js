const express = require("express");

require("./db/mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
