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

/*
setInterval( () => { 
  //REQUEST USERS STATUS FROM EXTERNAL SERVER
  axios.get('http://localhost:4444/user')
  .then( async (response) => {
    // handle success
    //console.log("external user", response.data.data[0]);

    let localUser = await User.find().select("_id");



    console.log(localUser);
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  //IF USER STATUS CHANGED UPDATE STATUS IN OUR DB
  //MAKE THE MODIFICATIONS TO THE MICROTIK
}, process.env.REQUEST_USER_STATUS_BY_INTERVALS);
*/

app.use("*", (req, res, next) => {
  console.log("* route", req.originalUrl);
  res.status(404).json({
    msg: `I´m sorry but can´t find ${req.originalUrl} on this server`
  })
});

module.exports = app;