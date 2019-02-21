//
function drawsun(x,y){
  fill('red');
  arc(x,y,200,200,PI,0);
  for (var i = 0.2; i <= PI; i=i+0.3) {
  	push();
  	translate(350,350);
  	rotate(i);
  	fill('yellow');
  	ellipse(-150,0,30,5);
  	pop();
  }
}
// cloud

function randomcloud(){
	for(let i=0; i<cloud.length;i++){
		push();
		cloud[i].flying();
		pop();
	}
}
//

function flyingcloud(x,y){
	this.x=x;
	this.y=y;
	this.flying= function(){
	fill('white');
    noStroke();
    ellipse(this.x, this.y, 50, 25);
  ellipse(this.x + 25, this.y - 10, 50, 25);
  ellipse(this.x - 25, this.y - 5, 75, 50);
  ellipse(this.x + 25, this.y + 20, 75, 25);
  ellipse(this.x - 25, this.y + 15, 50, 25);
  this.x = this.x - random(3,4);
  if (this.x<0){
  	this.x=random(600,2000);
  }
}
}
//
function drawstroke(){

  for(let i=0; i<roadstroke.length; i++){
    push();
    roadstroke[i].moving();
    pop();
  }
}
//
function movingroad(x1){
  this.x1=x1;
 
  this.moving = function(){
    //fill(168, 173, 154);
    strokeWeight(1);
    //line(this.x1,440,this.x2,500);
    fill(246, 255, 0);
    rect(this.x1,470,35,10);
    this.x1=this.x1-7;
    if(this.x1<0){
      this.x1=width+30;
    }

  }

}
//
function drawsight(){
    push();
 // stroke(0);
  fill(19, 244, 86);
  rect(0,500,800,300);
  pop();
  push();
  fill(0, 136, 226);
  rect(0,340,800,100);
  pop();
  push();
  fill(211, 226, 237);
  rect(0,440,800,60);
  pop();
  push();
  drawsun(350,340);
  pop();

  //draw a road
  line(0,500,800,500);
  line(0,440,800,440);
  randomcloud();
  drawstroke();
  //
}