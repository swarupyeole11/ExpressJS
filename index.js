
const express = require("express")
const app = express();

const path = require("path")
const bodyParser = require("body-parser");
app.use(express.json())

const router = require('./UserRoutes')

app.use(bodyParser.urlencoded({extended : false}))
app.use("/api/v1",router)

// there are 4 methods in which each coreesponds to one of the CRUD operation Post -> Create(we can send the data using that url) , Get -> Read(and by read we mean from frontend in this case as we are here preent in thr backend) , PUT -> Update ( we can update the data using that url), Delete -> delete 
// this is true in a limited sense because you can also use the GET to send data from the frontend but it is unsafe since it shares the data in the link


app.get("/",(req,res)=>{
    // res.send("<h1> Helloe World </h1>")
    
    /* We Have to send it like this because for send file there is requitement of absolute path not relative*/
    res.sendFile(path.join(__dirname+"/index.html"));
    // res.json({
    //     name : "Swarup",
    //     email : "swarup@gmail.com",
    //     password : "xyz"
    // })
})

// now we will use this to send the data to another url , from req.body we get all the data which is present at the frontend . Suppose there is field c


app.listen(4001,()=>{
    console.log("the server thas started");
})



/*

NOTES : 
    1*) to start server you have to listen to the frontern hence we use the listen method to connect with frontend port
    1) to send the index.html file you are bound to use GET mehtod
    2) when we use a post request for accepting data we make a new use a new url instead of root url / so that it ensures that the original page does not start throwing errors
    3) We can use both the get and the post method to send data BUT get sends the data(from client) in the URL  which is unsafe where as POST sends the data(from client) in the body hence it is safer
    
    4) res.send("DONE"); If you even send it without the tags it gives ERROR : cannot get POST request (so in future if you get such error just know that there is somthing wrong syntactically)
    5) console.log(req.body); --> we do not get any output as undefined  because we need a middelware to parse the data being sent
    6) In order to get data from the frontend in the form we have to give action = "link to the post request path" method = "GET/POST/PUT/DELETE e.g <form action="/api/v1/login" method="POST">"
    
    7) ABOUT (req,res) (res) deals with all the results we get in the backend and we have to push them to frotend while (req) deals with all the things we get from fronted hence the syanta req.body and res.send
   VVVVIMP 8) VVVIMP To use the express Js propely without errors we have to do three things : 1) Path to give path of root 2) body Parser to Parse the data which comes from the frontend (there are two ways to do it : use it universally with app.use OR pass it with the callback function )3) In order to again communicate the read data to frontend or DB we have to use  {app.use(express.json())}
    9) To check for the POST request you can use the thunder client or Postman 
    10) In the forms at frontend you have to specify the `name` Tag and whatever you give name that can be aceesed in nackend by `req.body.name`
    11) 
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;

    res.json({
        success : true,
        name : username,
        email : useremail,
        userPassword: userpassword,
    })
    In the turorial early we were sending data through POST requsest like this but in real life it does not work like that you would only send sucess or reject on fronted and the data gets stored at the database 

    12) MOST IMPORTANT POINT :  for sepreation of concern we follow the followign proedure :
                                 1) First We declare the funtionality in form of Arrow function in Controller.js
                                 2) Then we import this function and Contorller.js file in routes.js where we specify the route for that api
                                 3) Next we import out route.js in our index.js file also here we use the three things : body Parser , path for root path and app.use(express.json()) for POST API
*/