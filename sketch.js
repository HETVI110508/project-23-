var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rectangle1;
var rectangle2;
var rectangle3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:false});
	World.add(world, packageBody);

	rectangle1 = new Rectangle(width/2,650,200,20);

	rectangle2 = new Rectangle(500,610,20,100);
	
	rectangle3 = new Rectangle(310,610,20,100);  
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 1 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  //keyPressed(); 

  rectMode(CENTER)  
  rectangle1.display();
  rectangle2.display();
  rectangle3.display(); 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	packageSprite.velocityY = 1;
    console.log("key pressed");
  }
}



