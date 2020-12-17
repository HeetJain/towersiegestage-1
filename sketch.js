const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
    polygon_img = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20)
    ground1 = new Ground(590,315,250,20)
    block1 = new Box(500,285,30,40);
    block2  = new Box(530,285,30,40);
    block3 = new Box(560,285,30,40);
    block4 = new Box(590,285,30,40);
    block5 = new Box(620,285,30,40);
    block6 = new Box(650,285,30,40);
    block7 = new Box(680,285,30,40);
    block8 = new Box(530,245,30,40);
    block9 = new Box(560,245,30,40);
    block10 = new Box(590,245,30,40)
    block11 = new Box(620,245,30,40);
    block12 = new Box(650,245,30,40);
    block13 = new Box(560,205,30,40);
    block14 = new Box(590,205,30,40);
    block15 = new Box(620,195,30,40);
    block16 = new Box(590,155,30,40);
    polygon = Bodies.circle(90,200,20);
    World.add(world,polygon);
   

    slingshot = new Slingshot(this.polygon,{x:260,y:200});


    Engine.run(engine);
}

function draw(){
    background(255);
    ground.display();
    ground1.display();
    block1.display();
    block2.display(); 
    block3.display();
    block4.display();    
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block12.display();
    block13.display();
    block11.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();


    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

