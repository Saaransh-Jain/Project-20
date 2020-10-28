var weight;
var speed;
var car;
var wall;
var deformation;
function setup() {
  createCanvas(800,400);
  wall= createSprite(700, 250, 50,300);
  wall.shapeColor="red";

  car=createSprite(200,250,50,50);
  car.shapeColor="lime";

  weight=Math.round(random(2000,4000));
  speed=Math.round(random(40,60));

}

function draw() {
  background(200);  

if(keyDown("space")){
//weight=Math.round(random(2000,4000));
//speed=Math.round(random(40,60));
car.velocityX=speed/10;
deformation=Math.round(0.5*weight*speed*speed/22500);


}
fill("black");
textSize(30);
text("Deformation =" + deformation,50,80);
if(deformation>180){
  text("LETHAL",350,80);
}

if(deformation<80){
  text("GOOD",350,80);
}

if(deformation<181 && deformation>80){
  text("AVERAGE",350,80);
}
if (car.collide(wall)){
  


}


car.collide(wall);
  drawSprites();
}