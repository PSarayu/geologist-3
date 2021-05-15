class Hammer{
    constructor(x,y,width,height){
       var options={
           density:2,
           friction:1.0,
           restitution:0.5
       }

       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       World.add(world,this.body)
    }

    display(){
        var posi=this.body.position
        posi.x=mouseX;
        posi.y=mouseY;
        var ang=this.body.angle
        push();
        translate(posi.x,posi.y)
        rotate(ang)
        fill("green")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}