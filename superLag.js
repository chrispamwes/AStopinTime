const IMGS = [];
const NUM_IMGS = 202;
let randomIndex;
let nextImageTime;

let table;



//50, 200, 250
//20,20,100
  var r=50;
  var g=200;
  var b=250;

  function preload() {
  //load csv file of mushrooms
  data = loadTable(
    "data/mushrooms.csv",
    'csv',
    'header');

  for (let i = 0; i < NUM_IMGS; i++) {
    IMGS[i] = loadImage(`nature/${i}.png`);
  }
}


function setup() {
  createCanvas(displayWidth, displayHeight);

  // //checking to see whether csv file was working
  //  print(table.getRowCount() + ' total rows in table');
  //  print(table.getColumnCount() + ' total columns in table');

}

function draw() {
  imageMode(CENTER);
  background(0);

  let fate = data.getColumn('class');
  let numRows = data.getRowCount();

  if(data){
  for (let f = 0; f<numRows; f++){

    if(fate = 'e'){
      linearTimeLine();
    }

    else if(fate = 'p'){
      weAreAGlitch();
    }

    else {
      background(0);
      text("something went wrong", windowWidth/2, windowHeight/2);
    }
  }
}

  //just to see the coordinates of mouseX on screen

  // fill(255);
  // text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  // stroke(0);

}

function weAreAGlitch(){
  
  randomIndex = int(random(0, NUM_IMGS)); // generate the random index
  image(IMGS[randomIndex], width * 0.5, height * 0.5);
}

function linearTimeLine(){
   //changing background that goes from night to day (light blue - dark blue)
  //changes from blue to green hue when mouse moves on Y axis
  r = map(mouseX,0,windowWidth,60,5);
  g = map(mouseX,0,windowWidth,220,5);
  b = map(mouseY,0,windowWidth,250,10);

  fill(r,g,b);
  rect(540,225,600,600);

  image(IMGS[constrain(int(map(mouseX, 0, width, 0, NUM_IMGS)), 0, NUM_IMGS)], width * 0.5, height * 0.5);
}

