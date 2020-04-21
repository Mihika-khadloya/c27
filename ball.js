class Ball{
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
     
}