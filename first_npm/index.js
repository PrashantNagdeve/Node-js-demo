var express=require('express');
var app=express();


//to use embeded js
//property name is 'view engine' and value is ejs
app.set('view engine','ejs');

// when express sees the above line it looks for dir 'views'
//hence we are creating that dir

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/about.html');
});
// in the above example, we have sent html file without paramaters
//to send HTML files with parameters, we use templates
//we will use embedded js for that




//no need to worry about content type
app.get('/about',(req,res)=>{
    var jsonObj={
        "name":"Prashant",
        "age":26
    }
    res.send(jsonObj);
});
var students={
    1:"Prashant",
    2:"Onkar",
    3:"Shayank",
    4:"Hrishi"
};

app.get('/:id',(req,res)=>{
    res.send("Resquested Name "+students[req.params.id]);
});

app.get('/student/:name/:age',(req,res)=>{
    res.send("You are talking to "+req.params.name+" who is "+req.params.age+" years old");
});

app.get('/demo/:id/:psw',(req,res)=>{
  res.render('demo',{name:students[req.params.id],psw:req.params.psw});
});

//use of for loop
var entries={
    1:{'lname':'Nagdeve'},
    2:{'lname':'Hule'},
    3:{'lname':'Phopse'}
    
}
app.get('/demo2/:id',(req,res)=>{
    res.render('demo2',{entry:entries[req.params.id]});
});







app.listen(3000,()=>{
    console.log("Server is running at 3000");
});