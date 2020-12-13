const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(500,350,70,70);
    box2 = new Box(700,350,70,70);
    box3 = new Box(500,260,70,70);
    box4 = new Box(700,260,70,70);
    box5 = new Box (600,170,70,70);

    ground = new Ground(500,height,1000,20);
    pig1= new Pig(600,350);
    log1= new Log (600,280,280,PI/2)
    pig2= new Pig(600,260);
    log2= new Log (600,190,280,PI/2);
    log3 = new Log (550,170,150,PI/7);
    log4 = new Log (650,170,150,-PI/7)
    bird1= new Bird (100,100)


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display ();
}