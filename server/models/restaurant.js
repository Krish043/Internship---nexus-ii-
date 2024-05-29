const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const restaurantModel = mongoose.model("restaurant", restaurantSchema)
module.exports = restaurantModel