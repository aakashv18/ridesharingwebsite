const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth.middleware");

const controller = require("../controllers/auth.controller");

router.post("/register", controller.register);

router.post("/signin", controller.signin);

router.post("/verify/:mobile_no", controller.verify);

router.post("/admin-login", controller.adminLogin);

module.exports = router;
