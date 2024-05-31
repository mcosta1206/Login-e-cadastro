const mongoose = require ("mongoose");
const { userSchema } = require("./user");

const { Schema } = mongoose;

const serviceSchema = new Schema ({ 

name:{
    type: String,
    required: true,
},

description:{
    type: String,
    required: true,
},

quantity: {
    type: Number,
    required: true,
},

image:{
    type: String,
    required: true,
},

status:{
    type: Boolean,
    required: true,
},

members:{
    type: [userSchema],
},


},{timestamps : true});

const Service = mongoose.model("Service", serviceSchema);

const membersQuantity = Service.aggregate([
    {
      $project: {
        arraySize: { $size: "$members" }
      }
    }
  ])
  

module.exports = {
    Service,
    serviceSchema,
    membersQuantity,
};