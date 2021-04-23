const User = require("../models/user.models");

exports.sendRegisterForm = (req, res) => {
    
    res.render("user/register")
    //res.sendFile("C:/Users/computador/Documents/1_proyecos/Pro-Proyects/Learning-Platform/Learning-platform/userServer/views/register.html");
}

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
    //encrypt password
    
    const newUuser = await User.create(req.body);

    //Create user on Mikrotik

    res.status(201).json({
        newUuser,
        status: "success"
    })
    } catch (error) {
        res.send(error)
    }
}

exports.UpdateUser = async (req, res) => {
    
    try {
        console.log(req.body)
        const updatedUser = await User.findByIdAndUpdate(req.params.userId , req.body.data, {new: true});
        
        res.status(200).json({
            status: "success",
            updatedUser

        })

    } catch (error) {
        res.send(error)
    }

}

exports.getAllusers = async (req, res) => {
    try {
        
      const users = await User.find();
  
      res.status(200).json({
      status: "success",
      results: users.length,
      data : [
          users
      ]
    })
    } catch (error) {
        res.send(error);
    }
}