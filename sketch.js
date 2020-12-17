
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var d1, d2, d3;
var ground;
var paper;
var dustbin;



function preload()
{
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  d1 = new Dustbin(1300,665,170,20);
  d2 = new Dustbin(1205,615,20,120);
  d3 = new Dustbin(1395,615,20,120);
		
ground = new Ground(800,685,1600,20);

paper = new Paper(400,360,5);
var render = Render.create({
   element: document.body,
    engine: engine,
     options: { 
       width: 1200,
        height: 700,
         wireframes: false }
         });
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
 d1.display();
 d2.display();
 d3.display();
 ground.display();
 paper.display();

 image(dustbin,1165,455,270,220)

 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
}

}

