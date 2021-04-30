class Stone extends BaseClass{
    constructor(x,y){
        super(x,y,50);
        this.image = loadImage("stone.png");

        Matter.Body.setStatic(this.body,false);

    }
}