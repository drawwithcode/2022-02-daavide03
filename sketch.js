var clicks = 0;
var mX;
var mY;
var starX;
var starY;

var starX2 = 1000;
var starY2 = 200;

var starX3 = 1000;
var starY3 = 200;

let k = 8;
let k2 = k/2;
let savedX = [];
let savedY = [];
let starss = [];
var testo1;
var testo2;
var testo3;
var testo4;

function mousePressed () {
  clicks++;
  if (clicks % 2==0 & clicks <= 6) {savedY.push(pmouseY);console.log(savedY);} //salva parametri posizione mouseX delle 3 stelle in un array
  else if (clicks % 2 == 1 & clicks <= 6 ) {savedX.push(pmouseX); console.log(savedX);}; //salva parametri posizione mouseY delle 3 stelle in un array
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  var rndmX = random(0, - windowWidth/2);
  var rndmY = random(0, - windowHeight/2);
  for (let i=0;i<20;i++){
    var starssX = random (savedX);
    var starssY = random (savedY);
    starss[i] = new star (starssX, starssY,"black","black",0,rndmX,rndmY);
  }
}

function draw() {

  background(220);
  testo1 = new testo ("costruisci le stelle per il tuo wallpaper. Muovi il mouse per impostare il raggio dei punti blu");
  testo2 = new testo ("Ora imposta gli altri punti");
  testo3 = new testo("Ora fai lo stesso per le altre stelle");
  testo4 = new testo("Questa parte per ora non funziona :(");



  if (clicks == 0) {starX = mouseX; starY = mouseY; mX = mouseX;color1=("blue"); color2=("black");
   testo1.showtext();
  }
  else if (clicks == 1) {starX = mX; starY = mouseY; mY = mouseY; starY=mY; color1=("black"); color2=("blue");
   testo2.showtext();}

  else if (clicks == 2) {starX2 = mouseX; starY2 = 200; mX = mouseX; color1=("blue"); color2=("black");
  testo3.showtext();}
  else if (clicks == 3) {starX2 = mX; starY2 = mouseY; mY = mouseY; color1=("black"); color2=("blue");
  testo3.showtext();}
  
  else if (clicks == 4) {starX3 = mouseX; starY3 = 200; mX = mouseX; color1=("blue"); color2=("black");
  testo3.showtext();}
  else if (clicks == 5) {starX3 = mX; starY3 = mouseY; mY = mouseY; color1=("black"); color2=("blue");
  testo3.showtext();};

  

  if (clicks <= 5) {


  star1 = new star(starX/k, starY/k2,color1,color2,1.5,0,0);
  star1.show();

  star2 = new star(starX2/k, starY2/k2,color1,color2,4,0,0);
  star2.show();

  star3 = new star(starX3/k, starY3/k2,color1,color2,6.5,0,0);
  star3.show();
  }

  else {
    
    for (let i=0; i<3; i++) {
    starss[i].show();
    testo4.showtext();
  }
    // for (i=0;i<3;i++){
    //   star['i'+3] = new star (savedX,bc/k2,"black","black",1+i)
    //   star['i'+3].show();
    // }
  }
 
  

  // //NUMERI
  // noStroke();
  // fill(0);
  // textSize(80);
  // textAlign(CENTER, CENTER);
  // text(clicks, width/2, height/2);

}


class star {
  constructor(outerR,innerR,color1,color2,P,rndmX,rndmY){
    
    this.outerR = outerR;
    this.innerR = innerR;
    this.a = this.outerR - this.innerR;
    this.b = this.outerR + this.innerR;
    this.D = this.outerR * 2;
    this.color1 = color1;
    this.color2 = color2;
    this.P = P;
    this.rndmX = rndmX;
    this.rndmY = rndmY;
  }

  show() {

    fill(230)
    push();
    translate (-this.outerR,-this.outerR);
    translate (windowWidth/8 * this.P,windowHeight/2);
    translate (this.rndmX,this.rndmY)

    //LINEE
    stroke("black");

    beginShape();

    vertex (this.outerR,0);
    vertex (this.a,this.a);
    vertex (0,this.outerR);
    vertex (this.a,this.b);
    vertex (this.outerR,this.D);
    vertex (this.b,this.b);
    vertex (this.D,this.outerR);
    vertex (this.b,this.a);
    vertex (this.outerR,0);

    endShape();

    //PUNTI

    strokeWeight (7);
    
    // PUNTI ESTERNI
    stroke(this.color1);

    point(this.outerR,0);
    point (0,this.outerR);
    point (this.outerR,this.D);
    point (this.D,this.outerR);

    //PUNTI INTERNI

    stroke(this.color2);

    point(this.a,this.a);
    point (this.a,this.b);
    point (this.b,this.b);
    point (this.b,this.a);

    strokeWeight(1);

    pop();
  }

}

class testo {
  constructor (text){
    this.text = text
  }
  showtext() {
    noStroke();
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, height/8 * 7);
  }
}
