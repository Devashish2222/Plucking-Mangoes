class Tree{
    constructor(x,y) {
        
        this.x = x;
        this.y = y;
        this.dustbinwidth = 650;
        this.dustbinheight = 650;
        this.wallthickness = 10;
        
        this.tree = loadImage('tree.png');
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        this.leftwallbody = Bodies.rectangle(0,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight);
        this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness);

        World.add(world, this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
            
    }

    display(){
     var pos = this.bottombody.position;
	 push();
     translate(pos.x, pos.y);
     fill(255);
     imageMode(CENTER);
     image(this.tree,0,-this.dustbinheight/2, this.dustbinwidth/2, this.dustbinheight);
     pop();
      }
    }