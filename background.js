class Background {
    constructor(ctx, width, height) {
        this._ctx = ctx
        this._width = window.innerWidth
        this._height = window.innerHeight

        this._background = new Image()
        this._background.src = 'img/bg.png'

        this._posX = 0
        this._posY = 0

        this._velX = 0.3
    }

    draw() {

        this._ctx.drawImage(this._background, this._posX, this._posY, this._width, this._height)
        this._ctx.drawImage(this._background, this._posX + this._width, this._posY, this._width, this._height)

    }
    move() {
        this._posX -= this._velX
        if (this._posX <= -this._width) { this._posX = 0 }
    }
}