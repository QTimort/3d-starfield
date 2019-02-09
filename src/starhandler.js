const Vec3 = require('./vec3.js');
const Star = require('./star.js');

class StarHandler {
  constructor(width, height, nbStars) {
    this._speedVector = new Vec3(1.0, 1.0, 1.0);
    this._width = width;
    this._height = height;
    this._nbStars = nbStars;
    this._stars = [];
    this.initAll();
  }

  initAll() {
    this._stars = new Array(this._nbStars);
    for (let i = 0; i < this._nbStars; ++i) {
      this._stars[i] = new Star(this._width, this._height);
    }
  }

  updateAll(screenRot) {
    this._stars.forEach((star) => {
      star.update(this._width, this._height, screenRot, this._speedVector);
    });
  }

  incrementSpeedVector(speed) {
    this._speedVector.x += speed.x;
    this._speedVector.y += speed.y;
    this._speedVector.z += speed.z;
  }

  get stars() {
    return this._stars;
  }
}

module.exports = StarHandler;
