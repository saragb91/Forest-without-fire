const game = {
    name: 'A day in the forest',
    description: 'Game to avoid obstacles and jump for get food for increse life',
    author: 'Sara Garzón',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    framesCont: 0,
    fps: 60,
    ctx: undefined,
    frames: 0,
    incen: [],
    wSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    keys: {
        top: 87,
        shoot: 68
    },

    init() {
        this.canvasDom = document.getElementById("canvasDom");
        this.ctx = this.canvasDom.getContext("2d");
        this.canvasDom.width = this.wSize.width;
        this.canvasDom.height = this.wSize.height;
        this.start()
    },

    start() {
        this.resetElements();
        this.interval = setInterval(() => {


            // if (this.fps % 100 === 0) {

            //     this.secuenceIncendiary()
            // }

            this.framesCont++;
            if (this.framesCont > 1000) this.framesCont = 0;

            this.clearElements();
            this.drawElements();
            this.moveElements();


        });
    },

    drawElements() {

        this.background.draw()
        this.player.draw(this.framesCont)
        this.incendiary.draw()


    },
    moveElements() {
        this.background.move()
        this.player.move()
        this.incendiary.move()

    },

    resetElements() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.keys)
        this.incendiary = new Incendiary(this.ctx)
    },



    clearElements() {
        this.ctx.clearRect(0, 0, this.wSize.width, this.wSize.height)
    },

    // secuenceIncendiary() {
    //     let posX = Math.floor(Math.random() * (270 - 30) + 30)

    //     this.incen.push(newIncen)
    // }
}


