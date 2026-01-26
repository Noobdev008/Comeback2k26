const express = require("express");
const router = express.Router();
const {error,login} = require("../controller/auth.controller");

router.get("/error", error);
router.post("/login", login);

module.exports = router;
