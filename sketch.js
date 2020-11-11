const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies 

function setup() {
  createCanvas(480,800);
  engine = Engine.create()
  ground = new Ground(240,460,10,480)
  
  world = engine.world
  Engine.run(engine);
}
function draw() {
  background(0); 
 
  var division = []
  var particle = []
  var plinko = []
  var divisionHeight = 300
  for(var k = 0;k<=width;k=k+80){
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  ground.display()
  drawSprites();
}