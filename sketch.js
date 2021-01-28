const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var division = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,655);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(240,650,480,20);
 
   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }

  for (var j = 40; j <=width; j=j+50) {    
       plinkos.push(new Plinko(j,40));
    }
  for (var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,120))
  } 
  for (var j = 40; j <=width; j=j+50) {    
    plinkos.push(new Plinko(j,200));
 }  
 for (var j=15; j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,280))
}

}

function draw() {
  background("black");  
  Engine.update(engine);
  if(frameCount%60===0){
    particles.push(new Particale(random(width/2-20,width/2+20),10,10))
  }
  ground.display();
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); 
   }

     for (var k = 0; k < division.length; k++) {
     division[k].display();
   }
   for (var j = 0; j < particles.length; j++) { 
     particles[j].display();
    }
}