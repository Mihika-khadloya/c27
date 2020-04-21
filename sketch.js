const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine;
var world;
var ball,base;
var chain;



 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    ball = new Ball(200,200,35);
    base = new Base(200,130,250,15);
    chain = new Chain(ball.body,base.body);
}

 

 
function draw(){
    Engine.update(engine);
    background("white");

    
    ball.display();
    base.display();
    chain.display();
   
}
    