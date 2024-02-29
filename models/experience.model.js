const mongoose = require("mongoose")
const Schema = mongoose.Schema

const experienceSchema = new Schema({
    logo : {type:String ,trim : true, },
    name:{type:String ,trim : true},
    name_ar:{type:String ,trim : true},
    company : {type:String ,trim : true, },
    company_ar : {type:String ,trim : true, },
    link : {type:String ,trim : true, },
    link_ar : {type:String ,trim : true, },
    job : {type:String ,trim : true, },
    job_ar : {type:String ,trim : true, },
    start : {type:String ,trim : true, },
    end : {type:String ,trim : true, },
    location : {type:String ,trim : true},
    location_ar : {type:String ,trim : true},
    description : {type:String ,trim : true},
    collage : {type:String ,trim : true},
    collage_ar : {type:String ,trim : true},
    certificate : {type:String ,trim : true},
    certificate_ar : {type:String ,trim : true},
    type:{type:String , enum:["experience", "certificate" , "education" , "program" , "language" ]}
})

const Experience = mongoose.model("Experience" , experienceSchema)
module.exports = Experience