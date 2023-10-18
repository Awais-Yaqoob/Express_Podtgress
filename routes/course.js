var express = require('express');
var router = express.Router();
const { getCourse, createCourse } = require("../Controllers/courseController");

router.get("/", getCourse);
router.post("/createCourse", createCourse);

module.exports = router;