const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
const User = require("./user/models/user.models");

app.use(cors())
app.use(express.json())

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

const userRoutes = require("./user/routes.confing");

app.use("/user", userRoutes);


setInterval( () => { 
  //REQUEST USERS STATUS FROM EXTERNAL SERVER
  axios.get('http://localhost:4444/user')
  .then( async (response) => {
    // handle success
    let externalUSers = response.data.data;
    console.log("external user", response.data.data.length);
    
    let localUsers = await User.find().select("email status -_id");

    let obj = {};
    localUsers.forEach(localUser => {
      console.log("localUSer", localUser);
      obj[localUser.email] = [localUser.status, localUser.email];
      console.log("obj  ", obj[localUser.email])
    });

    externalUSers.forEach(async externalUser => {
      //console.log("email are equal", externalUser.email, obj[externalUser.email]);     
      //console.log("status ", externalUser.status, obj[externalUser.email][0]);
      if(obj[externalUser.email]){
        if (externalUser.email === obj[externalUser.email][1]  && externalUser.status !== obj[externalUser.email][0]) {
          console.log("this should update ",externalUser , obj[externalUser.email]);
          const updatedUser = await User.findOneAndUpdate({ email: obj[externalUser.email][1] }, {status: externalUser.status}, {new: true});
          console.log("from ", obj[externalUser.email] ,"to  ", updatedUser);
          
        
      }
      }
    })
  
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}, process.env.REQUEST_USER_STATUS_BY_INTERVALS);


app.use("*", (req, res, next) => {
  console.log("* route", req.originalUrl);
  res.status(404).json({
    msg: `I´m sorry but can´t find ${req.originalUrl} on this server`
  })
});

module.exports = app;