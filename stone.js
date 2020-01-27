class Stone {
    constructor(ctx, pWidth, pHeight, vel) {
        this._ctx = ctx
        this._posXst = pWidth - 70
        this._posYst = pHeight + 400
        this._radius = 8
        this._velY = vel
        this._velX = vel
        this._gravity = 0.01
    }

    draw() {
        console.log("jidfj")
        this._ctx.beginPath()
        this._ctx.fillStyle = 'silver'
        //this._ctx.arc(this._posXst, this._posYst, this._radius, 0, Math.PI * 2);
        this._ctx.arc(this._posXst, this._posYst, 5, 2, Math.PI * 2);
        this._ctx.fill()
        this._ctx.closePath()
    }

    move() {
        this._posXst += this._velX;
        this._posYst += this._velY;
        this._velY = this._gravity
    }
}