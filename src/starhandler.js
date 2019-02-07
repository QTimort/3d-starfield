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
    for (let i = 0; i < this._nbStars; ++i) {
      this._stars[i] = new Star(this._width, this._height);
    }
  }

  updateAll(screenRot) {
    for (let i = 0; i < this._nbStars; ++i) {
      this._stars[i].update(this._width, this._height, screenRot, this._speedVector);
    }
  }

  updateAllPreviousPos() {
    for (let i = 0; i < this._nbStars; ++i) {
      this._stars[i].updatePreviousPos();
    }
  }

  incrementSpeedVector(speed) {
    this._speedVector.x += speed.x;
    this._speedVector.y += speed.y;
    this._speedVector.z += speed.z;
  }


  get speedVector() {
    return this._speedVector;
  }

  set speedVector(value) {
    this._speedVector = value;
  }

  get stars() {
    return this._stars;
  }
}

module.exports = StarHandler;
