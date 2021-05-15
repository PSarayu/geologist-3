class Pebbles{
    constructor(x,y,radius){
        var options={
           restitution:0.3,
            friction:5,
            density:1
        }

       this.body=Matter.Bodies.circle(x, y, radius, options) 
       //this.radius=radius
        World.add(world,this.body)
        this.body.radius=10
    }

    display(){
        var pos=this.body.position
        var rad=this.body.radius
        push();
        fill("red")
        //ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,rad)
    }
}