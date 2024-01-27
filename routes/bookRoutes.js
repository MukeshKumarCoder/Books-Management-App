const express = require("express");
const BookModel = require("../model/bookModel");


const bookRouter = express.Router();


//adding a book
bookRouter.post("/add", async (req, res)=>{
    try {
        const newBook = BookModel(req.body);
        await newBook.save();
        res.send({msg: "A new Book has been added"});
    } catch (error) {
        res.send({error: error});
    }
});




module.exports = bookRouter