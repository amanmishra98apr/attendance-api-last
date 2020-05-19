var express = require('express');
var router = express.Router();
var attendanceController = require("../controller/attendanceController")
/* post  users listing. */
router.post('/', attendanceController.userAttendance);
module.exports = router;
