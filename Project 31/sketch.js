const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

var division;

var height = 100;
var world, engine;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,795,480,10);
    division = new Division(240,400,100,10);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
}

for(var k = 0; k <= length; k = k+80) {
  divisions.push(new Division(k,height - divisionHeight/2,10, divisionHeight))
}