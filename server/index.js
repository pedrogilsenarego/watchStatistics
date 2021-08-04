const express = require("express") 
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "watchstatistics",
})

app.post("/api/insert", (req, res)=>{

    const sqlInsert = "INSERT INTO users (userName, email) VALUES (?,?)"
    db.query(sqlInsert, [userName, email], (err, result) =>{
        
    })
})

app.listen(3001, () =>{
    console.log("running on port 3001");
})




// npm install express body-parser mysql nodemon