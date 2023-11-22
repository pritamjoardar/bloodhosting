const express = require('express');
const cookieParser = require("cookie-parser")
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cookieParser())
const dotenv = require("dotenv")
app.use(express.json());
app.use(cors());
app.use(require("./routes/auth"));
dotenv.config({path:"./.env"});
const PORT = process.env.PORT || 5000 ;
const Connect =async()=>{
    await mongoose.connect(process.env.URI).then(()=>{
        console.log("connected..");
    }).catch((err)=>{
        console.log(err);
    });
}     
Connect();
app.use(express.static(opath.join(__dirname,'client/build/')));
if(process.env.NODE_ENV === 'production'){
    app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client/build/index.html'))
    })
}

app.listen(PORT,()=>{
    console.log(`app is Listening on port no ${PORT}`);
})

