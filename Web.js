let http = require("http");


const app = http.createServer(function (req,res) {
    res.writeHead(200, {'content-Type': 'text/plain'});

    res.end("This is example of creating server");

});
const PORT = 5000;
app.listen((`${PORT}`),
    ()=> console.log('Server Running at http'));