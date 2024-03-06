const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExpShcema = new Schema({
    exp_years:{type:Number , default :0},
    projects:{type:Number , default :0},
    clients:{type:Number , default :0},
    hours:{type:Number , default :0},
}) 

const Exp = mongoose.model("Exo_years" , ExpShcema)
module.exports = Exp