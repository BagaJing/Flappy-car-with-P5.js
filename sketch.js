/*
the idea of flappy car comes from the tutorial video of flappy bird
URL:https://www.youtube.com/watch?v=cXgA1d_E-jY
*/
/*variables to make tires rotate*/
let step=0.1;
let angle=0;
/*variables to decide the car fly or not*/
let Isfly=false;
let flytimes=3;
/*variables array to make the road effct*/
let roadstroke=[];
/*variables array to making random cloud*/
let cloud=[];
/*variables for function Car()*/
let car;
/*variables for function Supercar()*/
let supercar;
let isSupercar= false;
/*variables for function Pipes*/
let pipes= [];
/*variables to make the player play*/
let score; 
/*variables to determine the score of player*/
let result=100;
/*variables to load the time when z is typed*/
let ztime;
/*variables to determine the diffculity of the game*/
let diff=150;
let diff1=1;
/*variables about the effect of ejctor in supercar
URL:URL:http://wow.techbrood.com/fiddle/28005
*/
var offsetAngle = 0,
    particle,
    particles = [],
    ctx;

//
function setup() {
setupsketch();
    //
    pipes.push(new Pipe());
  createCanvas(800, 600);

}

function draw() {
  background('lightblue');
  drawsight();
    text('press z to make the car fly and unbeatable for 10 seconds!',0,50);
   	text('press SPACE to make the car jump once!',0,80);
   	text('This is a demo about my idea for a game called flappy car.',300,30);
   	text('Your Life Line : '+score,0,100);
   	text('Your Score:'+result,0,120);
   	if(!Isfly){
   		text('The left times you can fly: '+flytimes,0,140);
   	}

   	let sc=second();
   	//result+=sc;
   	if (sc%2==0) {
   		result+=2;
   	}
   	score+=sc*0.5;
  if(score<=0){
  	textSize(30);
  	fill('black');
  	text('Game over ! Your Score is: '+result+ ' .'+'Please refresh it!',50,250);
  	noLoop();
  }
  	let clockCheck=ztime-second();
  	if(clockCheck>0){
  		ztime=second();
  	}
  if(Isfly&&-clockCheck<=9){
  	//console.log(second()-ztime);
  	let clock=10+ztime-second();
    text('Left flying time: '+clock,0,140);
    isSupercar=true;
    pipescome();
   	supercar.show();
   	supercar.ejctor();
   	supercar.move();
   	  

  } else {
  	Isfly=false;
  	isSupercar=false ;
   	pipescome();
   	car.update(); 
   	car.show();

  }
}
//
function keyPressed(){
	if(key==' '){
		car.up();
	//	console.log('SPACE');
	}
	  if (key=='z') {

     if (!flytimes==0) {
     Isfly=true;
     flytimes--;
     	
     } else{
     	Isfly=false;
     }
     ztime=second();
  }
}
//
function setupsketch(){
	time=second();
   score=30000;
   jwait=900+random(-10,1);
    for(let i=0;i<15;i++){
    roadstroke[i]= new movingroad(50*i);
  }
   for(let i=0;i<5;i++){
    cloud[i]= new flyingcloud(random(600,800),random(0,200));
    }
    //
    car= new Car();
    supercar= new Supercar();
    //
    pipes.push(new Pipe());
}


