class Rope{
    constructor(body1, body2, offsetX, offsetY) {

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options ={
         bodyA: body1,
         bodyB: body2,
         pointB:{x:this.offsetX, y:this.offsetY},
      }  
  
      this.body = Constraint.create(options);
      World.add(world,this.body);
    }
  
    display() {
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;
        
        var AnchorX = posB.x + this.offsetX
        var AnchorY = posB.y + this.offsetY

        strokeWeight(3);
        stroke('black');
        
        line(posA.x,posA.y,AnchorX, AnchorY);  
    }
  }