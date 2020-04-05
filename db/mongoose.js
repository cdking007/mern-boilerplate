const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("connected to db");
    if (err) {
      console.log(err);
    }
  }
);
