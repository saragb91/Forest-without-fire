class GameOver {
    constructor(ctx) {
        this._ctx = ctx
        this._posXG = window.innerWidth / 2 - 200
        this._posYG = window.innerHeight / 2 - 120

        this._gameOver = new Image()
        this._gameOver.src = 'img/12834.png'

        this._widthG = 350
        this._heightG = 300
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