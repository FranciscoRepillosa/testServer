const express = require("express")
const router = express.Router();

const userServerController = require("./controllers/user.controller");

router.get("/register", userServerController.sendRegisterForm);

router.post("/", userServerController.createUser);

// add authrntication

router.patch("/", userServerController.UpdateUser)



module.exports = router;
                                
