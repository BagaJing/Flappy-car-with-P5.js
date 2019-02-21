function Pipe(){
	this.top= random(-50,-280);
	this.bottom=500;
	this.x=800;
	this.w=20;
	this.speed=3.1;
	this.highlight=false;
		let o=car;
	 this.hits= function(o){
		//console.log( -(o.y));
		//console.log('this.top'+-this.top);
		if(-(o.y-330)<-this.top){
			if (o.x>this.x-100&&o.x<this.x+this.w+100) {
				
				if (!isSupercar) {
					this.highlight=true;
					score-=1000;
							return true;
				} else{
					this.highlight=false;
					return false;
				}
		
			}
		}
		this.highlight=false;
		return false;

	}

	this.show= function(){
		push();
		fill(255);
		if (this.highlight) {
			fill(255,0,0);
		}
		rect(this.x,0,this.w,this.top);
		rect(this.x,this.bottom,this.w,this.top);
		pop();
	}

	this.update= function(){
		this.x -= this.speed;
	}
	this.offscreen = function(){
		if (this.x<-this.w) {
			return true;
		} else {
			return false;
		}
	}
}

function pipescome(){

if (result==diff1*1000) {
	diff-=10;
	this.speed+=0.1;
	diff1++;
}

if(frameCount%diff==0){
   		 pipes.push(new Pipe());
 }
	for(let i=pipes.length-1; i>=0; i--){
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(car)) {
			console.log("HIT");
		}
		
		if(pipes[i].offscreen()){
			pipes.splice(i,1);
		//	console.log(pipes.length);
		}
	}
}