const express = require("express");
const BookModel = require("../model/bookModel");


const bookRouter = express.Router();


bookRouter.post("/")