const StarDrawer = require('./stardrawer.js');
const StarHandler = require('./starhandler.js');

const canvas = document.querySelector('canvas');
const SCREEN_ROT_DIV = 0.5;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: 0,
    y: 0
};

const nbStars = 500;
const starsHandler = new StarHandler(canvas.width, canvas.height, nbStars);
const starDrawer = new StarDrawer(canvas, mouse);

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = canvas.width / 2.0 - event.clientX;
    mouse.y = canvas.height / 2.0 - event.clientY;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

addEventListener("touchmove", (event) => {
    mouse.x = canvas.width / 2.0 - event.changedTouches[0].clientX;
    mouse.y = canvas.height / 2.0 - event.changedTouches[0].clientY;
});

function animate() {
    requestAnimationFrame(animate);
    starDrawer.clear();
    starsHandler.updateAll(SCREEN_ROT_DIV);
    starDrawer.drawAllStars(starsHandler.stars);
}

animate();
