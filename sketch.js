var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload()
{
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1050,600);

    block1 = createSprite(100,580,250,30);
    block1.shapeColor = "blue";

    block2 = createSprite(400,580,280,30);
    block2.shapeColor = "orange";

    block3 = createSprite(700,580,250,30);
    block3.shapeColor = "red";

    block4 = createSprite(1000,580,280,30);
    block4.shapeColor = "green";


    
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=4;

}

function draw()
 {
    background(rgb(169,169,169));
    console.log("hi");
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(block1);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) || ball.bounceOff(block1))
    {
        ball.shapeColor = "blue";
        music.play();
        console.log("the ball hit the blue block");
    }

    if(block2.isTouching(ball))
    {
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        console.log("the ball hit the orange block");
    }

    if(block3.isTouching(ball) || ball.bounceOff(block3))
    {
        ball.shapeColor = "red";
        music.play();
        console.log("the ball hit the red block");
    }

    if(block4.isTouching(ball) || ball.bounceOff(block4))
    {
        ball.shapeColor = "green";
        music.play();
        console.log("the ball hit the green block");
    }
    

    drawSprites();
}

