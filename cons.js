class launcher {
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            length:40,
            stiffness: 0.005
        }
        this.bodyA=body
        this.pointB=anchor
        this.launcher=Constraint.create(options)
        World.add(world,this.launcher)
    }
     attach(body){
         this.launcher.bodyA=body
     }

     fly(){
         this.launcher.bodyA=null;
     }

    display(){
        if(this.launcher.bodyA){
        var pointA=this.bodyA.position
        var pointB=this.pointB
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        }
    }
}
