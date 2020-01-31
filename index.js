window.onload = function () {
    document.getElementById("start-btn").onclick = (event) => {



        game.init()
        event.currentTarget.style.display = "none"
    };
};