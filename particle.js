class Particle{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = 13
      this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
      }
      display(){
       var pos = this.body.position
        push();
        fill(this.color)
        ellipseMode(RADIUS);
       ellipse(pos.x,pos.y, 13);
        pop();
      }
}