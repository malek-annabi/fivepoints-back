const Category = require("../models/Category");

// categorys manegement 
//get all
exports.findAllcategories = (req, res, next) => {
  Category.find()
  .then(categorys=> {
      res.send(categorys);
  }).catch(err=> {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving users."
      });
  });
};
exports.addBookToCategory = (req, res, next) => {
  const categoryId = req.params.categoryId;
  const bookId = req.params.bookId;
  Category.findById(categoryId)
  .then(category=> {
      category.Books.push(bookId);
      category.save()
      .then(()=> {
          res.send({
              status:'200',
              message:
              "Book added to category",category
          });
      }).catch(err=> {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Book."  });
      });
    })
  }

//Create
exports.createCategory = (req, res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
        status:"active",
    });
    category
      .save()
      .then(result => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
  };
//update
  exports.updateCategory = (req, res, next) => {
    const id = req.params.id;

    Category.updateOne({_id: id}, {
        name: req.body.name,
        author:req.body.author,
        description: req.body.description,
    }).then(
      () => {
        res.status(201).send({
          message: 'category updated successfully!'
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
  // delete
  exports.deleteCategory = (req, res, next) => {
    const id = req.params.id;
    Category.findOneAndUpdate({_id: id}, {status:"archived"})
      .exec()
      .then(result => {
        res.status(200).send({
          message: "category deleted",
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          error: err
        });
      });
      
  };
  exports.getCategory=(req, res, next) => {
    Category.findById(req.params.id).populate('Books')
      .exec()
      .then(category => {
        if (!category) {
          return res.status(404).send({
            message: "category not found"
          });
        }
        res.status(200).send({
          category: category,
        });
      })
      .catch(err => {
        res.status(500).send({
          error: err
        });
      });
  };