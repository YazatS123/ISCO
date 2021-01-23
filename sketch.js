var car, wall, check;
var speed, weight, deform;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  car.velocityX = speed;
  car.shapeColor = "white";
  check = 0;
}
function draw() {
  background("black");
  fill("White")
  text("Speed: " + speed, 400, 20);
  text("Weight: " + weight, 400, 30);
  if(car.x + car.width/2 > wall.x - wall.width/2 || check === 1){
    car.velocityX = 0;
    deform = (weight/2 * speed * speed)/22500;
    if(deform > 180){
      text("Deformation: lethal", 400, 40);
      text("Deformation: " + deform, 400, 50);
      car.shapeColor = "red";
      car.x = 1445;
    }
    else if(deform < 180 && deform > 80){
      text("Deformation: average", 400, 40);
      text("Deformation: " + deform, 400, 50);
      car.shapeColor = "yellow";
      car.x = 1445;
    }
    else if(deform < 80){
      text("Deformation: good", 400, 40);
      text("Deformation: " + deform, 400, 50);
      car.shapeColor = "green";
      car.x = 1445;
   }
   check = 1;
  }
  drawSprites();
}