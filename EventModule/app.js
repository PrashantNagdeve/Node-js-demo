var event=require('events');
var util=require('util');
var eventEmitter=new event.EventEmitter();

eventEmitter.on('clicked',()=>{
      console.log("Clicked event triggered"); 
});


eventEmitter.on('touched',()=>{
    console.log("Touched");
});


eventEmitter.emit('clicked');
eventEmitter.emit('touched');

//util
var Students=function(name){
    this.name=name;
}

//Students class will inherit from eventEmitter

util.inherits(Students,event.EventEmitter);

var prash=new Students('Prashant');

prash.on('Asked',(age)=>{
console.log("My name is :"+prash.name+" \nMy age is : "+age);
});

prash.emit('Asked',27);