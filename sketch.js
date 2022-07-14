var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;







function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
 
  
}

function setup() {

  createCanvas(600,200)
  
  //criar um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //criar um sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //criar solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
  //numeros aleatórios sendo impressos
  //rand = função predefinida de random 
  //Math.round para pegar numeros inteiros
  //random para ser aleatório
  //fazer aparecer no console


}

function draw() {
  //definir cor do fundo
  background(220);
  
  
  
  // pular quando tecla espaço for pressionada
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //impedir que o trex caia
  trex.collide(invisibleGround);

  //chamar a função das nuvens: SpawnClouds do inngles
  criar_nuvens();

  drawSprites();
  
}

//criar a função para fazer as nuvens em posições diferentes
function criar_nuvens(){
  //fps = 120 fps
  // % - resto da divisão (modulo)
  // === se for tudo verdadeiro, ai ele executa
  if( frameCount %120 === 0 ) {
    var nuvem = createSprite(550,50,20,20);
    nuvem.velocityX= -3;
  }
 
}

