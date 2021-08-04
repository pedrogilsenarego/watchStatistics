const express = require("express")
const multer = require ("multer")
const upload = multer({dest: "uploads/"})

const app = express()

app.get("/posts", (req, res) => {

})

app.post("/posts", upload.single("image"), (req, res)=>{
    const {filename, path} = req.file
    const description = req.body.description
    res.send("!jaz")
})

const port = process.env.PORT || 8080
app.listen(port, ()=> {
    console.log("listening on port ${port}")
})

//yarn add multer