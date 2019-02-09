const Vec3 = require('./vec3.js');
const Utils = require('./utils.js');

class Star {
  constructor(width, height) {
    this.init(width, height);
  }

  init(width, height) {
    this._velocity = new Vec3(
      Utils.fRand(-5.0, 5.0),
      Utils.fRand(-5.0, 5.0),
      Utils.fRand(1.0, 5.0)
    );
    this._position = new Vec3(
      width / 2.0,
      height / 2.0,
      Utils.fRand(0.0, Utils.fRand(0.0, width))
    );
    this._radius = Utils.fRand(1.0, 4.0);
  }

  move(width, height, speed) {
    const multiplier = 1.0 - (width / this._position.z);
    this._position.x += this._velocity.x * speed.x * multiplier;
    this._position.y += this._velocity.y * speed.y * multiplier;
    if ((this._position.z - this._velocity.z * speed.z) > 0.0) {
      this._position.z -= this._velocity.z * speed.z;
    }
  }

  update(width, height, screenRot, speed) {
    if ((this._position.x + width / screenRot) < 0.0 || (this._position.x - width / screenRot) >= width) {
      this.reset(width, height);
    } else if ((this._position.y + height / screenRot) < 0.0 || (this._position.y - height / screenRot) >= screenRot) {
      this.reset(width, height);
    } else if (this._position.z <= 0.0) {
      this.reset(width, height);
    }
    this.move(width, height, speed);
  }

  reset(width, height) {
    this.init(width, height);
    this._position.z = width;
  }

  get velocity() {
    return this._velocity;
  }

  set velocity(value) {
    this._velocity = value;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }
}

module.exports = Star;
