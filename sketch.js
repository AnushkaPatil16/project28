
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groun;
var mango1,mango2,mango3,mango4,mongo5,mango6,mango7;
var ston;
var ss;

function preload()
{
	tree = loadImage("sprites/tree.png");
  boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groun = new GROUND(800,20);

	mango1 = new MANGO(700,400,40,40);
  mango2 = new MANGO(650,400,40,40);
  mango3 = new MANGO(650,300,40,40);
  mango4 = new MANGO(600,350,40,40);
  mango5 = new MANGO(550,400,40,40);
  mango6 = new MANGO(650,350,40,40);
  mango7 = new MANGO(550,300,40,40);

  ston = new STON(150,550);

  ss = new SLINGSHOT(ston.body,{x:150,y:550});
	
  
}


function draw() {
  
  Engine.update(engine);
  background(225);

  textSize(25);
  text("Prees Space to get a second change to Play.!!",100,100);

  imageMode(CENTER);
  image(tree,610,430,350,350);
  image(boy,200,600,150,200);

  groun.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  
  ston.display();

  ss.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(ston.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  ss.fly();
}

function keyPressed(){
  if(keyCode === 32){
    ss.attach(ston.body);
    
  }
}


