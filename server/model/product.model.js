const mongoose = require('mongoose')


var productModel=mongoose.Schema({
    Product:{type:String,unique:true,required:true},
    Category:{type:String,required:true},
    Description:[String],
    ImageUrl:{type:String},
    Price:{type:String,required:true},
    

})

module.exports= mongoose.model('products',productModel);
