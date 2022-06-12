const user=require('../models/user.js')

module.exports={
    //SOLO RENDERIZA NOSOTROS.EJS
    nosotros:async(req,res)=>{
        try {
            res.render('pages/nosotros.ejs')
        } catch (error) {
            console.log('ERROR TO GET USERS: ',error)
        }
    },
    getUsers:async(req,res)=>{
        try {
            res.render('welcome')
        } catch (error) {
            console.log('ERROR TO GET USERS: ',error)
        }
    },
    createUser:async(req,res)=>{
        try {
            let data = req.body;
            if (!data.phone ||!data.email || !data.firstName || !data.lastName ) {
                res.status(400).send({
                    message: 'Invalid credentials',
                });
            } else {
                //NO CONTEMPLA LA POSIBILIDAD DE QUE YA EXISTE
                const emailSearched=data.email
                const userF =await user.find({email:emailSearched})
                    if (userF){
                        res.status(400).send({message: 'Already exist, try with different email'});
                    }else{
                        const created=user.create(data,error=>{if(error)return `error inserting data`});
                        res.render('pages/welcome.ejs',{created})
                    }
            }
        } catch (error) {
            console.log('ERROR TO CREATE USERS: ',error)
        }
    },
    //ELIMINA POR EMAIL --> USO POSTMAN PARA MANDAR LA REQ
    deleteUsers:async(req,res)=>{
        try {
           
            let data = req.params.email;
            await user.deleteOne({email:data}) //es una baja "fisica" lo cual está mal.
            res.status(200).send({message: 'User deleted',user:data})

        } catch (error) {
            console.log('ERROR TO DELETE USERS: ',error)
        }
    },
    updateUsers:async (req,res)=>{
        try {

            const filter = { email: req.params.email };//filtro por el que queremos buscar
            const update = { firstName: req.params.name };//lo que queremos actualizar
            await user.findOneAndUpdate(filter, update, {new: true});
            res.status(200).send({message: 'User updated',filter:filter,update,update})
        } catch (error) {
            console.log('ERROR TO UPDATE USERS: ',error)
        }
    },
}