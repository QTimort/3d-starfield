const StarDrawer = require('./stardrawer.js');
const StarHandler = require('./starhandler.js');

const canvas = document.querySelector('canvas');
const SCREEN_ROT_DIV = 0.5;

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: innerWidth / 2.0,
    y: innerHeight / 2.0
};

const nbStars = 500;
const starsHandler = new StarHandler(canvas.width, canvas.height, nbStars);
const starDrawer = new StarDrawer(canvas);

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX - canvas.width / 2.0;
    mouse.y = event.clientY - canvas.height / 2.0;
});

addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

function animate() {
    requestAnimationFrame(animate);
    starDrawer.clear();
    starsHandler.updateAll(SCREEN_ROT_DIV);
    starDrawer.drawAllStars(starsHandler.stars, mouse);
    starsHandler.updateAllPreviousPos();
}

animate();
