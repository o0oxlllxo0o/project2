var cat=require('./cat')
var mouse= require('./mouse')
var mun=new cat('mun');
var mic=new mouse('micky');
mun.eat(mic);
console.log(mun);
console.log(mic);