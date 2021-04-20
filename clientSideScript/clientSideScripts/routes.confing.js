const express = require("express")
const router = express.Router();

const {sendClientSideScript} = require("./controllers/clientSideScripts.controller");


router.get("/:script", sendClientSideScript );

module.exports = router;