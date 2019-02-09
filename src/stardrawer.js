class StarDrawer {
  constructor(canvas, mouse) {
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this._width = canvas.width;
    this._height = canvas.height;
    this._clearColor = "rgba(0,0,0,0.39)";
    this._mouse = mouse;
  }

  drawAllStars(stars, mouse) {
    stars.forEach((star) => {
      this.drawStar(star, mouse);
    });
  }

  drawStar(star) {
    const position = star.position;
    const percent = 1.0 - star.position.z / this._width;
    const radius = (star.radius * percent);

    if (star.position.z > 0) {
      this._ctx.beginPath();
      this._ctx.arc(
        position.x + this._mouse.x,
        position.y + this._mouse.y,
        radius,
        0,
        2 * Math.PI
      );
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
