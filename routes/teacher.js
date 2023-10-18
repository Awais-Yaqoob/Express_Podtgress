var express = require('express');
var router = express.Router();
const { getTeacher, createTeacher } = require("../Controllers/teacherController");

router.get("/", getTeacher);
router.post("/createTeacher", createTeacher);

module.exports = router;