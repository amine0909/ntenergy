const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');
const app = express()
const cors = require("cors")

const sequelize = require("./DbConnection")
const userRouter = require("./router/user")
const commandeRouter = require("./router/commande")

// Set static folder
app.use(express.static(path.join(__dirname,'public')))


app.use(bodyParser.json())
app.use(cors())

app.use("/api",userRouter)
app.use("/api",commandeRouter)


app.listen(3000, () => {
    console.log("server running")
})