class Ball {

    constructor(x, y){

        var options = {
            restitution:0.4,
            density : 0.5
        }

        

        this.body = Bodies.circle(x, y, 20, options)
        
        
        


        

        World.add(world, this.body)
        


    }

    display(){
        fill("green")
        noStroke()
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, 20)
        

    }



}