var mario_img, mario_abajo,mario_espera, mario_saltar;;
var nube1_img,nube2_img;
var plataforma_img, piso;
var posicionesNubes=[];

function preload(){
    mario_img=loadAnimation("imgs/mario/mario01.png","imgs/mario/mario02.png","imgs/mario/mario03.png");
    mario_abajo=loadAnimation("imgs/mario/mario18.png");
    mario_espera=loadAnimation("imgs/mario/mario06.png");
    mario_saltar=loadAnimation("imgs/mario/mario05.png");
    nube1_img=loadImage("imgs/scene/cloud01.png");
    nube2_img=loadImage("imgs/scene/cloud02.png");
    plataforma_img=loadImage("imgs/scene/platform.png");
}

function setup(){
    canvas=createCanvas(windowWidth,windowHeight);
    mario= createSprite(10,windowHeight-100,10,10);
    mario.addAnimation("espera",mario_espera);
    mario.addAnimation("abajo",mario_abajo);
    mario.addAnimation("caminando",mario_img);
    mario.addAnimation("saltando",mario_saltar);
    mario.changeAnimation("espera");
    mario.scale=0.6;

    piso=createSprite(10,650,100,20);
    piso.shapeColor="brown";
    //piso.addImage(plataforma_img);
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
    if(keyDown("space")){   
        mario.changeAnimation("saltando");
        changePosition(mario,0,-5)
    }

    if(keyDown("d")){   
        changePosition(mario,5,0);
        mario.changeAnimation("caminando");
    }
    if(keyDown("a")){   
        changePosition(mario,-5,0);
    }
    //mario.velocityY=4;
    drawSprites();
    textSize(25);
    fill("red")
    text(mouseX + " - "+ mouseY,mouseX,mouseY);

}


function changePosition(sprite,x,y){
    sprite.x = sprite.x + x;
    sprite.y = sprite.y + y;
}
function posicionObjeto(x,y){

}


