const IMGS = [];
const NUM_IMGS = 202;
let randomIndex;
let nextImageTime;





//50, 200, 250
//20,20,100
  var r=50;
  var g=200;
  var b=250;

function preload() {
  for (let i = 0; i < NUM_IMGS; i++) {
    IMGS[i] = loadImage(`nature/${i}.png`);
  }
}

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  imageMode(CENTER);
  background(0);

  r=map(mouseX,0,windowWidth,60,5);
  g=map(mouseX,0,windowWidth,220,5);
  b=map(mouseY,0,windowWidth,250,10);

 fill(r,g,b);


  rect(540,225,600,600);
  
  //to see mouse co-ordinates
  // fill(255);
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  // stroke(0);

//  randomIndex = int(random(0, NUM_IMGS)); // Generate a random index
  
//   image(IMGS[randomIndex], width * 0.5, height * 0.5);

  image(IMGS[constrain(int(map(mouseX, 0, width, 0, NUM_IMGS)), 0, NUM_IMGS)], width * 0.5, height * 0.5);
}
  