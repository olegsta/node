const express = require('express')
const app = express()
const { connectDB } = require("./helper/db")
const mongoose = require("mongoose")
const axios = require("axios")
const { port, host, db, apiUrl } = require("./configuration")

const postSchema = new mongoose.Schema({
    name: String
  });

  const Post = mongoose.model('Post', postSchema);

app.get('/test', (req,res)=> {
    res.send("!!!!Our api server is working") 
    console.log(Post)
})

app.get('/api/currentUserApi', (req,res)=> {
    res.json({
        userId: "111",
        email: "Apigoogle.com"
    })
})

app.get('/testWithCurrentUser', (req,res)=> {
    console.log(apiUrl)
    axios.get(apiUrl + "/currentUser").then(response => {
    res.json({
        testWithCurrentUser: true,
        userData: response.data
    })
  })
})

const startServer = () => {
    app.listen(port, () => {
        console.log(`started api server ${port}`)
        console.log(`started host ${host}`)
        console.log(`started mongo ${db}`)

        const silence = new Post({ name: 'TEST' });
        silence.save()
        const kittens = Post.find();
        console.log("kittens")
        console.log(silence);

        //console.log(silence); // 'Silence'
    })
}

connectDB()
  .on("error", console.log)
  .on("disconnected", connectDB)
  .once("open", startServer)
