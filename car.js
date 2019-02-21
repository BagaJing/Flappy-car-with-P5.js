//let step=0.1;
//let angle=0;

function Car(){
  this.y= height*0.55;
//
  this.gravity=1;
  this.velocity=0;
  this.lift=-20;
  this.x=300;
  //
  this.up= function(){
    this.velocity+=this.lift;
   // console.log(this.velocity);
  }
  //
  this.update= function() {
    this.velocity+= this.gravity;
     this.velocity*=0.9;
    this.y+=this.velocity;
    if(this.y>height*0.55){
      this.y=height*0.55;
      this.velocity=0;
    }
  }
    // draw the car
  this.show= function(){
  push();
  let bx=this.x-150;
  /*if(bx>540){
    bx=540;
  } else if(bx<-65){
    bx=-65;
  }*/
  translate(bx,this.y)
  body();
  pop();
    if(angle<2*PI)
  {
    angle+=step*PI;
  } else{
        angle=0;
  }

   // initiate two tires
  push();
  let t1x=this.x-55;
/*  if(t1x>635){
    t1x=635;
  } else if(t1x<30){
    t1x=30;
  }*/
  translate(t1x,125+this.y);
  rotate(angle);
  tire();
  pop();
  push();
  let t2x=this.x+75;
/*  if(t2x>765){
    t2x=765;
  } else if(t2x<160){
    t2x=160;
  }*/
  translate(t2x,125+this.y);
  rotate(angle);
  tire();
  pop();
  }
}
//the function of tire
function tire(){
fill(255);
ellipse(0,0,50,50);
fill(0);
ellipse(0,0,40,40);

fill(255);
ellipse(0,0,10,10);


//cross 
fill(255);
ellipse(0,-12.5,10,20);
fill(255);
ellipse(0,12.5,10,20);

fill(255);
ellipse(-12.5,0,20,10);
fill(255);
ellipse(12.5,0,20,10);

//轴
fill(0);
ellipse(0,0,7.5,7,5);
fill(255);
ellipse(0,0,5,5);

}
//the function of car's body
function body(){
  stroke(150);
  fill(150);
  rect(62.5,75,200,50,1.25);

  stroke(100);
  fill(100);
  rect(187.5,37.5,37.5,37.5);
  triangle(225,37.5,225,75,262.5,75);

  stroke(160);
  fill(160);
  stroke(255);
  rect(200,50,25,25);
  triangle(225,50,225,75,250,75);
}

/*
function jump(){
  
    if(key=='x'){
    jtime=millis();
    Isjump=true;
    key=null;
  }
  if(Isjump&&millis()-jtime<=jwait){
        jheight=jheight-speedj;
    if(jheight<=-100){
        speedj=-speedj;
      }
    if(jheight>=0){
        speedj=-speedj;
      }

     }
}
*/