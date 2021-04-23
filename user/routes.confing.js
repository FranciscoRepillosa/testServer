const express = require("express")
const router = express.Router();

const userController = require("./controllers/user.controller");

router.get("/register", userController.sendRegisterForm);

//router.post("/", userServerController.createUser);

router
    .route("/")
    .get(userController.getAllusers)
    .post(userController.createUser)

// add authrntication

//router.patch("/:userId", userServerController.UpdateUser)

router
    .route("/:userId")
    .patch(userController.UpdateUser)

module.exports = router;
                                 
