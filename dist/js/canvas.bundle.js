/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var StarDrawer = __webpack_require__(/*! ./stardrawer.js */ "./src/stardrawer.js");
var StarHandler = __webpack_require__(/*! ./starhandler.js */ "./src/starhandler.js");

var canvas = document.querySelector('canvas');
var SCREEN_ROT_DIV = 0.5;

canvas.width = innerWidth;
canvas.height = innerHeight;

var mouse = {
    x: innerWidth / 2.0,
    y: innerHeight / 2.0
};

var nbStars = 100;
var starsHandler = new StarHandler(canvas.width, canvas.height, nbStars);
var starDrawer = new StarDrawer(canvas);

// Event Listeners
addEventListener('mousemove', function (event) {
    mouse.x = event.clientX - canvas.width / 2.0;
    mouse.y = event.clientY - canvas.height / 2.0;
});

addEventListener('resize', function () {
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

/***/ }),

/***/ "./src/star.js":
/*!*********************!*\
  !*** ./src/star.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vec3 = __webpack_require__(/*! ./vec3.js */ "./src/vec3.js");
var Vec2 = __webpack_require__(/*! ./vec3.js */ "./src/vec3.js");
var Utils = __webpack_require__(/*! ./utils.js */ "./src/utils.js");

var Star = function () {
  function Star(width, height) {
    _classCallCheck(this, Star);

    this.init(width, height);
  }

  _createClass(Star, [{
    key: 'init',
    value: function init(width, height) {
      this._velocity = new Vec3(Utils.fRand(-5.0, 5.0), Utils.fRand(-5.0, 5.0), Utils.fRand(1.0, 5.0));
      this._position = new Vec3(width / 2.0, height / 2.0, Utils.fRand(0.0, Utils.fRand(0.0, width)));
      this._prevPosition = new Vec2(this._position.x, this._position.y);
      this._prevRadius = 0.0;
      this._radius = Utils.fRand(1.0, 4.0);
    }
  }, {
    key: 'move',
    value: function move(width, height, speed) {
      var multiplier = 1.0 - width / this._position.z;
      this._position.x += this._velocity.x * speed.x * multiplier;
      this._position.y += this._velocity.y * speed.y * multiplier;
      if (this._position.z - this._velocity.z * speed.z > 0.0) {
        this._position.z -= this._velocity.z * speed.z;
      }
    }
  }, {
    key: 'update',
    value: function update(width, height, screenRot, speed) {
      if (this._position.x + width / screenRot < 0.0 || this._position.x - width / screenRot >= width) {
        this.reset(width, height);
      } else if (this._position.y + height / screenRot < 0.0 || this._position.y - height / screenRot >= screenRot) {
        this.reset(width, height);
      } else if (this._position.z <= 0.0) {
        this.reset(width, height);
      }
      this.move(width, height, speed);
    }
  }, {
    key: 'reset',
    value: function reset(width, height) {
      this.init(width, height);
      this._position.z = width;
    }
  }, {
    key: 'updatePreviousPos',
    value: function updatePreviousPos() {
      this._prevPosition = new Vec2(this._position.x, this._position.y);
      this._prevRadius = this._radius;
    }
  }, {
    key: 'velocity',
    get: function get() {
      return this._velocity;
    },
    set: function set(value) {
      this._velocity = value;
    }
  }, {
    key: 'position',
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._position = value;
    }
  }, {
    key: 'prevPosition',
    get: function get() {
      return this._prevPosition;
    },
    set: function set(value) {
      this._prevPosition = value;
    }
  }, {
    key: 'prevRadius',
    get: function get() {
      return this._prevRadius;
    },
    set: function set(value) {
      this._prevRadius = value;
    }
  }, {
    key: 'radius',
    get: function get() {
      return this._radius;
    },
    set: function set(value) {
      this._radius = value;
    }
  }]);

  return Star;
}();

module.exports = Star;

/***/ }),

/***/ "./src/stardrawer.js":
/*!***************************!*\
  !*** ./src/stardrawer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StarDrawer = function () {
  function StarDrawer(canvas) {
    _classCallCheck(this, StarDrawer);

    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this._width = canvas.width;
    this._height = canvas.height;
    this._clearColor = "rgba(0,0,0,0.39)";
  }

  _createClass(StarDrawer, [{
    key: "drawAllStars",
    value: function drawAllStars(stars, mouse) {
      for (var i = 0; i < stars.length; i++) {
        this.drawStar(stars[i], mouse);
      }
    }
  }, {
    key: "drawStar",
    value: function drawStar(star, mouse) {
      var position = star.position;
      var percent = 1.0 - star.position.z / this._width;
      var radius = star.radius * percent;

      if (star.position.z > 0) {
        this._ctx.beginPath();
        this._ctx.arc(position.x + mouse.x, position.y + mouse.y, radius, 0, 2 * Math.PI);
        this._ctx.fillStyle = 'rgba(200, 200, 255,' + percent * 255.0 + ')';
        this._ctx.fill();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this._ctx.rect(0, 0, this._width, this._height);
      this._ctx.fillStyle = this._clearColor;
      this._ctx.fill();
    }
  }]);

  return StarDrawer;
}();

module.exports = StarDrawer;

/***/ }),

/***/ "./src/starhandler.js":
/*!****************************!*\
  !*** ./src/starhandler.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vec3 = __webpack_require__(/*! ./vec3.js */ "./src/vec3.js");
var Star = __webpack_require__(/*! ./star.js */ "./src/star.js");

var StarHandler = function () {
  function StarHandler(width, height, nbStars) {
    _classCallCheck(this, StarHandler);

    this._speedVector = new Vec3(1.0, 1.0, 1.0);
    this._width = width;
    this._height = height;
    this._nbStars = nbStars;
    this._stars = [];
    this.initAll();
  }

  _createClass(StarHandler, [{
    key: 'initAll',
    value: function initAll() {
      for (var i = 0; i < this._nbStars; ++i) {
        this._stars[i] = new Star(this._width, this._height);
      }
    }
  }, {
    key: 'updateAll',
    value: function updateAll(screenRot) {
      for (var i = 0; i < this._nbStars; ++i) {
        this._stars[i].update(this._width, this._height, screenRot, this._speedVector);
      }
    }
  }, {
    key: 'updateAllPreviousPos',
    value: function updateAllPreviousPos() {
      for (var i = 0; i < this._nbStars; ++i) {
        this._stars[i].updatePreviousPos();
      }
    }
  }, {
    key: 'incrementSpeedVector',
    value: function incrementSpeedVector(speed) {
      this._speedVector.x += speed.x;
      this._speedVector.y += speed.y;
      this._speedVector.z += speed.z;
    }
  }, {
    key: 'speedVector',
    get: function get() {
      return this._speedVector;
    },
    set: function set(value) {
      this._speedVector = value;
    }
  }, {
    key: 'stars',
    get: function get() {
      return this._stars;
    }
  }]);

  return StarHandler;
}();

module.exports = StarHandler;

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "fRand",
    value: function fRand(min, max) {
      return min + Math.random() * (max - min);
    }
  }]);

  return Utils;
}();

module.exports = Utils;

/***/ }),

/***/ "./src/vec3.js":
/*!*********************!*\
  !*** ./src/vec3.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vec3 = function Vec3(x, y, z) {
  _classCallCheck(this, Vec3);

  this.x = x;
  this.y = y;
  this.z = z;
};

module.exports = Vec3;

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map