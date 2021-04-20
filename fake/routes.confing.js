const express = require("express")
const router = express.Router();

const fakeServerController = require("./controllers/fake.controller")

router.post("/", fakeServerController.createUser )

module.exports = router;
