class Obstacles {
    constructor(ctx, url) {
        this._ctx = ctx


        this._gameWidthObs = window.innerWidth
        this._gameHeight = window.innerHeight

        this._posXobs = this._gameWidthObs
        this._posYobs = 570

        this._obstacles = new Image()
        this._obstacles.src = url

        this._widthObs = 100
        this._heightObs = 50

        this._velObs = 1
    }

    draw() {
        this._ctx.drawImage(
            this._obstacles,
            this._posXobs,
            this._posYobs,
            this._widthObs,
            this._heightObs,
        )
    }
    move() {
        this._posXobs -= this._velObs;
    }


}
