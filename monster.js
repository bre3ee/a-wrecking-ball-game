class Monster{
    constructor(x, y, width, height) {
        var options = {
            'frictionAir':0,
            'density':0.04
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("download (3).png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("white");
        stroke("grey");
        strokeWeight(3);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}