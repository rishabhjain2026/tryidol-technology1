const express=require("express")
const app=express()
const passport=require("./auth")
const db=require("./db")
//const passport=require("passport")
require("dotenv").config()

const PORT=process.env.port || 3000

const {person}=require("./models/service")
const {menuitem}=require("./models/category")

const bodyparser=require("body-parser")


const logrequest=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] request made to: ${req.originalUrl}`);
    next();
}

app.use(logrequest);  //ye sab use karnga

const localautmiddleware=passport.authenticate('local',{session:false})
app.get("/",localautmiddleware,(req,res)=>{
    res.send("welcome to my hotel")
})
app.use(passport.initialize());
const personroutes=require("./routes/person_routes")
app.use("/person",personroutes)

const menu_item=require("./routes/menu_routes")
app.use("/menu",menu_item)

app.listen(PORT,()=>{
    console.log("server has started")
})