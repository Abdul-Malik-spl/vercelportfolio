const express = require('express');
const cors = require('cors');
const datas = require('../../router/router'); // adjust path as needed
const connectdatabase = require('../../config/connectdatabase');

const app = express();

const corsOption = {
  origin: "https://abdul-portfolio-nine.vercel.app",
  methods: "GET,POST"
};

app.use(cors(corsOption));
app.use(express.json());
connectdatabase();
app.get('/',(req,res)=>{
    res.send('<h1>correct</h1>')
})
app.use('/api/v1', datas);

module.exports = app;
