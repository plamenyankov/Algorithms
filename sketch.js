var tree;
var rocket;
function setup()
{
	createCanvas(600,400);
    background(51);
    
    rocket = {
        x:290,
        y:395,
        trust:false,
        drawRocket: function()
        {
            fill(180);
            noStroke();
            
            beginShape();
            vertex(this.x,this.y);
            vertex(this.x,this.y-30);
            vertex(this.x+5,this.y-40);
            vertex(this.x+10,this.y-30);
            vertex(this.x+10,this.y);            
            endShape(CLOSE);
            
            fill(255,0,0);
            beginShape();
            vertex(this.x,this.y - 10);
            vertex(this.x-12,this.y);
            vertex(this.x,this.y);
            endShape(CLOSE);
            
            fill(255,0,0);
            beginShape();
            vertex(this.x+10,this.y - 10);
            vertex(this.x+22,this.y);
            vertex(this.x+10,this.y);
            endShape(CLOSE);            
        }
    }
    
    rocket.drawRocket();
    
    if(rocket.trust)
    {
        console.log("keyCode");  
        rocket.y -= 1;
    }
    
    
    
    
    tree = new Tree();
    
    for(var i = 0; i < 10;i++)
    {
    tree.addValue(round(random(0,100)));
    }
    console.log(tree);
    tree.traverse();
}

function draw()
{
    if(keyIsPressed)
    {
        console.log(keyCode);  
        console.log(rocket);  
    }

    if(keyIsPressed && keyCode == 38)
    {
        console.log(keyCode);  
        rocket.trust = true;
    }
    
    
}



function Tree()
{
    this.root = null;
}

Tree.prototype.addValue = function(val)
{
    var n = new Node(val);
    
    if(this.root == null)
    {
        this.root = n;
    }
    else
    {
        this.root.addNode(n);
    }
}

Node.prototype.visit = function()
{
    if(this.left != null)
    {
        this.left.visit();
    }
    console.log(this.value);
    
    if(this.right != null)
    {
        this.right.visit();
    }
}

Tree.prototype.traverse = function()
{
    this.root.visit();
}

// constructor function
function Node(val,x,y)
{
    this.value = val;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;
}

Node.prototype.addNode = function(val)
{
    
        if(val.value < this.value)
        {
            if(this.left == null)
            {
                this.left = val;
            }
            else
            {
                this.left.addNode(val);
            }
            
        }
        else
        {
            if(this.right == null)
            {
                this.right = val;
            }        
            else
            {
                this.right.addNode(val);
            }
        }
        
}
