var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //Code for the fixed blocks at the bottom of the canvas
    block1 = createSprite(500,180,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(200,480,200,30);
    block2.shapeColor = "yellow";

    block3 = createSprite(300,380,200,30);
    block3.shapeColor = "pink";

    block4 = createSprite(400,280,200,30);
    block4.shapeColor = "green";

    //Code for the moving ball 
    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 3;
}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "yellow";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink";
        music.play();
    }

    //write code to bounce off ball from the block4
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
    }
    drawSprites();
}
