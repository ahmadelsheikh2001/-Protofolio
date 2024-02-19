const mongoose = require("mongoose")
const Schema = mongoose.Schema

const experienceSchema = new Schema({
    logo : {type:String ,trim : true, },
    company : {type:String ,trim : true, },
    company_ar : {type:String ,trim : true, },
    link : {type:String ,trim : true, },
    link_ar : {type:String ,trim : true, },
})

const Experience = mongoose.model("Experience" , experienceSchema)
module.exports = Experience