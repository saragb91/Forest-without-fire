class Lifes {
    constructor(ctx) {
        this._ctx = ctx

        this._lifes = new Image()
        this._lifes = 'img/heart.png'

        this._posXh = 400
        this._posYh = 20
    }

    draw() {
        this._ctx.drawImage(
            this._lifes,
            this._posXh,
            this._posYh,

        )
    }
}