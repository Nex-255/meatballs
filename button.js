class Button {
    constructor(img,x,y,w,h,xspeed,yspeed,presstext) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
        this.presstext = presstext;
    }
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if ((this.x + this.w) > width || this.x < 0) this.xspeed *= -1;
        if ((this.y + this.h) > height || this.y < 0) this.yspeed *= -1;
    }
    draw() {
        push();
        image(this.img,this.x,this.y,this.w,this.h);
        pop();
    }
    handleClick(mx,my) {
        if ((mx > this.x && mx < this.x + this.w) && (my > this.y && my < this.y + this.h)) {
            console.log(this.presstext);
        }

            
    }
}