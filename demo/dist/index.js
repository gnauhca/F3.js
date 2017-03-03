/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _stats = __webpack_require__(1);
	
	var _stats2 = _interopRequireDefault(_stats);
	
	__webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var stats = new _stats2.default();
	// stats.showPanel( 1 );
	// stats.showPanel( 2 );
	// stats.showPanel( 3 );
	// stats.showPanel( 4 );
	document.body.appendChild(stats.dom);
	
	var Point = function (_F3$Obj) {
	    _inherits(Point, _F3$Obj);
	
	    function Point() {
	        var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
	
	        _classCallCheck(this, Point);
	
	        var _this = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this));
	
	        _this.radius = radius;
	        _this.color = 'rgba(' + [Math.random() * 255 | 0, Math.random() * 255 | 0, Math.random() * 255 | 0, Math.random()].join(',') + ')';
	        _this.prevCrood = null;
	        return _this;
	    }
	
	    _createClass(Point, [{
	        key: 'render',
	        value: function render(ctx) {
	            // this.prevCrood = this.prevCrood || this.croods2D.position.clone();
	
	            // ctx.fillStyle = this.color;
	            // ctx.beginPath();
	
	
	            // console.log(
	            //     this.croods2D.position.x, 
	            //     this.croods2D.position.y,
	            //     this.radius * this.croods2D.scale + 1, 
	            //     this.radius * this.croods2D.scale + 1
	            // );
	
	            // if (this.croods2D.scale < 5)
	            ctx.fillStyle = '#fff';
	            // ctx.fillRect(this.croods2D.position.x, 
	            //     this.croods2D.position.y,1,1);
	            ctx.fillRect(this.croods2D.position.x, this.croods2D.position.y, this.radius * this.croods2D.scale * this.yScale, this.radius * this.croods2D.scale * this.yScale);
	
	            // ctx.beginPath();
	            // ctx.moveTo(
	            //     this.croods2D.position.x, 
	            //     this.croods2D.position.y
	            // );
	            // ctx.arc(
	            //     this.croods2D.position.x, 
	            //     this.croods2D.position.y, 
	            //     this.radius * this.croods2D.scale * this.yScale, 0, Math.PI * 2);
	            // ctx.fill();
	
	            // ctx.strokeStyle = '#fff'//this.color;
	            // ctx.lineWidth = this.radius * this.croods2D.scale// * this.zScale;
	            // ctx.lineCap = "round";
	            // ctx.beginPath();
	            // ctx.moveTo(this.croods2D.position.x, this.croods2D.position.y);
	            // ctx.lineTo(this.croods2D.position.x, this.croods2D.position.y);
	            // // ctx.lineTo(this.prevCrood.x, this.prevCrood.y);
	            // ctx.stroke();
	            // this.prevCrood = this.croods2D.position.clone();
	        }
	    }]);
	
	    return Point;
	}(F3.Obj);
	
	var planeFunctions = {
	    'cos(x)*sin(z)': function cosXSinZ(x, z, offset) {
	        return Math.cos(x / 4 + offset) * Math.sin(z / 4 + offset) * 1;
	    },
	    'sin(x^2+y^2)': function sinX2Y2(x, z, offset) {
	        return Math.sin(Math.sqrt(Math.pow(x / 2, 2) + Math.pow(z / 2, 2)) - offset);
	    }
	};
	
	var Effect = function (_F3$Time) {
	    _inherits(Effect, _F3$Time);
	
	    function Effect(renderer, scene, camera, cvs) {
	        _classCallCheck(this, Effect);
	
	        var _this2 = _possibleConstructorReturn(this, (Effect.__proto__ || Object.getPrototypeOf(Effect)).call(this));
	
	        _this2.renderer = renderer;
	        _this2.scene = scene;
	        _this2.camera = camera;
	        _this2.cvs = cvs;
	
	        _this2.xOffset = 0;
	        _this2.waveHeight = 0.4; // 波高
	        _this2.waveWidth = 8; // 波长
	
	        _this2.col = 33;
	        _this2.colPointNum = 33;
	
	        _this2.flyTime = 2000;
	        _this2.timePass = 0;
	
	        _this2.scale = 1;
	        _this2.scaleStep = 0.01;
	
	        _this2.planeFunction = function () {
	            return 0;
	        };
	        _this2.rotate = { x: false, y: false, z: false };
	
	        _this2.pointGroup = new F3.Obj();
	        _this2.scene.add(_this2.pointGroup);
	
	        _this2.resize(cvs.width, cvs.height);
	        _this2.init();
	        return _this2;
	    }
	
	    _createClass(Effect, [{
	        key: 'resize',
	        value: function resize(width, height) {
	            this.cvs.width = width;
	            this.cvs.height = height;
	            // this.pointGroup.position.set(this.cvs.width/2, this.cvs.height, 0);
	            this.stepWidth = width * 1.8 / this.col;
	            this.pointGroup.setPosition(this.cvs.width / 2, this.cvs.height * 1.2, -this.col * this.stepWidth / 2);
	            this.pointGroup.setRotation(0.1, 0, 0);
	            // this.waveHeight = height/2;
	            // this.waveWidth = this.waveHeight * 4;
	            // console.log(this.stepWidth);
	        }
	    }, {
	        key: 'init',
	        value: function init() {
	            // create point
	            var point;
	            for (var x = -(this.col - 1) / 2, count = 0; x <= (this.col - 1) / 2; x++) {
	                for (var z = -(this.colPointNum - 1) / 2; z <= (this.colPointNum - 1) / 2; z++) {
	                    point = new Point(10);
	                    this.pointGroup.add(point);
	                    /*point.initPos = new F3.Vector3(
	                         x + Math.random() * -2 + 1,
	                         -30 + -10 * Math.random(),
	                         z + Math.random() * -2 + 1
	                    );*/
	                    point.initPos = new F3.Vector3(0, 0, 0);
	                    point.flyDelay = 0; //Math.random() * 1000 | 0;
	                }
	            }
	        }
	    }, {
	        key: 'update',
	        value: function update(delta) {
	            this.timePass += delta;
	            this.xOffset = this.timePass / 500;
	
	            var point = void 0;
	            var flyPecent = void 0;
	            var x = void 0,
	                y = void 0,
	                z = void 0;
	            var count = 0;
	
	            // if (this.timePass < 100)
	            for (x = -(this.col - 1) / 2; x <= (this.col - 1) / 2; x++) {
	                for (z = -(this.colPointNum - 1) / 2; z <= (this.colPointNum - 1) / 2; z++) {
	
	                    // let y = Math.cos(x*Math.PI/this.waveWidth + this.xOffset)*Math.sin(z*Math.PI/this.waveWidth + this.xOffset) * this.waveHeight;
	
	                    y = this.planeFunction(x, z, this.xOffset);
	                    // let y = Math.sin(Math.sqrt(Math.pow(x/v, 2)+Math.pow(z/v, 2)) - this.xOffset) * 1
	                    // console.log(y);
	
	                    point = this.pointGroup.children[count];
	                    point.yScale = 1; //(-y + 0.6)/(this.waveHeight) * 1.5;
	
	                    flyPecent = (this.timePass - point.flyDelay) / this.flyTime;
	                    flyPecent = flyPecent > 1 ? 1 : flyPecent < 0 ? 0 : flyPecent;
	
	                    point.setPosition(x * this.stepWidth, y * this.stepWidth, z * this.stepWidth);
	                    count++;
	                }
	            }
	            if (this.rotate.x || this.rotate.y || this.rotate.z) {
	                this.pointGroup.setRotation(this.rotate.x ? this.pointGroup.rotation.x + 0.001 : 0, this.rotate.y ? this.pointGroup.rotation.y + 0.001 : 0, this.rotate.z ? this.pointGroup.rotation.z + 0.001 : 0);
	            }
	        }
	    }, {
	        key: 'setFunction',
	        value: function setFunction(fun) {
	            this.planeFunction = fun;
	        }
	    }, {
	        key: 'toggleRotate',
	        value: function toggleRotate(r) {
	            this.rotate[r] = !this.rotate[r];
	            if (!this.rotate[r]) {
	                this.pointGroup.rotation[r] = 0;
	            }
	        }
	    }, {
	        key: 'animate',
	        value: function animate() {
	            var _this3 = this;
	
	            this.addTick(function (delta) {
	                stats.update();
	                _this3.update(delta);
	                _this3.renderer.render(_this3.scene, _this3.camera);
	            });
	        }
	    }]);
	
	    return Effect;
	}(F3.Time);
	
	window.bannerInit = function (cvs) {
	    var ctx = cvs.getContext('2d');
	
	    var scene = new F3.Scene();
	    var camera = new F3.Camera();
	    camera.origin = new F3.Vector3(cvs.width / 2, cvs.height / 3);
	    camera.p = 800;
	
	    var renderer = new F3.Renderer(ctx, cvs);
	    var effect = new Effect(renderer, scene, camera, cvs);
	    effect.animate();
	
	    var functions = document.querySelector('.functions');
	    var btnHTML = '';
	    for (var name in planeFunctions) {
	        btnHTML += '<div class="btn" data-function="' + name + '">' + name + '</div>';
	    }
	    functions.innerHTML = btnHTML;
	
	    var btns = functions.querySelectorAll('.btn');
	    function selectFunction(funName) {
	        btns.forEach(function (btn) {
	            var dataFunction = btn.dataset.function;
	            if (dataFunction === funName) {
	                btn.classList.add('active');
	                effect.setFunction(planeFunctions[funName]);
	            } else {
	                btn.classList.remove('active');
	            }
	        });
	    }
	    selectFunction(btns[0].dataset.function);
	    functions.addEventListener('click', function (e) {
	        if (e.target.dataset.function) {
	            selectFunction(e.target.dataset.function);
	        }
	    });
	
	    var rotate = document.querySelector('.rotate');
	    var rotateBtns = rotate.querySelectorAll('.btn');
	    function toggleRotate(_r) {
	        rotateBtns.forEach(function (rotateBtn) {
	            var r = rotateBtn.dataset.rotate;
	            if (r === _r) {
	                rotateBtn.classList.toggle('active');
	                effect.toggleRotate(r);
	            }
	        });
	    }
	    rotate.addEventListener('click', function (e) {
	        if (e.target.dataset.rotate) {
	            toggleRotate(e.target.dataset.rotate);
	        }
	    });
	
	    F3.TIME.start();
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// stats.js - http://github.com/mrdoob/stats.js
	(function (f, e) {
	  "object" === ( false ? "undefined" : _typeof(exports)) && "undefined" !== typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : f.Stats = e();
	})(undefined, function () {
	  var f = function f() {
	    function e(a) {
	      c.appendChild(a.dom);return a;
	    }function u(a) {
	      for (var d = 0; d < c.children.length; d++) {
	        c.children[d].style.display = d === a ? "block" : "none";
	      }l = a;
	    }var l = 0,
	        c = document.createElement("div");c.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click", function (a) {
	      a.preventDefault();
	      u(++l % c.children.length);
	    }, !1);var k = (performance || Date).now(),
	        g = k,
	        a = 0,
	        r = e(new f.Panel("FPS", "#0ff", "#002")),
	        h = e(new f.Panel("MS", "#0f0", "#020"));if (self.performance && self.performance.memory) var t = e(new f.Panel("MB", "#f08", "#201"));u(0);return { REVISION: 16, dom: c, addPanel: e, showPanel: u, begin: function begin() {
	        k = (performance || Date).now();
	      }, end: function end() {
	        a++;var c = (performance || Date).now();h.update(c - k, 200);if (c > g + 1E3 && (r.update(1E3 * a / (c - g), 100), g = c, a = 0, t)) {
	          var d = performance.memory;t.update(d.usedJSHeapSize / 1048576, d.jsHeapSizeLimit / 1048576);
	        }return c;
	      }, update: function update() {
	        k = this.end();
	      }, domElement: c, setMode: u };
	  };f.Panel = function (e, f, l) {
	    var c = Infinity,
	        k = 0,
	        g = Math.round,
	        a = g(window.devicePixelRatio || 1),
	        r = 80 * a,
	        h = 48 * a,
	        t = 3 * a,
	        v = 2 * a,
	        d = 3 * a,
	        m = 15 * a,
	        n = 74 * a,
	        p = 30 * a,
	        q = document.createElement("canvas");q.width = r;q.height = h;q.style.cssText = "width:80px;height:48px";var b = q.getContext("2d");b.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif";b.textBaseline = "top";b.fillStyle = l;b.fillRect(0, 0, r, h);b.fillStyle = f;b.fillText(e, t, v);
	    b.fillRect(d, m, n, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d, m, n, p);return { dom: q, update: function update(h, w) {
	        c = Math.min(c, h);k = Math.max(k, h);b.fillStyle = l;b.globalAlpha = 1;b.fillRect(0, 0, r, m);b.fillStyle = f;b.fillText(g(h) + " " + e + " (" + g(c) + "-" + g(k) + ")", t, v);b.drawImage(q, d + a, m, n - a, p, d, m, n - a, p);b.fillRect(d + n - a, m, a, p);b.fillStyle = l;b.globalAlpha = .9;b.fillRect(d + n - a, m, a, g((1 - h / w) * p));
	      } };
	  };return f;
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0; }\n\nbody, html {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\nbody {\n  background: radial-gradient(circle, #6d2717, #0c0000); }\n\ncanvas {\n  pointer-events: none; }\n\n.controls {\n  display: inline-block;\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translate(-50%, 0); }\n\n.btn-group {\n  display: inline-block; }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: 500;\n  text-align: center;\n  -ms-touch-action: manipulation;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  line-height: 1.5;\n  padding: 4px 15px;\n  font-size: 12px;\n  border-radius: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  border-color: #d9d9d9; }\n\n.btn:first-child {\n  border-radius: 4px 0 0 4px; }\n\n.btn:last-child {\n  border-radius: 0 4px 4px 0; }\n\n.btn.active {\n  color: #fff;\n  background-color: #dc7953;\n  border-color: #dc7953; }\n\n.rotate .btn {\n  border: none;\n  border-radius: 20px; }\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map