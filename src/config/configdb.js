const mongoose = require('mongoose')
const {config}=require('./config.js')
async function connected(){
    const cs=config.database
        try {
            await mongoose.connect(cs)
            .then(console.log('CONNECTED TO DATABASE'))
            mongoose.connection.on('error', console.error.bind(console, 'connection error'));

        }catch (error) {
            console.log('FAILED CONNECTING TO DATABASE: ',error)
        }
}

module.exports={connected}