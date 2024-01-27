const express = require("express");
require("dotenv").config();
const connection = require("./db");

const app = express();
const port = process.env.port;






app.listen(port, async () => {
  try {
     await connection
    console.log(`app is runnign at port ${port} db is also connected` );
  } catch (error) {
    console.log(error);
  }
});
