const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperImg, bin, dustbinImg;

function preload(){
  dustbinImg=loadImage("dustbin.png");
}
function setup() {
	createCanvas(1350, 700);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  ground1 = new Ground(400,550,1900,15);
  bin = createSprite(950,470,200,295);
  bin.addImage(dustbinImg);
  bin.shapecolour = "green";
  bin.scale = 0.45;
  ball = new Paper(100,520,15);
  dustbin1 = new Dustbin(950,535,100,15);
  dustbin2 = new Dustbin(900,480,15,150);
  dustbin3 = new Dustbin(1000,480,15,150);

  }
function draw() {
  rectMode(CENTER);
  background("white");
  
  ball.display();
  bin.display();
 // dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  ground1.display();
  
 }
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}


