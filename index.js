const express = require('express');
const app = express();
const path = require('path');

const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/error.html`)
})

app.listen(5000);