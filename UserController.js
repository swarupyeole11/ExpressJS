const loginUser = (req,res)=>{
    
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword = req.body.password;

    res.json({
        success : true,
        name : username,
        email : useremail,
        userPassword: userpassword,
    })

    console.log(req.body);
}

module.exports = loginUser;

// exportign the the callback fuction to be used from here 