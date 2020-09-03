const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var bird, slingShot;
var ground2;

var score = 0;

function preload() {
    
getBackgroungImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
      ground2 = new Ground(600,500,370,20);

    box1 = new Box(600,400,70,70);
    box2 = new Box(670,400,70,70);
    box3 = new Box(530,400,70,70);
    box4 = new Box(740,400,70,70);
    box5 = new Box(460,400,70,70);
    
    box6 = new Box(635,325,70,70);
    box7 = new Box(705,325,70,70);
    box8 = new Box(565,325,70,70);
    box9 = new Box(495,325,70,70);
    box10 = new Box(530,255,70,70);
    box11 = new Box(600,255,70,70);
    box12 = new Box(670,255,70,70);
    box13 = new Box(565,185,70,70);
    box14 = new Box(635,185,70,70);
     box15 = new Box(595,115,70,70);
   
   
  

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:150, y:500});
}

function draw(){
  if(backgroundImg){

background(backgroundImg);

    }
    
    
     noStroke();

  textSize(20);
  
   text("Score :"+score,900,50);
    
    Engine.update(engine);

     
    strokeWeight(4);

    box1.display();
     box1.score();
    box2.display();
     box2.score();
    ground.display();
      ground2.display();
   
  

    box3.display();
     box3.score();
    box4.display();
     box4.score();
   box5.display();
    box5.score();
    box6.display();
     box6.score();
    box7.display();
     box7.score();
     box8.display();
      box8.score();
    box9.display();
     box9.score();
     box10.display();
      box10.score();
    box11.display();
     box11.score();
     box12.display();
      box12.score();
    box13.display();
     box13.score();
     box14.display();
      box14.score();
      box15.display();
       box15.score();
  
  

    bird.display();
   
    //log6.display();
    slingshot.display();    

    
}
function keyPressed(){

  if(keyCode===32){

    slingshot.attach(bird.body);
  }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

async function getBackgroungImg(){

var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON= await response.json();

var datetime= responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hour>=06 && hour<=19) {

bg="sprites/bg.png";
 }else{

bg="sprites/bg2.jpg";


}
backgroundImg = loadImage(bg);
console.log(backgroundImg);

}