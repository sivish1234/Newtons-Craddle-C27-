const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function setup() {
	createCanvas(650, 600);
  
	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
	roof = new Roof(300,200,255,20);
	
    bob1 = new Bob(225,400);
	bob2 = new Bob(275,400);
	bob3 = new Bob(325,400);
	bob4 = new Bob(375,400);
	bob5 = new Bob(425,400);
   
    rope1 = new Rope(bob1.body,roof.body,-100, 0);
	rope2 = new Rope(bob2.body,roof.body,-50, 0);
	rope3 = new Rope(bob3.body,roof.body,0, 0);
	rope4 = new Rope(bob4.body,roof.body,50, 0);
	rope5 = new Rope(bob5.body,roof.body,100, 0);

	Engine.run(engine);
}

function draw() {
  background('lightgrey');
  rectMode(CENTER);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}




