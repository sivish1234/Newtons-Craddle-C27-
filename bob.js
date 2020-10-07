class Bob {
    constructor(x,y) {
      var options ={
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 0.6
     } 
  
      this.body = Bodies.circle(x, y, 25, options);
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      fill("pink");
      stroke("black");
      ellipseMode(RADIUS);
      ellipse(0,0,25,25);
      pop();
    }
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-55, y:-55});
  }
}