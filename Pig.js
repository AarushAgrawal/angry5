class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }
   display() {
    if(this.body.speed<4){
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-10;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
    //console.log(this.body.speed)

   }

};