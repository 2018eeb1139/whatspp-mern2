//importing the express module
const Express = require('express');
const mongoose = require('mongoose');
const Pusher = require("pusher");
const Messages = require('./dbMessages');
const cors = require('cors');

//App config
const app = Express();
const port=process.env.PORT || 9000;


const pusher = new Pusher({
  appId: "1514343",
  key: "5650fb121d7949bcdc46",
  secret: "60bc783fa3e87c69b5e2",
  cluster: "us2",
  useTLS: true
});

//Middlewares
app.use(Express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

//DB config
const connection_url="mongodb+srv://Amanapc1999:pX03B4yMs2IZSBKZ@cluster0.g5esixq.mongodb.net/?retryWrites=true&w=majority"

//DB Connection
mongoose.connect(connection_url).then(()=>{
    console.log('connection successfull')
}).catch((err)=>console.log('no connection'))

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB Connected");
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();
    changeStream.on("change", (change) => {
        console.log("A change occured", change);
        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log("Error triggering Pusher");
        }
    });
});

//API endpoints
app.get('/',(req,res)=>res.status(200).send("hello world")) 

app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
        })
    })


app.post('/messages/new',(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

//Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`))