const mongoose = require('mongoose')


const UserModel = new mongoose.Schema ({
    name:"string",
    email:{
        type:"string",
        trim :true,
        unique:true,
    },
    password:"string",
    role:"string",
},
{
    timestamps:true
},
)