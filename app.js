const express = require("express")
const app = express()

const studentRoutes = require("./routes/student.routes")
app.use("/student", studentRoutes);

app.get("/", (req, res) =>{

    //hadles landing page
    //most likely you will not need this
    res.send("Hellow")
})


app.listen(3000, ()=>{
    console.log("Running on port 3000")
})