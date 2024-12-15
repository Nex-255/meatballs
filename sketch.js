// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

var blobs = []
let paused = false
const buttons = []
let moldy;
let gunstar;



function preload() {
  moldy = loadImage('/meatballs/assets/IMG_0820.jpg')
  soundFormats('wav');
  gunstar = loadSound('/meatballs/assets/10')
}

function setup() {
  createCanvas(200,150);
  colorMode(HSB);
  for (i = 0; i < 10; i++) blobs.push(new Blob(random(0, width), random(0, height)));
  let b = new Button(moldy,50,50,50,50,3,3,gunstar);
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
        let clampedHue = map(sum, 270, 360, 150, 270, true);
      set(x, y, color(clampedHue, 255, 255));
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

    drawTopBorder();
    drawBottomBorder();
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

function drawTopBorder() {
  push();
  const h = 20;
  noStroke();
  fill(0,100,100);
  rect(0, 0, width, h);
  const triangleWidth = 20;
  let mod = frameCount % (width + triangleWidth) - triangleWidth;
  for (let i = width/triangleWidth +1; i > 0; --i) {
    let xoff = (mod + triangleWidth * i) % (width + triangleWidth) - triangleWidth;
  triangle(xoff, h, xoff + triangleWidth, h, xoff + triangleWidth / 2, h + triangleWidth);
  }
  pop();
}

function drawBottomBorder() {
  push();
  const h = 20;
  fill(0,100,100);
  noStroke();
  rect(0, height - h, width, h);
  const triangleWidth = 20;
  let mod = (-frameCount % (width + triangleWidth)) - triangleWidth;
  for (let i = (width*2)/triangleWidth +2; i > 0; --i) {
    let xoff = (mod + triangleWidth * i) % (width + triangleWidth) - triangleWidth;
  triangle(xoff, height - h, xoff + triangleWidth,  height - h, xoff + triangleWidth / 2, height - h - triangleWidth);
  }
  pop();
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
