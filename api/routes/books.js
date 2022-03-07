const bookController=require('../controllers/bookController');
const checkauth=require('../middleware/check-auth');

// routes extraction + function association for every route
module.exports=(app)=>{
    app.get('/book',checkauth,bookController.findAllBooks);
    app.get('/book/:id',bookController.getBook);
    app.post('/book/:id',bookController.createBook);
    app.patch('/book/:id',bookController.updateBook)
    app.delete('/book/:id',bookController.deleteBook)
}