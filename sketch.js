
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var s1;
var stone
var con1
var world,boy;

function preload(){
	boy=loadImage("boy.png");
	mango1=loadImage("mango.png")
	s1=loadImage("stone.png")

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	s1=new Stone(200,200,20)
    con1=new launcher(s1.body,{x:240,y:420})
		
    var options={
		isStatic:true
	}
	mango1=new mango(1100,100,30,options);
	mango2=new mango(1150,150,30,options);
	mango3=new mango(900,200,30,options);
	mango4=new mango(1000,150,30,options);
	mango5=new mango(1200,200,30,options);
	mango6=new mango(1100,90,30,options);
	mango7=new mango(1030,95,30,options);
	mango8=new mango(1000,100,30,options);
	mango9=new mango(1060,170,30,options);
	mango10=new mango(995,190,30,options);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);


  treeObj.display();
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
  s1.display();
  con1.display();
  groundObject.display();
  detectCollision(s1,mango1)
detectCollision(s1,mango2)
detectCollision(s1,mango3)
detectCollision(s1,mango4)
detectCollision(s1,mango5)
detectCollision(s1,mango5)
detectCollision(s1,mango7)
detectCollision(s1,mango8)
detectCollision(s1,mango9)
detectCollision(s1,mango10)
  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    con1.fly()
}

function detectCollision(lstone,lmango){
stoneBodyPosition=lstone.body.position
mangoBodyPosition=lmango.body.position
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false)
}
}

function keyPressed(){
if(keyCode===32){
	Matter.Body.setPosition(s1.body,{x:240,y:420})
	con1.attach(s1.body)
}
}