
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var groundObj, leftside,rightside

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

 var ball_options = {

  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2

 }

	//Create the Bodies Here.
   ball = Bodies.circle(190,200,20, ball_options)
   World.add(world,ball)

   groundObj = new Ground (400,390,800,20);
   leftside = new Ground(500,330,10,100);
   rightside = new Ground(700,330,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  drawSprites();
 
  ellipse(ball.position.x,ball.position.y,20);

 groundObj.display();
  leftside.display();
  rightside.display();

}

function keyPressed(){

   if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball ,{x:0, y:0} , {x:40 , y:-55})

   }
}

