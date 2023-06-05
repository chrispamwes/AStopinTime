const IMGS = [];
const NUM_IMGS = 202;
const interval = 200; // half a second
let currentIndex = 0;
let nextImage = 0;
let randomIndex;
let button;

var pressed = false;


function preload() {
  for (let i = 0; i < NUM_IMGS; i++) {
    IMGS[i] = loadImage(`nature/${i}.png`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  nextImage= millis() + interval; // set the initial time for the first image change
}


function draw() {
  imageMode(CENTER);
  background(0);

  //changing background that goes from night to day (light blue - dark blue)
  //changes from blue to green hue when mouse moves on Y axis
  var r = map(mouseX, 0, windowWidth, 60, 5);
  var g = map(mouseX, 0, windowWidth, 220, 5);
  var b = map(mouseY, 0, windowWidth, 250, 10);

  fill(r, g, b);
  rect(540, 117, 600, 600);
  
  fill(255);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);

  Chronos();
 
  if (mouseIsPressed){
  randomised();
 }

}






function randomised(){
  randomIndex = int(random(0, NUM_IMGS)); // generate the random index
  image(IMGS[randomIndex], width * 0.5, height * 0.5);
}

function Chronos(){
   // Check if it's time to change the image
   if (millis() >= nextImage) {
    currentIndex = (currentIndex + 1) % NUM_IMGS; // current index changes to be +1 in the array
    // % makes sure that index goes back to 0 once it reaches last image
    nextImage= millis() + interval; // adds half a second interval on top of current time
  // displays image in current index with timer
  }
  image(IMGS[currentIndex], width * 0.5, height * 0.5);
}



//cant get this to work AHHHH !!!
function weAreAGlitch(){
  if (millis() >= nextImage){
    randomIndex = int(random(0, NUM_IMGS)); // generate the random index
    nextImage= millis() + interval;
  }
  image(IMGS[randomIndex], width * 0.5, height * 0.5);
}

