
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball
	 var ball_options = {
		isStatic:false, 
		resititution:0.3,
		friction:0, 
		density:1.2
	 }

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  function keyPressed() {
if(keyCode === UP_ARROW)
Matter.Body.applyForce

  }

  drawSprites();
 
}



