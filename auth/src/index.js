const express = require('express')
const app = express()
const { connectDB } = require("./helper/db")
const { port, host, db, apiUrl } = require("./configuration")
const axios = require("axios")

app.get('/test', (req,res)=> {
    res.send("!!!!Our api server is working")
})

app.get('/api/currentUser', (req,res)=> {
    res.json({
        userId: "222",
        email: "google.com"
    })
})

app.get('/authWithCurrentUser', (req,res)=> {
    console.log(apiUrl)
    axios.get(apiUrl + "/currentUserApi").then(response => {
    res.json({
        testWithCurrentUser: true,
        userData: response.data
    })
  })
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
