const mongoose = require("mongoose")
const CONNECTION_URL = "mongodb+srv://EmployeeDB:Pathak4477@cluster0-o8dl8.mongodb.net/passwordManage?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useNewUrlParser:true
})

const db = mongoose.connection

db.on('error',error=>console.log(error))
db.once("open",()=>console.log("database connected"))

