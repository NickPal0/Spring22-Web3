let posX;
let posY; 

let velX;
let velY;

let radius;
let circleClr;

//ui
let sliderHue;
let sliderSize;
let clickCounter;
let clickMiss;

function setup(){
    let myCanvas = createCanvas(800,600);
    myCanvas.parent('canvasParent');

    colorMode(HSB, 360, 100, 100);
    
    sliderHue = createSlider(0,360,0,15);
    sliderHue.parent('canvasUI');
    sliderHue.style('width','100px');

    sliderSize = createSlider(0,360,0,15);
    sliderSize.parent('canvasUII');
    sliderSize.style ('width','100px');

    posX = width/2;
    posY = height/2;
    
    velX = 3;
    velY = 2;

    sliderSize = 0;

    radius = 50 + sliderSize;
    circleClr = color(205,50,211);

    clickCounter = 0;
    clickMiss = 0;
}

function draw(){
    background(40, 50, 102);

    noStroke();
    circleClr= color(sliderHue.value(),80,100)
    fill(circleClr)
    circle(posX ,posY , radius * 2);
    if(posX + radius >= width || posX - radius <= 0){
        velX = velX * -1
    }
    if(posY + radius >= height || posY - radius <= 0){
        velY = velY * -1
    }
    posX += velX;
    posY += velY;

    noFill();
    stroke(270,70,0);
    strokeWeight(5);
    rect(5,5,70,61);

    textSize(24);
    strokeWeight(2);
    fill(0,0,100)
    text(clickCounter, 28, 28);


    textSize(24);
    strokeWeight(2);
    fill(0,0,100)
    text(clickMiss, 28, 60);


}// end of draw

function mouseReleased(){
    if(dist(mouseX, mouseY, posX, posY) < radius ){
        
        clickCounter++;
        if(velX > 0){
            velX++;
        }
        else{
            velX--;
        }

        if(velY > 0){
            velY++;
        }
        else{
            velY--;
        }
        
    }
    else{
        clickMiss++;
    }
}