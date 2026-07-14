const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://sivani_r_anil:siva123@ac-0k7dbum-shard-00-00.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-01.ojotgu3.mongodb.net:27017,ac-0k7dbum-shard-00-02.ojotgu3.mongodb.net:27017/hackathondb?ssl=true&replicaSet=atlas-gxc29u-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("MongoDb connected")
    }
).catch(
    (error) => {
        console.log("error")
    }
)


const team =mongoose.model("Teams", new mongoose.Schema(
    {
        teamId:String,
        teamName:String,
        leaderName:String,
        leaderEmail:String,
        leaderPhn:String,
        clgName:String,
        membersNo:String,
        title:String,
        statementTrack:String,
        technologyStack:String,
        mentorName:String,
        date:String,
        table:String
    }
))


app.post("/add-team",async (req,res) =>{
    await team.create(req.body)
    res.json({"status":"success"})
})

app.listen(3000, () => {
    console.log("Server started")
})