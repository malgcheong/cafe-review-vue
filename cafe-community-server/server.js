const express = require('express');
const app = express();
const PORT = 3000;



app.get("/home/post", (req, res) => {
    console.log(__dirname);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.status(200).sendFile(__dirname + "/data/post.json");
});

app.get("/home/login", (req, res) => {
    console.log(__dirname);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.status(200).sendFile(__dirname + "/data/login.json");
});


app.listen(PORT, ()=> {
        console.log(`Listening on port ${PORT}!`);
})