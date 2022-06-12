const express=require('express')
const { config } = require('./config/config.js')
const {connected } = require('./config/configdb.js')
const app=express()
const routerUser=require('./routes/routerUser.js')
const path = require('path')
let PORT= config.port||8080
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('views', path.join(__dirname, '/public'));
//app.set('views','./public')
app.set('view engine','ejs')

//me conecto a la db mongo atlas
connected()

app.use('/api',routerUser)


app.listen(PORT,()=>{console.log(`SERVER ON! https://localhost:${PORT}`)})

//desconectar mongoose
process.on('SIGINT', () => {
    console.log('Mongoose disconnected')
    mongoose.connection.close()
  });