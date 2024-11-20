const express = require("express");
const { createUser } = require("../controller/createUser");
const { getAllUser } = require("../controller/getUser");
const router = express.Router();

router.post("/add", createUser);
router.get("/get", getAllUser);

module.exports = router;
