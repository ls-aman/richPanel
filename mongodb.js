const { MongoClient } = require('mongodb')
const mongoose = require("mongoose")

// Create Instance of MongoClient for mongodb
mongoose.connect('mongodb://localhost:27017/rpData')
    .then(() => console.log('Connected Successfully'))
    .catch(error => console.log('Failed to connect', error))


const rpSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const rpCollection = new mongoose.model("rpCollection",rpSchema)

module.exports=rpCollection;
