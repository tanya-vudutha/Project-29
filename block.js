class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          var pos = this.body.position;
          stroke("blue")
          
          rectMode(CENTER);
          fill("cyan");
          rect(pos.x, pos.y, this.width, this.height);
        }     
        else{
          World.remove(world,this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          rect(this.body.position.x, this.body.position.y, this.width, this.height);
          pop();
        }
      }
}