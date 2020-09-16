//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine, world;
var ground, ball;

function setup() {
    //creates a canvas
    var canvas = createCanvas(400, 400);

    //creates a engine and world is automaticly created inside the engine
    engine = Engine.create();
    world = engine.world;

    //sets physics properties to the ground and object
    var ground_options = {
        isStatic: true
    }

    var ball_options = {
        restitution: 1
    }

    //creates a ground body and a ball body
    ground = Bodies.rectangle(200, 390, 200, 20, ground_options);
    World.add(world, ground);

    ball = Bodies.circle(200, 100, 25, ball_options);
    World.add(world, ball);

    // console.log(ball);
}

function draw() {
    //creates a black background
    background(0);

    //updates the engine
    Engine.update(engine);

    //create a rectangle in a centre
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    //create a circle(ellipse)
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 25);
}