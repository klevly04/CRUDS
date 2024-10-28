const students = require("../db/student.db")

    // include all your business logic here
    // like Object Creation, Insertion to Database
    // Sending the response JSON / XML / YAML,....
    // you can also apply more layer, 
    // shall we say SERVICES or DAO (Database access object) Layer,
    // The services or DAO will handle database transactions like insert or updates... 

function getAll(res, res){
    res.status(200).json(students)
} 

module.exports = {getAll}
