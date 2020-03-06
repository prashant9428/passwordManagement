const express = require("express")
const ejs = require("ejs")
require("./db/connection")
const userRoute = require("./router/user")

const app = express()
const port = process.env.PORT || 3000

app.set("view engine","ejs")
app.set("views","views")
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(userRoute)



app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})