var bgImg,bg
var prince, princeImg, princess, princessImg
var ground
var platformImg, platform2Img,platform3Img,platform4Img
var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9;
var platform10, platform11;


function preload(){
bgImg= loadImage("image.png");
princeImg = loadImage("prince/prince.png");
platform1Img = loadImage("plat1.png");
platform2Img = loadImage("plat2.png");
platform3Img = loadImage("plat3.png");
platform4Img = loadImage("plat4.png");
princessImg = loadImage("princess/princess3.png")
}

function setup(){
canvas = createCanvas(2800,350)

bg= createSprite(1200,170,10,10);
bg.addImage(bgImg)
bg.scale = 2.5

prince = createSprite(100,300,50,50);
prince.addImage(princeImg);
prince.scale = 0.2

princess = createSprite(2700,250,10,10);
princess.addImage(princessImg);
//princess.scale = 

ground = createSprite(500,340,2800,20);

platform1 = createSprite(280,250,10,10);
platform1.addImage(platform1Img)
platform1.scale = 0.6

platform2 = createSprite(480,130,10,10);
platform2.addImage(platform2Img)
platform2.scale = 0.6

platform3 = createSprite(680,290,10,10);
platform3.addImage(platform3Img)
platform3.scale = 0.6

platform5 = createSprite(990,290,10,10);
platform5.addImage(platform1Img)
platform5.scale = 0.6

platform6 = createSprite(770,130,10,10);
platform6.addImage(platform3Img)
platform6.scale = 0.6

platform7 = createSprite(1309,160,10,10);
platform7.addImage(platform2Img)
platform7.scale = 0.6

platform8 = createSprite(1600,110,10,10);
platform8.addImage(platform1Img)
platform8.scale = 0.6

platform9 = createSprite(1909,200,10,10);
platform9.addImage(platform2Img)
platform9.scale = 0.6

platform10= createSprite(2200,200,10,10);
platform10.addImage(platform3Img)
platform10.scale = 0.6

platform11 = createSprite(2506,280,10,10);
platform11.addImage(platform4Img)
platform11.scale = 0.6

}
function draw(){
  background("white");

  prince.collide(ground)
  prince.collide(platform1)
  prince.collide(platform2)
  prince.collide(platform3)
  prince.collide(platform5)
  prince.collide(platform6)
  prince.collide(platform7)
  prince.collide(platform8)
  prince.collide(platform9)
  prince.collide(platform10)
  prince.collide(platform11)


  
  drawSprites();
}

  