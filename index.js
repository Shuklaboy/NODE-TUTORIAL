const express = require('express');
const app = express();

app.get("", (req, resp) => {
    console.log(req.query.name)
    resp.send(`
    <h1>Welcome</h1> <a href="/about"> Go to about Page </a>
    
    `);
});

app.get("/about", (req, resp) => {
    resp.send(`
<input type ="text" placeholder="User name " value="${req.query.name}"/>
<button>Click Me</button>
<a href="/"> Go to home Page </a>
    `);
});

app.get("/help", (req, resp) => {
    resp.send([{
        name:'Vikas Shukla',
        email:'email@test.com'

    },
    {
        name:'Shukla',
        email:'mail@test.com'

    }]);
});

app.listen(5000);