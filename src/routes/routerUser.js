const express=require('express')
const routerUser=express.Router()
const userController=require('../controllers/userController.js')
//get del formulario
routerUser.get('/nosotros',userController.nosotros)
//enviar user
routerUser.post('/nosotros',userController.createUser)
//eliminar user
routerUser.delete('/nosotros/:email',userController.deleteUsers)
//modificar user
routerUser.put('/nosotros/:email/:name',userController.updateUsers)

//ver el user cargado
routerUser.get('/welcome',userController.getUsers)


module.exports=routerUser