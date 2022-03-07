const categoryController=require('../controllers/categoryController')

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/category',categoryController.findAllcategories);
    app.get('/category/:id',categoryController.getCategory);
    app.post('/category',categoryController.createCategory);
    app.patch('/category/:id',categoryController.updateCategory);
    app.delete('/category/:id',categoryController.deleteCategory);
    app.patch('category/:categoryId/addBook/:bookId',categoryController.addBookToCategory);
}