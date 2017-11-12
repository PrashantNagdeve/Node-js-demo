var http=require('http');
http.createServer(function(req,res){
   res.end("You bloody fool")
}).listen(3000);
var hello=require('./hello.js');
console.log(hello.sayHello()+" "+hello.display());

var hello2=require('./hello2.js');
console.log(hello2.display());

var hello3=require('./hello3.js');
console.log(hello3.display());