const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;



var myEngine, myWorld;

var box1,box2;
var ground;

function setup() {
  createCanvas(800,400);
myEngine=Engine.create();    // myEngine.world
myWorld=myEngine.world;




ground = new Ground(400,height,800,40);

box1 = new Box(325,100,50,50);
box2 = new Box(300,250,50,50);
}

function draw() {
  background(255,255,255);
Engine.update(myEngine);
  

   box1.display();
   box2.display();
   ground.display();
}