
const express = require("express")
const app = express();

const path = require("path")
const bodyParser = require("body-parser");

// there are 4 methods in which each coreesponds to one of the CRUD operation Post -> Create(we can send the data using that url) , Get -> Read(and by read we mean from frontend in this case as we are here preent in thr backend) , PUT -> Update ( we can update the data using that url), Delete -> delete

/* get is a method to */
app.get("/",(req,res)=>{
    // res.send("<h1> Helloe World </h1>")
    
    /* We Have to send it like this because for send file there is requitement of absolute path not relative*/
    res.sendFile(path.join(__dirname+"/index.html"));
})

// now we will use this to send the data to another url , from req.body we get all the data which is present at the frontend . Suppose there is field c
app.post("/api/v1/login",(req,res)=>{
    res.send("<h1>DONE</h1>");
    console.log(req.body);
})

app.listen(4001,()=>{
    console.log("the server thas started");
})



/*

NOTES : 
    1) to send the index.html file you are bound to use get mehtod
    2) when we use a post request for accepting data we make a new url so that it ensures that the original page does not start throwing errors
    3) We can use both the get and the post method to send data BUT get sends the data(from client) in the URL  which is unsafe where as POST sends the data(from client) in the body hence it is safer
    
    4) res.send("DONE"); If you even send it without the tags it gives ERROR : cannot get POST request (so in future if you get such error just know that there is somthing wrong syntactically)
    5) console.log(req.body); --> we do not get any output as undefined  because we need a middelware to parse the data being sent
    6) In order to get data from the frontend in the form we have to give action = "link to the post request path" method = "GET/POST/PUT/DELETE e.g <form action="/api/v1/login" method="POST">"

*/