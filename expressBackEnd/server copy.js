const express = require("express")
const multer = require ("multer")
const upload = multer({dest: "uploads/"})

const fs = require('fs')
const path = require('path')
const app = express()
const database = require("./database")
app.use(express.static('build'))


app.get("/submitform", (req, res) => {

})

app.post("/submitform", upload.single("image"), async (req, res)=>{
    
    const firstName = req.body.firstName

    // save these details to a database
    
    database.createPost(firstName,  (error, insertId) => {
        if (error) {
            res.send({error: error.message})
            return
        }
        res.send({
            id: insertId,
            firstName
            
        })
    })
})

// if react router, then add this
 app.get('*', (req,res) =>{
   
 })

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log("listening on port ${port}")
})

