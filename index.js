const express = require("express");
require("dotenv").config();
const connection = require("./db");
const bookRouter = require("./routes/bookRoutes");

const app = express();
const port = process.env.port;

app.use(express.json());
app.use("/books", bookRouter);





app.listen(port, async () => {
  try {
     await connection
    console.log(`app is runnign at port ${port} db is also connected` );
  } catch (error) {
    console.log(error);
  }
});
