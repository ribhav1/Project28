
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var ground;
var sling;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8; 
var boyImage;
var treeImage;
var score;

function preload(){
	boyImage = loadImage("images/boy.png");
	treeImage = loadImage("images/tree.png");
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  score = 0;
	ground = new Ground(400, 690, 800, 20);

	stone = new Stone(140, 510, 30);
	sling = new SlingShot(stone.body, {x: 140, y: 510});

	mango1 = new Mango(590, 100, 10);
	mango2 = new Mango(400, 250, 10);
	mango3 = new Mango(440, 280, 10);
	mango4 = new Mango(490, 240, 10);
	mango5 = new Mango(560, 180, 10);
	mango6 = new Mango(595, 195, 10);
	mango7 = new Mango(725, 225, 10);
	mango8 = new Mango(760, 230, 10);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(200);
  
  image(boyImage, 200, 600);
  boyImage.resize(200, 340);
  
  image(treeImage, 550, 360);
  treeImage.resize(500, 700);

  stone.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);

  textSize(25);
  text("Score: " + score, 200, 100);

  console.log(mango1.body.speed);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body);
  }
}

function detectCollision(bodyA, bodyB){
  var bodyAPosition = bodyA.body.position;
  var bodyBPosition = bodyB.body.position;
  var distance = dist(bodyAPosition.x, bodyAPosition.y, bodyBPosition.x, bodyBPosition.y);
  if(distance <= bodyA.r + bodyB.r){
    Matter.Body.setStatic(bodyB.body, false);
    score = score + 1;
  }
}
