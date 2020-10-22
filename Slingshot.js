class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
        Body.setPosition(this.sling.bodyA, {x: 140, y: 510});
        Body.setVelocity(this.sling.bodyA, {x: 0, y: 0});
      }
    fly(){
        this.sling.bodyA = null;
    }
}
