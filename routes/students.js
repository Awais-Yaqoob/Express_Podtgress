var express = require('express');
var router = express.Router();
const { getStudent, createStudent } = require("../Controllers/studentController");

router.get("/", getStudent);
router.post("/createStudent", createStudent);

module.exports = router;

