
function Supercar(){
  push();
  this.x=150;
  this.y=150;
  this.ex=this.x;
  this.ey=this.y;
  this.speed=20;
  this.show= function(){
  translate(this.x,this.y);
  body();
  fill('green');
  triangle(100,37.5,175,100,125,100);
  }
  this.move=function(){
    push();
    this.x=mouseX;
    this.y=mouseY;
    this.ex=mouseX*0.05;
    this.ey=mouseY*0.05;
    pop();
  }
  this.ejctor= function(){
     offsetAngle += 0.05;

    // keep the effct in range
    if(this.ex>570){
      this.ex=570;
    } else if(this.ex<-35){
      this.ex=-35;
    }
    if(this.ey>455){
      this.ey=455;
    } else if (this.ey<105){
      this.ey=105;
    }
    makeParticles(2, this.ex, this.ey);
    
    for (i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.render();
        p.update();
    }

    while (particles.length > 1000) particles.shift();
  }
pop();
 
}

/*
The source code of the ejctor effct comes from
  URL:http://wow.techbrood.com/fiddle/28005

*/
function makeParticles(pcount, mx, my) {
  //  print("make particles " + pcount);
    for (var i = 0; i < pcount; i++) {
        var p = new Particle(mx, my, random(30,35));

        var angle = PI + random(-PI, PI);
        var speed = random(4, 8);

        p.velX = sin(angle/4) * speed;
        p.velY = cos(angle/2) * speed;

        p.size = random(8,10);

        particles.push(p);
    }
}
//
function Particle(x, y, h) {
    this.posX = x;
    this.posY = y;
    this.velX = 0;
    this.velY = 0;
    this.shrink = 0.9;
    this.size = 1;
    this.drag = 0.9;
    this.gravity = 0.9;
    this.hue = h;

    this.update = function() {
        this.velX *= this.drag;
        this.velY *= this.drag;

        this.velX += this.gravity;

        this.posX -= this.velX;
        this.posY += this.velY;

        this.size *= this.shrink;
        // this.alpha -= this.fade; 	 
    };

    this.render = function() {
        fill(this.hue, 100, 100);
        ellipse(this.posX, this.posY, this.size);
    };


}