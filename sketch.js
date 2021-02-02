const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

let ar = []
let a = []

var pres = 1;

var mx = mouseX
var my = mouseY



function preload(){

 

}


function setup() {
  createCanvas(620,1000);
  engine = Engine.create()
  world = engine.world
  
  for(let h = 200; h < 700; h += 140){
  for(var i = 30; i < width; i += 70){
  ar.push(new P(i, h))
  }
}

for(let h = 270; h < 700; h += 140){
  for(var i = 65; i < width; i += 70){
  ar.push(new P(i, h))
  }
}

for(var i = 10; i < width; i += width / 5 - 24){
  a.push(new Ground(i, 900, 10, 200))
  }

b1 = new Ball(-100, 100)
b2 = new Ball(-100, 100)
b3 = new Ball(-100, 100)
b4 = new Ball(-100, 100)
b5 = new Ball(-100, 100)

g = new Ground(310, 1000, 620, 20)

l = new Ground(0, 500, 20, 1000)
r = new Ground(620, 500, 20, 1000)

}

function draw() {
  background("black");  
  Engine.update(engine)
  
  for(let i = 0; i < ar.length; i++){
  ar[i].display()
  }

  for(let i = 0; i < a.length; i++){
    a[i].display()
    }

    text("Press any key to play!", 20, 20)

  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  g.display()


  

}

function keyPressed(){
  

  
  if(pres == 1){
  Matter.Body.setPosition(b1.body, {x:mouseX,y:mouseY})
  }
  if(pres ==2){
    Matter.Body.setPosition(b2.body, {x:mouseX,y:mouseY})
  }
  if(pres ==3){
    Matter.Body.setPosition(b3.body, {x:mouseX,y:mouseY})
  }
  if(pres == 4){
    Matter.Body.setPosition(b4.body, {x:mouseX,y:mouseY})
  }
  if(pres == 5){
    Matter.Body.setPosition(b5.body, {x:mouseX,y:mouseY})
  }





  pres++
  
}

