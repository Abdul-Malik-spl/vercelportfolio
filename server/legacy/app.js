const express=require('express')
const app=express()
const dotenv=require('dotenv')
const path=require('path')
const datas=require('../router/router')
const cors = require('cors');
const connectdatabase=require('../config/connectdatabase')
dotenv.config({path:path.join(__dirname,'config','config.env')})
const corsOption = {
  origin: "https://abdul-portfolio-nine.vercel.app",
  methods: "GET,POST"
};
app.use(cors(corsOption));

// http://localhost:7000/api/v1/datas   get api
// http://localhost:7000/api/v1/datas   post api

app.use(cors(corsOption));
app.use(express.json());
connectdatabase()
app.use('/api/v1',datas)
app.listen(process.env.PORT||7000,()=>{
    console.log("server start successfully");
})