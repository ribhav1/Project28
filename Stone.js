class Stone{
    constructor(x, y, r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      
      display(){
        var pos = this.body.position;
        this.image.resize(50,50);
        image(this.image, pos.x, pos.y);
     
      }
}