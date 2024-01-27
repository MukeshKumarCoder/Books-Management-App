const express = require("express");
const BookModel = require("../model/bookModel");
const { auth } = require("../middleware/auth.middleware");

const bookRouter = express.Router();

//adding a book
bookRouter.post("/add", auth, async (req, res) => {
  try {
    const newBook = BookModel(req.body);
    await newBook.save();
    res.status(200).send({ msg: "Book added" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// get all books
bookRouter.get("/", auth, async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// update books
bookRouter.patch("update/:bookid", auth, async (req, res) => {
  const { bookid } = req.params;
  try {
    await BookModel.findByIdAndUpdate({ _id: bookid }, req.body);
    res.status(200).send({ msg: "Book has been updated" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// delete books
bookRouter.delete("delete/:bookid", auth, async (req, res) => {
  const { bookid } = req.params;
  try {
    console.log(req.params);
    await BookModel.findByIdAndDelete({ _id: bookid }, req.body);
    res.status(200).send({ msg: "Book has been deleted" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

module.exports = bookRouter;
