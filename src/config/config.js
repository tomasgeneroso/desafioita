require('dotenv').config()

let config={
    port:process.env.PORT,
    database:process.env.DB
}
module.exports={config}