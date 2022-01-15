const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

var c

var edges
function setup(){
    canvas = createCanvas(1640,890);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,200)

    ground = new Ground(600,840,400,200)

    stand = new Ground (1000,550,100,20)

    stand1 = new Ground (600, 590, 100, 20)

    stand2 = new Ground (800,500, 100, 20)

    stand3 = new Ground (700,450, 100, 20)

    stand4 = new Ground (890,400, 100, 20)

    stand5 = new Ground (600,350, 100, 20)

    stand6 = new Ground (700, 225, 100, 20)

    
    winStand = new Ground (800,100,100,20)
    

    invisibleGround = new Ground(960, 900, 2000000,20)

    
}
    function draw(){
        background(0);
        Engine.update(engine);
        box1.display();
        ground.display();

        //visible stands
        stand3.display();
        stand4.display();
        stand5.display();
        stand1.display();
        stand2.display();
        stand6.display();
        WinStand.display();


        textSize(42)
        fill('green')
        text("There are four stands find them if you find them all you win",300,50)

        
        fill('yellow')
        winStand.display();

        
      console.log(fill)

    }
    function keyPressed(){
        
        //control the box
        if (keyCode===39)
        {
            
            Matter.Body.setVelocity(box1.body,{x:1.3,y:0})
            
        }

        if (keyCode===37)
        {
            
            Matter.Body.setVelocity(box1.body,{x:-1.3,y:0})
            
        }

        if (keyCode===38)
        {
            
            Matter.Body.setVelocity(box1.body,{x:0,y:-8})
            
        }

        if(keyCode === 90)
        {
            Matter.Body.applyForce(box1.body,box1.body.position,{x:25,y:-25})
            
        }

        if(keyCode === 88)
        {
            Matter.Body.applyForce(box1.body,box1.body.position,{x:-25,y:-25})

        }
    }