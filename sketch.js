var clicks = 0;

var starX; var starY;
var starX2 = 1000; var starY2 = 200;
var starX3 = 1000; var starY3 = 200;

var mX; var mY;

let savedX = [];
let savedY = [];

let starss = [];

let k = 8; let k2 = k/2;

var testo1;
var testo2;
var testo3;
var testo4;

function mousePressed () {
  clicks++;
  if (clicks % 2==0 & clicks < 6) {savedY.push(pmouseY);console.log(savedY);} //salva parametri posizione mouseX delle 3 stelle in un array
  else if (clicks % 2 == 1 & clicks < 6 ) {savedX.push(pmouseX);console.log(savedX);} //salva parametri posizione mouseY delle 3 stelle in un array
  else {noLoop()};
  (redraw());

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  if (clicks <= 5) {background(220);}
  else {background("black");}
  }


function draw() {

  background(220);
  testo1 = new testo ("costruisci le stelle per il tuo wallpaper. Muovi il mouse per impostare il raggio dei punti blu","black");
  testo2 = new testo ("Ora imposta gli altri punti","black");
  testo3 = new testo("Ora fai lo stesso per le altre stelle","black");
  testo4 = new testo("Clicca per cambiare il cielo","red");



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
  push();
  // star1.allinea();
  pop();

  star2 = new star(starX2/k, starY2/k2,color1,color2,4,0,0);
  star2.show();
  push();
  // star2.allinea();
  pop();

  star3 = new star(starX3/k, starY3/k2,color1,color2,6.5,0,0);
  star3.show();
  push();
  // star3.allinea();
  pop();
  }
  else {
    background(0);
    for (let w=0; w<100; w++){
      // background(0);
      // console.log(savedY);
      // console.log(savedX);
      const dim = random(-2,3)
      const rndmX = random(0, windowWidth);
      const rndmY = random(0, windowHeight);
      starss[w] = new stelline ((random(savedX)/k)/10,(random(savedY)/k2)/10,"black","black",rndmX,rndmY,dim);
      starss[w].showstelline();
      testo4.showtext();
      // starss[w] = new stelline (10,20,"black","black",rndmX,rndmY);
      // console.log(starss);
    }
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
    translate ((windowWidth/8) * this.P,windowHeight/2);
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

  // allinea(){
  // }
}


class stelline {
  constructor(outerR,innerR,color1,color2,rndmX,rndmY,dim){
    
    this.outerR = outerR;
    this.innerR = innerR;
    this.a = this.outerR - this.innerR;
    this.b = this.outerR + this.innerR;
    this.D = this.outerR * 2;
    this.color1 = color1;
    this.color2 = color2;
    this.rndmX = rndmX;
    this.rndmY = rndmY;
    this.dim = dim;
  }

  showstelline() {

    fill("white")
    push();
    translate (-this.outerR,-this.outerR);
    translate (this.rndmX,this.rndmY)
    scale (this.dim,this.dim);

    //LINEE
    stroke("white");

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

    // strokeWeight (8);
    
    
    // // PUNTI ESTERNI
    // stroke(this.color1);

    // point(this.outerR,0);
    // point (0,this.outerR);
    // point (this.outerR,this.D);
    // point (this.D,this.outerR);

    // //PUNTI INTERNI

    // stroke(this.color2);

    // point(this.a,this.a);
    // point (this.a,this.b);
    // point (this.b,this.b);
    // point (this.b,this.a);

    // strokeWeight(1);

    pop();
  }

}


class testo {
  constructor (text,colore){
    this.text = text
    this.colore = colore;
  }
  showtext() {
    noStroke();
    fill(this.colore);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, height/8 * 7);
  }
}

