class GameOver {
    constructor(ctx) {
        this._ctx = ctx
        this._posXG = window.innerWidth / 2
        this._posYG = window.innerHeight / 2

        this._gameOver = new Image()
        this._gameOver.src = 'img/gameover.png'

        this._widthG = 600
        this._heightG = 500
    }

    draw() {
        this._ctx.drawImage(
            this._gameOver,
            this._posXG,
            this._posYG,
            this._widthG,
            this._heightG,
        )
    }



}