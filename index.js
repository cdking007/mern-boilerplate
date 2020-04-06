const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");

require("./db/mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api", userRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
