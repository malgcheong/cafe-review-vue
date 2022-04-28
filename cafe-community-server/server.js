const express = require('express');
var qs = require('querystring');
const app = express();
const PORT = 3000;



app.get("/pica/post", (req, res) => {
    console.log(__dirname);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.status(200).sendFile(__dirname + "/data/post.json");
});

app.get("/pica/login", (req, res) => {
    console.log(__dirname);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.status(200).sendFile(__dirname + "/data/login.json");
});

app.post("/pica/search",(request, res) =>{
    if (request.method == 'POST') {
        console.log(1);
        var body = '';

        request.on('data', function (data) {
            console.log(2);
            body += data;
            console.log(body);
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
        });
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.status(200).sendFile(__dirname + "/data/post.json");
})

app.listen(PORT, ()=> {
        console.log(`Listening on port ${PORT}!`);
})