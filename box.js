class Block{

    constructor(x,y){
        var a ={restitution:0.8, density:1, friction:2}
        this.body = Bodies.rectangle(x,y,50,50, a)
        World.add(world, this.body)
    }


    display(){
        var ang = this.body.angle
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(ang * 180/PI)
        rectMode(CENTER)
        rect(0,0, 50,50)
        pop()
    }





}

