class Sling{
    constructor(bodyA){
    var options = {
		bodyA: bodyA,
		pointB: {x:210,y:440},
		stiffness:0.01,
		length:10
    }
    
	this.sling  = Constraint.create(options);
	World.add(world,this.sling);


	}

    fly(){
        this.sling.bodyA = null
    }

	attach(bodyA){
		this.sling.bodyA = bodyA;
	}
}