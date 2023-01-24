const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json(   ))
mongoose.connect('')
app.get("/", (req, res) => {
    res.send("Hello word")
})

app.post("/api/register", (req, res) => {
    console.log(req.body)
    res.json({status: "ok"})
})

app.listen(8000)