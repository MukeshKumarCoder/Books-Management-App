const express = require("express");
const BookModel = require("../model/bookModel");

const bookRouter = express.Router();

//adding a book
bookRouter.post("/add", async (req, res) => {
  try {
    const newBook = BookModel(req.body);
    await newBook.save();
    res.status(200).send({ msg: "Book added" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// get all books
bookRouter.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send({error: error});
  }
});

module.exports = bookRouter;
