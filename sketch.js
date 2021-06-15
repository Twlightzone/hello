const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerB = new PlayerBase (200,500,180,150);
   compB = new cBase (1700,500,180,150);

//PLAYER VS COMP
player = new pp(200,400,60,150)
comp = new cp(1700,400,60,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerB.display();
   compB.display();


   //display Player and computerplayer
   player.display();
   comp.display();


}
