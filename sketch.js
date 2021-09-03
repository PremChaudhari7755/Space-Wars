function preload() {
  //load game assets
 rabbit = loadImage('https://cdn.pixabay.com/photo/2014/04/02/14/07/rocket-306209_1280.png')
 tar = loadImage('https://cdn.pixabay.com/photo/2016/09/30/19/22/earth-1706130_1280.png')
 stone = loadImage('https://cdn.pixabay.com/photo/2018/08/08/07/34/spaceship-3591503_1280.png')
 snakebg = loadImage('https://cdn.pixabay.com/photo/2020/05/17/11/54/cartoon-5181269_1280.png')
 bg = loadImage('https://cdn.pixabay.com/photo/2020/12/09/07/34/rocket-5816647_1280.png')
}


function setup() {
  createCanvas(600,600);
  edge = createEdgeSprites()
  player = createSprite(100,550,40,40);
  target = createSprite(300,0,50,50)
  snakegroup = new Group()
  snakegroup2 = new Group()

  obs1 = createSprite(400,500,80,20)
  obs1.velocityX=5
  obs2 = createSprite(400,400,150,20)
  obs2.velocityX=-5
  obs3 = createSprite(400,300,100,20)
  obs3.velocityX=5
  obs4 = createSprite(400,200,180,20)
  obs4.velocityX=-5
  obs5 = createSprite(400,100,130,20)
  obs5.velocityX=5
  player.shapeColor = "red"
  target.shapeColor = "white"
  obs1.shapeColor = "yellow"
  obs2.shapeColor = "blue"
  obs3.shapeColor = "purple"
  obs4.shapeColor = "green"
  obs5.shapeColor = "brown"
}

function draw() {
  background(bg);  
  obs1.bounceOff(edge[1]);
  obs1.bounceOff(edge[0]);
  obs2.bounceOff(edge[1]);
  obs2.bounceOff(edge[0]);
  obs3.bounceOff(edge[1]);
  obs3.bounceOff(edge[0]);
  obs4.bounceOff(edge[1]);
  obs4.bounceOff(edge[0]);
  obs5.bounceOff(edge[1]);
  obs5.bounceOff(edge[0]);
  player.addImage(rabbit)
  player.scale=0.05
  target.addImage(tar)
  target.scale=0.09
  obs1.addImage(stone)
  obs1.scale=0.04
  obs2.addImage(stone)
  obs2.scale=0.04
  obs3.addImage(stone)
  obs3.scale=0.04
  obs4.addImage(stone)
  obs4.scale=0.04
  obs5.addImage(stone)
  obs5.scale=0.04
  generatesnakes()
  generatesnakes2()


  drawSprites();

  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(player.isTouching(target)){
    text("YOU WON",300,300,100,100)
    
  }
  if(player.isTouching(obs1)){
    
    text("YOU LOOSE",300,300,50,50);
    player.x=100;
    player.y=550
  }
  if(player.isTouching(obs2)){
    text("YOU LOOSE",300,300,50,50)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs3)){
    text("YOU LOOSE",300,300,50,50)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs4)){
    text("YOU LOOSE",300,300,50,50)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs5)){
    text("YOU LOOSE",300,300,50,50)
    player.x=100;
    player.y=550
    
  }
  
  if(player.isTouching(snakegroup)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(snakegroup2)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }

  drawSprites()
}

function generatesnakes(){
  if(frameCount % 120 === 0){
    var snakes = createSprite(0,430,100,10)
    snakes.velocityX = 3
    snakes.addImage(snakebg)
    snakes.scale=0.08
    snakegroup.add(snakes)
  }
}

function generatesnakes2(){
  if(frameCount % 120 === 0){
    var snakes = createSprite(600,150,100,10)
    snakes.velocityX = -3
    snakes.addImage(snakebg)
    snakes.scale=0.08
    snakegroup2.add(snakes)
  }
}
