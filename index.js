
const express = require("express")


const app = express();

// there are 4 methods in which each coreesponds to one of the CRUD operation Post -> Create(we can send the data using that url) , Get -> Read(and by read we mean from frontend in this case as we are here preent in thr backend) , PUT -> Update ( we can update the data using that url), Delete -> delete

/* get is a method to */
app.get("/",(req,res)=>{
    res.send("<h1> Helloe World </h1>")
})

// now we will use this to send the data to another url , from req.body we get all the data which is present at the frontend . Suppose there is field c
app.post("/",(req,res)=>{

})

app.listen(4040,()=>{
    console.log("the server thas started");
})