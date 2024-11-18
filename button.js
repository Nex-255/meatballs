class Button {
    constructor(x,y,w,h,text) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
    }
    draw() {
        push();
        fill('orange');
        rect(this.x,this.y,this.w,this.h);
        fill('black');
        textAlign(CENTER,CENTER);

        text(this.text, this.x + (this.w/2), this.y + (this.h/2));
        pop();
    }
}