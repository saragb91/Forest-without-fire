class Fruits {
    constructor(ctx) {
        this._ctx = ctx

        this._posXf = 300
        this._posYf = 300

        this._fruits = new Image()
        this._fruits.src = 'img/apple.png'

        this._widthf = 25
        this._heightf = 30

        this._velf = 1
    }

    draw() {
        this._ctx.drawImage(
            this._fruits,
            this._posXf,
            this._posYf,
            this._widthf,
            this._heightf,

        )
    }

    move() {
        this._posXf -= this._velf

    }
}