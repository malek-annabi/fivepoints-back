const userController=require('../controllers/userController');
const checkauth=require('../middleware/check-auth');
// user login + signin routes
module.exports=(app)=>{
    app.get('/user',userController.findAllUsers);
    app.post('/user',userController.createUser);
    app.post('/login',userController.signIn)
}