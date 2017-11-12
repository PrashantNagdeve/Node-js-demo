var fs=require('fs');

var read_string=fs.readFileSync('test.txt','utf8');
console.log(read_string);

console.log("\nPrinting another msg\n");

var data=fs.readFile('test.txt','utf8',function(err,data){
    if(err)
      return console.error(err);

    console.log(data);
});
console.log("The data has been printed");

fs.writeFile('test2.txt',read_string,function(err,data){
    console.log("Wrinting data to file 2")   
    if(err)
         return console.error(err);
        
       
});

//deleting a file

fs.exists('test2.txt',(err)=>{
    if(err)
      console.error(err);
      fs.unlink('test2.txt');
});


//creating a directory

fs.rmdir('Node App',(err)=>{
    if(err)
    console.log("can not removed dir");
    else
    console.log("Dir removed");
});
//fs.rmdirSync('Node App');


//creating a directory and creating a file inside dir at the same time

fs.mkdir('Node Sla',(err)=>{
    // write dot slash to indicate that you want to go inside the dir
    fs.writeFile('./Node Sla/health.txt',"Ada pada kisne pada",(err)=>{
          if(err)
            console.log("You are an utter waste");
    });
});



//deleting the same directory which has file in it
//if u directly try to delete, it will give an error because it contains file
//so we will remove file n then dir
fs.unlinkSync('./Node Sla/health.txt');
fs.rmdirSync('Node Sla');

//file has been deleted