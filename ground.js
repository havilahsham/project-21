class Ground {
constructor(x,y,w,h){

var ground_options = {
isStatic : true
}

this.ground = Bodies.rectangle(x,y,w,h,ground_options);
this.w = w;
this.h = h;
World.add(world, this.ground)

}

display(){

    var pos = this.ground.position

    push();
    fill("brown")
    rectMode(CENTER);
  rect(pos.x,pos.y,this.w,this.h)
   pop();

}







}
