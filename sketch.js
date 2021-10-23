var canvas;
var music;
var b1,b2,b3,b4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    b1=createSprite(0,580,360,30)
    b1.shapeColor="blue"
    b2=createSprite(295,580,200,30)
    b2.shapeColor="orange"
    b3=createSprite(515,580,200,30)
    b3.shapeColor="pink"
    b4=createSprite(740,580,200,30)
    b4.shapeColor="green"
    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
    ball.shapeColor="white"
    ball.velocityX=5;
    ball.velocityY=10;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(b1.isTouching(ball)&& ball.bounceOff(b1)){
        ball.shapeColor="blue"
}
if(b2.isTouching(ball)&& ball.bounceOff(b2)){
    ball.shapeColor="orange"
} 
if(b3.isTouching(ball)&& ball.bounceOff(b3)){
    ball.shapeColor="pink"
}
if(b4.isTouching(ball)&& ball.bounceOff(b4)){
    ball.shapeColor="green"
}
    
    drawSprites();


}
