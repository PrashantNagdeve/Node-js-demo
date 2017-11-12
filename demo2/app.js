
setTimeout(function(){
    console.log("4 seconds delay");
},4000);

var time=0;
var timer=setInterval(function(){
    time+=2;
    console.log("This is the set Time interval "+time);
    if(time>9)
    {
        clearInterval(timer);
    }
},2000);
console.log(__dirname);
console.log(__filename);