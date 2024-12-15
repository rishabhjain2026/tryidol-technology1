const mongoose=require("mongoose")

require("dotenv").config()

const mongourl=process.env.MONGODB_URL_LOCAL;


mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db=mongoose.connection

db.on("error",(err)=>{
    console.log("error while connecting to database",err)
})

db.once("open",()=>{
    console.log("connected to mongo DB server")
})
module.exports={
    db
}