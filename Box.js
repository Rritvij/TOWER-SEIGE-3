class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.visibilty=255
  }

  display(){
  if (this.body.speed<6){

  super.display();
}else {

World.remove(world,this.body)
push();
this.Visiblity = this.Visiblity - 5;
tint(255,this.visibilty)
pop();
}

}

score(){

  if(this.Visiblity>0 && this.Visiblity>-1005){
score++;


  }
}
}