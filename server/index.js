const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const restaurantModel = require('./models/restaurant')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/restaurant");

app.post('/login', (req,res) => {
    const {email,password} = req.body;
    restaurantModel.findOne({email:email,})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record exist")
        }
    })
})
app.post('/register', (req,res) => {
    restaurantModel.create(req.body)
    .then(restaurant => res.json(restaurant))
    .catch(err=> res.json(err))
})
app.listen(3001, () => {
    console.log("server is running");
}) 