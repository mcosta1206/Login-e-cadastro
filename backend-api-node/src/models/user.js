const mongoose = require ("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema ({

name:{
    type: String,
    required: true,
},

surname: {
    type: String,
    required: true,
},

image:{
    type: String,
    required: true,
},

birth:{
    type: Date,
    required: true,
},

email:{
    type: String,
    required: true,
},

password: {
    type: String,
    required: true,
},

},{timestamps : true});

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
    userSchema,
};