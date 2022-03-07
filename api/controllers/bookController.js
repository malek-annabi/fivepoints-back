const mongoose = require('mongoose');
const Book = require('../models/Book');
const Category = require('../models/Category');



exports.createBook=(req,res,next)=>{
    const book = new Book({
      tittle: req.body.tittle,
      author:req.body.author,
      description:req.body.tittle,
      content:req.body.content,
      status:"active",
    });
// Save User in the database
    book.save()
    const categoryId = req.params.id
    console.log(categoryId)
  const bookId = Book.findOne({tittle:req.body.tittle})
  console.log(bookId)
      Category.updateOne({_id:categoryId},{ $set: { books:{bookId}  }})
    .then(data=> {
        res.send({
            status:'200',
            message:"the new Book",
            data,
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message ||  "Some error occurred while creating the User."
    });
    });
};

exports.findAllBooks= (req,res) => {
    Book.find()
    .then(Books=> {
        res.send(Books);
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.getBook=(req,res,next)=>{
    const id = req.params.id;
    Book.findOne({ '_id': id })
    .then(Book=> {
        res.send({
            status:'200',
            message:
            "Book",Book
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Book."
        });
    });
}
exports.bookById = async id => {
  const book = await Book.findById(id);
  return book;
}

exports.updateBook=(req,res,next)=>{
    const id = req.params.id;
    Book.findOneAndUpdate({_id: id}, {
      tittle: req.body.tittle,
      author:req.body.author,
      description:req.body.tittle,
      content:req.body.content,
    }).then(
      () => {
        res.status(201).send({
          message: 'Book updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).send({
          error: error
        });
      }
    );
  };


exports.deleteBook=(req,res,next)=>{
    const id = req.params.id;
    Book.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).send({
          message: "Book deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
}