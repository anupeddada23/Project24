
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var redB, redS1, redS2;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	//dustbinObj=new Dustbin(1200,650);
	//Create the Bodies Here.

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	  redB=createSprite(400+800,640,200,20);
	  redB.shapeColor=color(255,0,0);
	  redS1=createSprite(500+800,600,20,100);
	  redS1.shapeColor=color(255,0,0);
	  redS2=createSprite(300+800,600,20,100);
	  redS2.shapeColor=color(255,0,0);
	
  
	  Engine.run(engine);
	  Render.run(render);
	

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(110);
   
	
	paperObject.display();
	groundObject.display();
	//dustbinObj.display();
  
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}

