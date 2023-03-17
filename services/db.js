//server-mongodb interaction
//import mongoose
const mongoose=require('mongoose');

//state connection string via mongoose
mongoose.connect('mongodb://localhost:27017/ApiBugs',{
    useNewUrlParser:true  //to avoid unwanted warnings
});

//to define a bank model
const Bug=mongoose.model('Bug',{
    nos:Number,
    name:String,
    age:Number,
    salary:Number,
    post:String,
    date:String
});

module.exports={
    Bug
}

