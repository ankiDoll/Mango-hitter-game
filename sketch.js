
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg;
var stone;
var sling;

function preload()
{
	boyImg = loadImage("boy.png");
	backgroundTmg = loadImage("bg.png.jpg");
	treeImg = loadImage("tree.png");
	cloudImg = loadImage("badal.png");
}

function setup() {
	createCanvas(1370, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(210,440);
	ground = new Ground(700,590,1390,50);

	//tree = new Tree(900,300);

	mango1 = new Mango(790,200,50);
	mango2 = new Mango(930,150,50);
	mango3 = new Mango(1170,190,50);
	mango4 = new Mango(1010,50,50);
	mango5 = new Mango(1030,120,50);
	mango6 = new Mango(880,100,50);
	mango7 = new Mango(1100,170,50);
	mango8 = new Mango(1050,220,50);
	mango9 = new Mango(960,180,40);
	mango10 = new Mango(910,240,50);

    sling = new Sling(stone.body);

	Engine.run(engine);
	console.log(mango2.body.position);

	
}


function draw() {
  rectMode(CENTER);
  background(backgroundTmg);
  
  imageMode(CENTER);
	image(boyImg,300,500,280,280);
	image(treeImg,950,300,600,600);
	image(cloudImg,100,70,1300,80);

	stone.display();
	ground.display();
	//tree.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();

	istouching(mango1,stone);
	istouching(mango2,stone);
	istouching(mango3,stone);
	istouching(mango4,stone);
	istouching(mango5,stone);
	istouching(mango6,stone);
	istouching(mango7,stone);
	istouching(mango8,stone);
	istouching(mango9,stone);
	istouching(mango10,stone);

	textSize(40);
	fill("red");
	text("Press space for a second CHANCE !",40,100);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	sling.fly(); 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:210,y:440});
		sling.attach(stone.body);
	}
}

function istouching(obj1,obj2){
	var distance = dist(obj1.body.position.x,obj1.body.position.y,obj2.body.position.x,obj2.body.position.y);

	if(distance <= obj1.radius + obj2.radius ){
		Matter.Body.setStatic(obj1.body,false);
	}

}

