// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = []
let paused = false
const buttons = []
let moldy;



function preload() {
  moldy = loadImage('/meatballs/assets/IMG_0820.jpg')
}

function setup() {
  createCanvas(200,150);
  colorMode(HSB);
  for (i = 0; i < 10; i++) blobs.push(new Blob(random(0, width), random(0, height)));
  let b = new Button(moldy,50,50,50,50,10,10,'willem dafoe smoking cigarette with two oranges one of them moldy');
  buttons.push(b);
}

function draw() {
 
  if (!paused) {
    loadPixels();
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        let sum = 0;
        for (i = 0; i < blobs.length; i++) {
          let xdif = x - blobs[i].x;
          let ydif = y - blobs[i].y;
          let d = sqrt((xdif * xdif) + (ydif * ydif));
          sum += 10 * blobs[i].r / d;
        }
        set(x, y, color(sum, 255, 255));
      }
    }
    updatePixels();

    for (i = 0; i < blobs.length; i++) {
      blobs[i].update();
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].update();
      buttons[i].draw();
    }
  } 
  else
  {
    fill(15,127);
    stroke(255);
    textSize(80);
    textAlign(CENTER,CENTER);
    text('PAUSED', width/2, height/2);
  }
}

function keyPressed() {
  if (key === 'p') {
    paused = !paused;
  }
}
  
function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.handleClick(mouseX,mouseY);
  }
}
