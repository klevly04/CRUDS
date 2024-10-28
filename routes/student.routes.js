const express = require("express")
const studentRoutes = express.Router()

const {getAll} = require("../controller/student.controller")


// include all your student routes here.
// Make naming standard
//do not include term "student" in all of your routes here for maintainability

studentRoutes.get("/", getAll)


module.exports = studentRoutes