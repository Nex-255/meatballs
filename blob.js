// Basile Pesin
// http://vertmo.github.io

// MetaBalls : p5.js implementation

class Blob {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    let angle = random(0, 2 * PI);
    this.xspeed = random(0.8, 1) * Math.cos(angle);
    this.yspeed = random(0.8, 1) * Math.sin(angle);
    this.r = random(120,180);
  }

  update() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    if (this.x > width || this.x < 0) this.xspeed -= this.xspeed*2 + 0.25;
    if (this.y > height || this.y < 0) this.yspeed -= this.yspeed*2 + 0.25;
  }

  show() {
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
