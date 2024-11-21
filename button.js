class Button {
    constructor(img,x,y,w,h,presstext) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.presstext = presstext;
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