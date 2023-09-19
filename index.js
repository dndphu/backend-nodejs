const express = require("express");
const app = express();
const port = process.env.PORT|| 3000;
const dotenv = require("dotenv").config();

app.use(express.json());

//config router
const route = require("./routers")
route(app)

//connect mongodb
const db = require("./config/db");
db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
