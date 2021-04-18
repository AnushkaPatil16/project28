class MANGO{
    constructor(x,y,w,h){
        var ops = {
            restitution :0.4,
            friction :0.1,
        }

        this.mango = Bodies.rectangle(x,y,w,h,ops)
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.mango);
    }

    display(){
        var pos = this.mango.position
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}