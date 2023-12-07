const express = require("express");

const router = express.Router();

const controller = require("../controllers/user.controller");

router.get("/get/:id", controller.getUser);

router.put("/update/:id", controller.updateUser);

router.get("/getStatus/:id", controller.userStatus);

router.post("/upload-docs/:id", controller.uploadDocs);

router.post("/insert-ride", controller.insertRides);

router.get("/docs", controller.getDocs);

router.put("/doc/:id", controller.verifyDocs);

router.delete("/doc/:id", controller.deleteDocs);

module.exports = router;
