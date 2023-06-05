//mushroom classication CSV file downloaded from https://www.kaggle.com/datasets/uciml/mushroom-classification

//csv file 'antioedipus' downloaded from comments section of https://www.youtube.com/watch?v=cwqbu0slcc0&t=1s using netlytic

const IMGS = [];
const NUM_IMGS = 202;
const interval = 100; // interval between frames in stop motion
let currentIndex = 0;
let nextImage = 0;
let randomIndex;
let mushrooms;
let antioedipus;

var pressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // load images one by one, easily done with for loop
  for (let i = 0; i < NUM_IMGS; i++) {
    IMGS[i] = loadImage(`nature/${i}.png`);
  }

  // load csv file of mushrooms
  mushrooms = loadTable("data/mushrooms.csv", 'csv', 'header');
  //load csv file of 
  antioedipus = loadTable("data/antioedipus.csv", 'csv', 'header');

  nextImage = millis() + interval; // set the initial time for the first image change
}

function draw() {
  imageMode(CENTER);
  background(0);

  //antioedipus csv named 'the mass' to refer to 'mass opinion' -- what the people think as
  //csv is a datafile extracted from youtube comments rather than information on the video itself
  let theMass = antioedipus.getColumn('text');
  let theMassRow = antioedipus.getRowCount();
  

  //if mouse is pressed then pause 
  if (mouseIsPressed) {
    edibleORpoisonous();
    randomised();
    let randomMass = int(random(0, theMassRow));
    textSize(30)
    text(theMass[randomMass], int(random(0, 600)), int(random(0, windowHeight)));
    fill(r,g,b); }

  if (!mouseIsPressed){
  r = map(mouseX,0,windowWidth,60,5);
  g = map(mouseX,0,windowWidth,220,5);
  b = map(mouseY,0,windowWidth,250,10);

  fill(r,g,b); //if mouse isnt pressed then fill background as an interactive sky that goes from light blue to dark blue
  rect(540,120,600,600);
  
  Chronos();
  }     

}


function randomised(){

  randomIndex = int(random(0, NUM_IMGS)); // generate the random index
  image(IMGS[randomIndex], width * 0.5, height * 0.5); //displays random image from the random index
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


function edibleORpoisonous(){
  let fate = mushrooms.getColumn('class');
  let MushNumRows = mushrooms.getRowCount();

  let r = random(255);
  let g = random(255); 
  let b = random(255);
  let a = random(200,255);

  let niceSkyBlue = (82, 189, 255);
  if(mushrooms){
    for (let f = 0; f<MushNumRows; f++){
      if(fate == 'p'){} //if the mushroom in the CSV file is edible then create a random colour for the background
        fill(r,g,b);    // what is deemed as 'poisonous' often invites new ways of being, new colours to explore
        rect(540,120,600,600);  //in nature, the magic mushroom developed its magic properties to ward off
      }                 //predators by affecting their minds and supressing their appetites, now we use this
                        // 'poison' to help us reach new states of consciousness, and new modes of natural healing.
     
      if (fate == 'e'){ //if the mushroom in the CSV file is edible then it is 'safe', so the background turns white/
      fill(255);        //after years of conditioning, we are taught to believe that lightness equates to goodness,
      rect(540,120,600,600);  //yet white does not absorb any light -- it is plain, it is standard, it is boring.
      }
  }
}
