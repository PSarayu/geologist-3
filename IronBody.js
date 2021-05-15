class IronBody{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0,
            mass:2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }


    display(){
        var posit= this.body.position
        var angl=this.body.angle
        push();
       translate(posit.x,posit.y);
       rotate(angl)
       fill("orange")
       rectMode(CENTER)
       rect(0,0,this.width,this.height)
       pop();
    }
}