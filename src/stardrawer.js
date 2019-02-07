class StarDrawer {
  constructor(canvas) {
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this._width = canvas.width;
    this._height = canvas.height;
    this._clearColor = "rgba(0,0,0,0.39)";
  }

  drawAllStars(stars, mouse) {
    for (let i = 0; i < stars.length; i++) {
      this.drawStar(stars[i], mouse);
    }
  }

  drawStar(star, mouse) {
    let position = star.position;
    let percent = 1.0 - star.position.z / this._width;
    let radius = (star.radius * percent);

    if (star.position.z > 0) {
      this._ctx.beginPath();
      this._ctx.arc(position.x + mouse.x, position.y + mouse.y, radius, 0, 2 * Math.PI);
      this._ctx.fillStyle = 'rgba(200, 200, 255,' + percent * 255.0 + ')';
      this._ctx.fill();
    }
  }

  clear() {
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.fillStyle = this._clearColor;
    this._ctx.fill();
  }
}

module.exports = StarDrawer;
