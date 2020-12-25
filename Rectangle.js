class Rectangle{
    constructor (x,y,width,height){
        var rectangle_options = {
            isStatic:true
        }
       this.body = Bodies.rectangle(x,y,width,height,rectangle_options);
        this.height = height;
        this.width = width;
        World.add(world,this.body)
    }
    display(){
        
        
        fill(255,0,0);
        rectMode(CENTER);  
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}