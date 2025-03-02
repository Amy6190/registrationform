const express = require('express');
const cors = require('cors');
const app = express();
const authRoute = require('./routes/authRoutes')
const mongoose = require('./config/db');
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("node is running");
})

app.use('/api/auth',authRoute)

app.listen(5000,()=>{
    console.log("node is listening on port 5000");
});
