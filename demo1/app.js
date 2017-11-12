var http=require("http");

http.createServer(function(req,res){
 
  var body="This is the body of a function";
  var len=body.length;
  res.writeHead(200,
  {
    'Contetnt-Type':'text/plain',
    'Content-Length':len
  });

 res.end(body);


}).listen(3000);
console.log("Server is running");