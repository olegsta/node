const express = require('express')
const app = express()
const { connectDB } = require("./helper/db")
const { port, host, db } = require("./configuration")

app.get('/test', (req,res)=> {
    res.send("!!!!Our api server is working")
})

const startServer = () => {
    app.listen(port, () => {
        console.log(`started auth api server ${port}`)
        console.log(`started host ${host}`)
        console.log(`started mongo ${db}`)
        //console.log(silence); // 'Silence'
    })
}

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", startServer)
