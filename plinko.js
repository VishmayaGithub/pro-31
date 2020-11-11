class Plinko{
    constructor(x, y,radius) {
        var options = {
            isStatic : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = 10
      
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position
        push();
        
        ellipseMode(RADIUS);
       ellipse(pos.x,pos.y, 10);
        pop();
      }
}