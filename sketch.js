const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world;
var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22, block23, block24, block25;
var polygon, slingshot;

function setup()
{
    createCanvas(1300, 600);
	engine = Engine.create();
    world = engine.world;

    //ground and platforms
    ground1 = new Ground(650,600,1300,40);
    ground2 = new Ground(500,450,300,10);
    ground3 = new Ground(900,350,250,10);

    //hexagonal stone
    polygon = new Polygon(150,400,50);
    
    //blocks

    //first tower
    //first layer
    block1 = new Block(395,320,30,40);
    block2 = new Block(425,320,30,40);
    block3 = new Block(455,320,30,40);
    block4 = new Block(485,320,30,40);
    block5 = new Block(515,320,30,40);
    block6 = new Block(545,320,30,40);
    block7 = new Block(575,320,30,40);
    //2nd layer
    block8 = new Block(425,280,30,40);
    block9 = new Block(455,280,30,40);
    block10 = new Block(485,280,30,40);
    block11 = new Block(515,280,30,40);
    block12 = new Block(545,280,30,40);
    //3rd layer
    block13 = new Block(455,240,30,40);
    block14 = new Block(485,240,30,40);
    block15 = new Block(515,240,30,40);
    //4th layer
    block16 = new Block(485,200,30,40);

    //second tower
    //1st layer
    block17 = new Block(825,280,30,40);
    block18 = new Block(855,280,30,40);
    block19 = new Block(885,280,30,40);
    block20 = new Block(915,280,30,40);
    block21 = new Block(945,280,30,40);
    //2nd layer
    block22 = new Block(855,240,30,40);
    block23 = new Block(885,240,30,40);
    block24 = new Block(915,240,30,40);
    //3rd layer
    block25 = new Block(885,200,30,40);

    //adding constraint
    slingshot = new SlingShot(polygon.body,{x:150,y:400});
}

function draw()
{
    background("black");
    Engine.update(engine);

    //text
    stroke(255);
    fill(255);
	textSize(25);
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 150, 170);
    
    //displaying ground and platforms
    ground1.display();
    ground2.display();
    ground3.display();

    //displaying stone
    polygon.display();

    //displaying blocks
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
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    //displaying connection
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(polygon.body);
    }
}