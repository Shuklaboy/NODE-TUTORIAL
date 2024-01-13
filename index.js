const express = require('express');
const app = express();
const path = require('path');

app.set ('view engine','ejs')

app.get('/profile',(_,resp)=>{
    const user ={
        name: 'vikas shukla',
        city:'Ranchi'
    }
    resp.render('profile',{user})
})

app.listen(5000);