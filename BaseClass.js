class BaseClass{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution:0,
            friction:1,
            
        }

        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);

        this.radius = r;

        this.image = loadImage("tree.png");

    }

    display(){
        push();

        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);

        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);

        pop();
    }
}