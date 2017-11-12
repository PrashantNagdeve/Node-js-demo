var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    console.log('Requested URL: ' + req.url)

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var readStrm = fs.createReadStream('homepage.html', 'utf8');
        readStrm.pipe(res);
    }
    
    else if (req.url === '/api') {
        var jsonObj = {
            'name': 'Prashant',
            'lname': 'Nagdeve',
            'age': 26
        }
        res.writeHead(200, { 'Content-Type': 'text/json' });
        //res end takes string as an argument hence we
        //convert json into string using stringify
        //trying  to send a json object to browser
        res.end(JSON.stringify(jsonObj));
    }

    else if(req.url==='/about')
    {
       var readStream=fs.createReadStream('aboutMe.txt','utf8');
       res.writeHead(200,{'Content-Type':'text/plain'});
       readStream.pipe(res);
       
    }
    else
    {

        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream('404.html','utf8').pipe(res);
        
    }


}).listen(3000);
console.log("Server is running at localhost");