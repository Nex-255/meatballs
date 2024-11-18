class Button {
    constructor(x,y,w,h,text,presstext) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.presstext = presstext;
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
    handleClick(mx,my) {
        if ((mx > this.x && mx < this.x + this.w) && (my > this.y && my < this.y + this.h)) {
            console.log(this.presstext);
        }

            
    }
}