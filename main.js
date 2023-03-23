var mario_img, mario_abajo,mario_espera, mario_saltar;;
var nube1_img,nube2_img;
var plataforma_img, piso;
var posicionesNubes=[];

function preload(){
    mario_img=loadAnimation("imgs/mario/mario01.png","imgs/mario/mario02.png","imgs/mario/mario03.png");
    mario_abajo=loadAnimation("imgs/mario/mario18.png");
    mario_espera=loadAnimation("imgs/mario/mario06.png");
    mario_saltar=loadAnimation("imgs/mario/mario05.png");
    marioimg=loadAnimation("imgs/mario/mario01_left.png","imgs/mario/mario02_left.png","imgs/mario/mario03_left.png");
    nube1_img=loadImage("imgs/scene/cloud01.png");
    nube2_img=loadImage("imgs/scene/cloud02.png");
    plataforma_img=loadImage("imgs/scene/platform.png");
    coin_img=loadAnimation("imgs/blocks/coin01.png","imgs/blocks/coin02.png","imgs/blocks/coin03.png","imgs/blocks/coin04.png","imgs/blocks/coin05.png");
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight);
    mario= createSprite(10,windowHeight-340,10,10);
    mario.addAnimation("espera",mario_espera);
    mario.addAnimation("abajo",mario_abajo);
    mario.addAnimation("caminando",mario_img);
    mario.addAnimation("saltando",mario_saltar);
    mario.addAnimation("caminando_a_izquierda",marioimg);
    mario.changeAnimation("espera");
    mario.scale=0.6;

    piso=createSprite(10,650,5000,20);
    piso.shapeColor="brown";
    //piso.addImage(plataforma_img);
    nube=createSprite(1000,30,150,20);
    nube.scale=2;
    nube.shapeColor="white";
    nube.addImage(nube1_img);
    nube.velocityX=-4;
}

function nubes()
{
    nube=createSprite(1000,30,150,20);
    nube.scale=2;
    nube.shapeColor="white";
    nube.addImage(nube1_img);
    nube.velocityX=-4;
}
function coins ()
{
    coin=createSprite(600,600,150,20);
    coin.scale=2;
    coin.shapeColor="yellow";
    coin.addAnimation("shine",coin_img);
    //coin.velocityX=-4;
}
function draw(){
    background("#5caeed");
    mario.changeAnimation("espera");
    if(keyDown("s")){   
        mario.changeAnimation("abajo");
        changePosition(mario,0,2)
    }
    if(keyWentUp("s")){   
        changePosition(mario,0,-2)
    }
    if(keyDown("w")){   
        mario.changeAnimation("saltando");
        changePosition(mario,0,-10)
    }

    if(keyDown("d")){   
        changePosition(mario,5,0);
        mario.changeAnimation("caminando");
    }
    if(keyDown("a")){   
        changePosition(mario,-5,0);
        mario.changeAnimation("caminando_a_izquierda");
    }
    //mario.velocityY=4;
    drawSprites();
    textSize(25);
    fill("red")
    text(mouseX + " - "+ mouseY,mouseX,mouseY);
    mario.collide(piso);
    mario.y=mario.y+6;
    //gravedad
    nubes();
    coins();
}


function changePosition(sprite,x,y){
    sprite.x = sprite.x + x;
    sprite.y = sprite.y + y;
}
function posicionObjeto(x,y){

}


