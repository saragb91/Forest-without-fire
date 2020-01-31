class Lifes {
    constructor(ctx, posXh) {
        this._ctx = ctx

        this._lifes = new Image()
        this._lifes.src = 'img/heart.png'

        this._posXh = 30
        this._posYh = 20
        this._posIniX = posXh


    }

    draw() {

        this._ctx.drawImage(
            this._lifes,
            this._posIniX,
            30,
            this._posXh,
            this._posYh,
        )
    }
}