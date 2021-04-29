class CrumpledPaper {
    constructor(x,y,width,height){
        var options = {
            //isStatic : false,
            restitution :0.3 ,
            density : 1.0,
            friction :1

        }

        this.image = loadImage("paper.png")

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        World.add(world, this.body)

    }

    display(){
       push()
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       imageMode(CENTER); 
       //ellipse(0,0,20,20)
       
       image(this.image, 0, 0, this.body.width, this.body.height)
       pop()
    }

    
}