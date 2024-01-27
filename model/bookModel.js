const mongoose = require("mongoose");


const bookShema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    genre:{
        type: String,
        required:true
    },
    auther:{
        type: String,
        required:true
    },
    publishing_year:{
        type: Number,
        required:true
    },
},{
    versionKey: false
})


const BookModel = mongoose.model("book", bookShema);

module.exports = BookModel