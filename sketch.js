const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgimg
var engine, world;
var ground, ball;

function preload(){
bgimg = loadImage("sky.jpg");
}
function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,600,1200,20);
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    monster = new Monster(1050,100,170,170);
    ball = new Ball(700,200,80,80);
    rope = new Rope(ball.body,{x:700,y:50});
}

function draw(){
    background(bgimg);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball.display();
    rope.display();
    monster.display();
}