class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,10,50, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //pos.x = mouseX
        //pos.y = mouseY
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //gives the thikness
        strokeWeight(3);
        //stroke("blue")
        rectMode(CENTER);
        //fill("green");
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER)
        image(this.image, 0 , 0 , this.width , this.height)
        pop();
      }
}