class Player {
    constructor(ctx, keys) {
        this._ctx = ctx
        this._gameWidth = window.innerWidth
        this._gameHeight = window.innerHeight

        this._player = new Image()
        this._player.src = 'img/player.png'

        this._pWidth = 200
        this._pHeight = 160

        this._posX = 0
        this._posYs = this._gameHeight - this._pHeight - 10
        this._posY = this._gameHeight - this._pHeight - 10
        this._posYt = this.gameHeight + 550


        this._vel = 1



        this._player.frames = 3
        this._player.framesIndex = 0

        this._keys = keys

        this._stones = []

        this.setListeners()

    }
    draw(framesCont) {
        this._ctx.drawImage(
            this._player,
            this._player.framesIndex * Math.floor(this._player.width / this._player.frames),
            0,
            Math.floor(this._player.width / this._player.frames),
            this._player.height,
            this._posX,
            this._posY,
            this._pWidth,
            this._pHeight
        );
        this.animate(framesCont);
        this._stones.forEach(stone => stone.draw())
    }


    move() {
        let gravity = 0.1;

        if (this._posY <= this._posYs) {

            this._posY += this._vel;
            this._vel += gravity;

        } else {

            this._vel = 1;
            this._posY = this._posYs;
        }

        this._stones.forEach(stone => stone.move())

    }

    animate(framesCont) {
        if (framesCont % 25 == 0) {
            this._player.framesIndex++;
            if (this._player.framesIndex > 2) {
                this._player.framesIndex = 0;
            }
        }
    }

    setListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case this._keys.top:
                    if (this._posY >= this._posYs) {
                        this._posY -= 10;
                        this._vel -= 8;
                    }
                    break;
                case this._keys.shoot:

                    this.shootStone()

                    break;
            }
        };
    }

    shootStone() {

        this._stones.push(new Stone(this._ctx, this._pWidth, this._pHeight, this._vel));

        this._stones.forEach((st, idx) => {
            if (st.posXst <= 0) {
                this._stones.splice(idx, 1)
            }
        })
    }
}








