class Paper{
    constructor(x,y,radius){
     var options = {
        
        restitution: 0.8,
        friction: 1.0,
        density: 1.0

       
     }
     this.paperImg = loadImage("paper (1).png");   
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = this.radius
    World.add(world,this.body)
    
    }
    display(){


    var pos = this.body.position
    
    push()
    translate(pos.x,pos.y)
    imageMode(RADIUS)
    strokeWeight(4)
    stroke("blue")
    fill("red");
    image(this.paperImg,0,0,this.radius,this.radius);
    pop()
    }
    }
    