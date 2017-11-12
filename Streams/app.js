var fs=require('fs');
//streams allows to read file chunk by chunk and allow us to keep the tract 
//of what is read and what is not
var readStream=fs.createReadStream('sample.txt');
readStream.setEncoding('utf8');
//readStream inherits from EventEmitter
//hence we are able to use 'on'
var writeStream=fs.createWriteStream('input.txt');

var temp='';
//creating the variable temp to store
readStream.on('data',(chunk)=>{
     //console.log('------------Read------------');
     //console.log(chunk);
     temp+=chunk;
     //adding data to file in chunks
     writeStream.write(chunk);
});

readStream.on('end',()=>{
  //console.log(temp);
  console.log("Remove above comment to Read");
});

//reading the written file
var data=fs.readFile('input.txt','utf8',(err,data)=>{
    console.log(data);
});

//piping which means reading data and writing to a file without worrying abt flow control
readStream.pipe(writeStream);
//pipe can only be used with readStream

var http=require('http');
http.createServer((req,res)=>{
    //read
    var t=fs.createReadStream('sample.txt','utf8');
    //piping 
    //sending the sream to response
    t.pipe(res);
    res.writeHead(200,{'Content-Type':'text/plain'});
   
    
}).listen(3000);

console.log('Server is running');

























