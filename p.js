class P {

    constructor(x, y){

        var options = {
            isStatic : 1
        }

        

        this.body = Bodies.circle(x, y, 10, options)
        
        
        


        

        World.add(world, this.body)
        


    }

    display(){
        fill("white")
        noStroke()
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 10)
        

    }



}