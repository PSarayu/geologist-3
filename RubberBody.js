class RubberBody{
    constructor(x,y,radius){
        var options={
           restitution:0.3,
            friction:5,
            density:0.5
            
        }

       this.body=Matter.Bodies.circle(x, y, radius, options) 
       this.radius=radius
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var rad=this.body.radius
        var ang=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(ang)
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,rad)
        pop();
    }
}