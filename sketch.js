
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,stone,ground,rubber,ironbody,p1,p2,p3,p4,p5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   hammer = new Hammer(200,200,100,30);
   stone = new Stone(300,555,50,50)
   ground = new Ground(400,600,800,30)
   rubber = new RubberBody(450, 450, 50)
   ironbody = new IronBody(200,555,40,30)
   p1 = new Pebbles(350, 450, 10)
   p2 = new Pebbles(380, 450, 10)
   p3 = new Pebbles(510, 450, 10)
   p4 = new Pebbles(540, 450, 10)
   p5 = new Pebbles(470, 450, 10)

	Engine.run(engine);
  
}


function draw() {
 
  background("lightpink");

  Engine.update(engine)
  
  stone.display();
  ground.display();
  rubber.display();
  ironbody.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  hammer.display();
  
  
  drawSprites();
 
}



