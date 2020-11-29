function cat(Name){
	this.name=Name;
	this.live=true;
	this.stomatch=[];
}
cat.prototype.eat= function(mouse){
	this.stomatch.push(mouse.name);
	mouse.live=false;
}
module.exports=cat;