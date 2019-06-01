(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AwesomeText"] = factory();
	else
		root["AwesomeText"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "Renderer", {
	  enumerable: true,
	  get: function get() {
	    return _renderer["default"];
	  }
	});
	Object.defineProperty(exports, "Text", {
	  enumerable: true,
	  get: function get() {
	    return _text["default"];
	  }
	});
	Object.defineProperty(exports, "Layout", {
	  enumerable: true,
	  get: function get() {
	    return _layout["default"];
	  }
	});
	
	var _renderer = _interopRequireDefault(__webpack_require__(1));
	
	var _text = _interopRequireDefault(__webpack_require__(2));
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	Object.assign(PIXI.extras, {
	  AwesomeText: _text["default"]
	});
	
	if (typeof PIXI !== 'undefined') {
	  if (PIXI.extras) {
	    PIXI.extras.AwesomeText = _text["default"];
	  } else {
	    PIXI.extras = {
	      AwesomeText: _text["default"]
	    };
	  }
	}
	/*
	
	ix            = sdf_size / tex_width
	iy            = sdf_size / tex_height
	row_height    = (row_height + 2 * sdf_size) / tex_height;
	aspect        = tex_width / tex_height;
	ascent        = font->ascent * scaleY
	descent       = fabsf(font->descent * scaleY)
	line_gap      = font->line_gap * scale Y
	cap_height    = gxcap.max.y * scaleY
	x_height      = gx.max.y * scaleY
	space_advance = gspace.advance_width * scaleX


	scaley = row_height / tex_height / ( font->glyph_max.y - font->glyph_min.y );
	scalex = row_height / tex_width / ( font->glyph_max.y - font->glyph_min.y );
	gspace = font->glyphs[ font->glyph_idx( ' ' ) ];
	gx     = font->glyphs[ font->glyph_idx( 'x' ) ]
	gxcap  = font->glyphs[ font->glyph_idx( 'X' ) ]


	sdf_size = 10

	*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _text = _interopRequireDefault(__webpack_require__(2));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var vertexShader = __webpack_require__(10);
	
	var fragmentShader = __webpack_require__(11);
	
	var selectVertextShader = __webpack_require__(12);
	
	var selectFragmentShader = __webpack_require__(13);
	
	var glCore = PIXI.glCore;
	
	var AwesomeTextRenderer =
	/*#__PURE__*/
	function (_PIXI$ObjectRenderer) {
	  _inherits(AwesomeTextRenderer, _PIXI$ObjectRenderer);
	
	  function AwesomeTextRenderer(renderer) {
	    var _this;
	
	    _classCallCheck(this, AwesomeTextRenderer);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeTextRenderer).call(this, renderer));
	
	    _defineProperty(_assertThisInitialized(_this), "selectColor", 0xFFB3C3);
	
	    _this.textShader = null;
	    _this.selectShader = null;
	    return _this;
	  }
	
	  _createClass(AwesomeTextRenderer, [{
	    key: "onContextChange",
	    value: function onContextChange() {
	      var gl = this.renderer.gl;
	      gl.getExtension("OES_standard_derivatives");
	      this.textShader = new PIXI.Shader(gl, vertexShader, fragmentShader);
	      this.selectShader = new PIXI.Shader(gl, selectVertextShader, selectFragmentShader);
	    }
	  }, {
	    key: "renderText",
	    value: function renderText(source) {
	      var glData = source._glDatas[AwesomeTextRenderer.contextText];
	
	      if (!glData) {
	        this.renderer.bindVao(null);
	        glData = this.buildTextGlData(source, this.renderer.gl);
	        source._glDatas[AwesomeTextRenderer.contextText] = glData;
	      }
	
	      this.renderer.bindVao(glData.vao);
	
	      if (source.dirty) {
	        source.dirty = false;
	        glData.uvBuffer.upload(source.uvs);
	      }
	
	      if (source.indexDirty) {
	        source.indexDirty = false;
	        glData.indexBuffer.upload(source.indices);
	      }
	
	      glData.vertexBuffer.upload(source.vertices);
	      this.renderer.bindShader(glData.shader);
	      this.renderer.state.setBlendMode(source.blendMode);
	      glData.shader.uniforms.uSampler = this.renderer.bindTexture(source.texture);
	      glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
	      glData.shader.uniforms.hint_amount = source.config.antialiasing * 1;
	      glData.shader.uniforms.sdfMultiplier = _text["default"].scale;
	      glData.shader.uniforms.subpixel_amount = source.config.antialiasing * 1;
	      glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(source.style.fill.replace("#", "0x"));
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(source.backgroundColor.replace("#", "0x"));
	      var drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
	      glData.vao.draw(drawMode, source.indices.length, 0);
	    }
	  }, {
	    key: "renderSelect",
	    value: function renderSelect(source) {
	      var glData = source._glDatas[AwesomeTextRenderer.contextSelect];
	
	      if (!glData || source.select.dirty) {
	        this.renderer.bindVao(null);
	        glData = this.buildSelectGlData(source, this.renderer.gl);
	        source._glDatas[AwesomeTextRenderer.contextSelect] = glData;
	        source.select.dirty = false;
	      }
	
	      this.renderer.bindVao(glData.vao);
	
	      if (source.select.indexDirty) {
	        source.select.indexDirty = false;
	        glData.indexBuffer.upload(source.select.indices);
	      }
	
	      glData.vertexBuffer.upload(source.select.vertices);
	      this.renderer.bindShader(glData.shader);
	      this.renderer.state.setBlendMode(17);
	      glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(this.selectColor);
	      var drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
	      glData.vao.draw(drawMode, source.select.indices.length, 0);
	    }
	  }, {
	    key: "render",
	    value: function render(source) {
	      if (source.styleID !== source.style.styleID) {
	        source.update();
	      }
	
	      if (source.state === _text["default"].states.editable || source.state === _text["default"].states.selecting) {
	        this.renderSelect(source);
	      }
	
	      this.renderText(source);
	    }
	  }, {
	    key: "buildTextGlData",
	    value: function buildTextGlData(source, gl) {
	      var glData = {
	        shader: this.textShader,
	        vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.vertices, gl.STREAM_DRAW),
	        uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.uvs, gl.STREAM_DRAW),
	        sdfBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.sdfSizes, gl.STATIC_DRAW),
	        indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.indices, gl.STATIC_DRAW),
	        // build the vao object that will render..
	        vao: null,
	        dirty: source.dirty,
	        indexDirty: source.indexDirty
	      };
	      glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.sdfBuffer, glData.shader.attributes.aSdfSize, gl.FLOAT, false, 4, 0);
	      return glData;
	    }
	  }, {
	    key: "buildSelectGlData",
	    value: function buildSelectGlData(source, gl) {
	      var glData = {
	        shader: this.selectShader,
	        vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.select.vertices, gl.STREAM_DRAW),
	        indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.select.indices, gl.STATIC_DRAW),
	        vao: null
	      };
	      glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0);
	      return glData;
	    }
	  }]);
	
	  return AwesomeTextRenderer;
	}(PIXI.ObjectRenderer);
	
	_defineProperty(AwesomeTextRenderer, "contextText", 0);
	
	_defineProperty(AwesomeTextRenderer, "contextSelect", 1);
	
	PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
	var _default = AwesomeTextRenderer;
	exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
	var _select = _interopRequireDefault(__webpack_require__(4));
	
	var _input = _interopRequireDefault(__webpack_require__(9));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(5);
	
	var AwesomeText =
	/*#__PURE__*/
	function (_PIXI$mesh$Mesh) {
	  _inherits(AwesomeText, _PIXI$mesh$Mesh);
	
	  function AwesomeText(text, style, config) {
	    var _this;
	
	    _classCallCheck(this, AwesomeText);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeText).call(this, config.texture));
	
	    _defineProperty(_assertThisInitialized(_this), "pluginName", 'AwesomeTextRenderer');
	
	    _defineProperty(_assertThisInitialized(_this), "state", AwesomeText.states.regular);
	
	    _defineProperty(_assertThisInitialized(_this), "clicksCount", 0);
	
	    _defineProperty(_assertThisInitialized(_this), "config", {
	      editable: false,
	      uppercase: false,
	      lowercase: false,
	      antialiasing: true,
	      backgroundColor: "#000000"
	    });
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.config = _extends({}, _this.config, config);
	    _this.backgroundColor = _this.config.backgroundColor;
	    _this._text = text; // Content
	
	    _this._font = config.font; // Font information
	
	    _this._texture = config.texture; // Texture with glyphs
	    // Calculate layout
	
	    _this.layout = new _layout["default"](_assertThisInitialized(_this), {
	      fontSize: _this.style.fontSize,
	      wrapWords: _this.style.breakWords,
	      wrapperWidth: _this.style.wordWrapWidth,
	      align: _this.style.align,
	      lineHeight: _this.style.lineHeight
	    });
	
	    if (_this.config.editable) {
	      _this.interactive = true;
	      _this.buttonMode = true;
	      _this.select = new _select["default"](_assertThisInitialized(_this));
	      _this.input = new _input["default"](_assertThisInitialized(_this));
	
	      _this.setState(AwesomeText.states.regular);
	    }
	
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
	      this.layout.update();
	
	      if (this.config.editable) {
	        this.select.update();
	        this.input.update();
	      } // Arrays for vertices, uvs and sdf
	
	
	      this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
	      this.arrayPositions = {
	        vertex: 0,
	        uvs: 0,
	        sdf: 0
	      }; // Fill arrays word by word
	
	      this.layout.wordsMetrics.forEach(function (word) {
	        _this2.writeString(word.word, _this2.font, _this2.metrics, [word.x, word.y]);
	      }); // Prepare indices
	
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.lettersCount
	      });
	      this.styleID = this.style.styleID;
	      this.dirty = true;
	      this.indexDirty = true;
	      this._glDatas = [];
	    }
	  }, {
	    key: "setState",
	    value: function setState(newState) {
	      if (!this.config.editable) {
	        return;
	      }
	
	      var states = AwesomeText.states;
	      if (!newState in Object.values(states)) return;
	
	      switch (newState) {
	        case states.regular:
	          this.setRegularState();
	          break;
	
	        case states.editable:
	          if (this.state === AwesomeText.states.regular) {
	            this.setEditableState();
	          }
	
	          break;
	      }
	
	      this.state = newState;
	    }
	  }, {
	    key: "setRegularState",
	    value: function setRegularState() {
	      var _this3 = this;
	
	      AwesomeText.currentEditingElement = null;
	      this.off("mousedown");
	      this.off("mousemove");
	      this.off("mouseup");
	      this.off("mouseupoutside");
	      this.input.enabled = false;
	      this.on("click", function (e) {
	        if (_this3.clicksCount === 1) {
	          _this3.clicksCount = 0;
	
	          _this3.setState(AwesomeText.states.editable);
	        }
	
	        if (_this3.clicksCount === 0) {
	          _this3.clicksCount++;
	          window.setTimeout(function () {
	            _this3.clicksCount = 0;
	          }, 300);
	        }
	      });
	    }
	  }, {
	    key: "setEditableState",
	    value: function setEditableState() {
	      var _this4 = this;
	
	      // Disable previously enabled field
	      if (AwesomeText.currentEditingElement != null) {
	        AwesomeText.currentEditingElement.setState(AwesomeText.states.regular);
	      }
	
	      AwesomeText.currentEditingElement = this; // Disable unnecessary events
	
	      this.off("click");
	      this.input.enabled = true;
	      this.input.hide(); // Select all characters
	
	      this.select.setRange(0, this.text.length - 1);
	      this.input.inputElement.focus();
	      this.on("mousedown", function (e) {
	        _this4.setState(AwesomeText.states.selecting);
	
	        _this4.select.onMouseDown(e);
	
	        _this4.input.show();
	
	        _this4.input.update(e);
	      });
	      this.on("mousemove", function (e) {
	        var _e$data$originalEvent = e.data.originalEvent,
	            movementX = _e$data$originalEvent.movementX,
	            movementY = _e$data$originalEvent.movementY;
	        if (movementX === 0 && movementY === 0) return;
	
	        if (_this4.state === AwesomeText.states.selecting) {
	          _this4.select.onMouseMove(e);
	
	          _this4.input.hide();
	        }
	      });
	      this.on("mouseup", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	
	        _this4.select.onMouseUp(e);
	      });
	      this.on("mouseupoutside", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	
	        _this4.select.onMouseUp(e);
	      });
	    }
	  }, {
	    key: "insertString",
	    value: function insertString(index, string) {
	      this.text = this.text.substr(0, index) + string + this.text.substr(index);
	    }
	  }, {
	    key: "removeString",
	    value: function removeString(index, length) {
	      var newText = this.text.split("");
	      newText.splice(index, length + 1);
	      this.text = newText.join("");
	    }
	  }, {
	    key: "writeString",
	    value: function writeString(string, font, font_metrics, pos) {
	      var _this5 = this;
	
	      var prev_char = " "; // Used to calculate kerning
	
	      var cpos = pos; // Current pen position
	
	      var x_max = 0.0; // Max width - used for bounding box
	
	      var scale = font_metrics.capScale;
	      var str_pos = 0;
	
	      for (;;) {
	        if (str_pos === string.length) break;
	        var schar = string[str_pos];
	        str_pos++;
	
	        if (schar === "\n") {
	          if (cpos[0] > x_max) x_max = cpos[0]; // Expanding the bounding rect
	
	          cpos[0] = pos[0];
	          cpos[1] -= font_metrics.lineHeight;
	          prev_char = " ";
	          continue;
	        }
	
	        if (schar === " ") {//schar = "_"
	          //cpos[0] += font.space_advance * scale;
	          //prev_char = " ";
	          //continue;
	        }
	
	        var font_char = font.chars[schar];
	
	        if (!font_char) {
	          // Substituting unavailable characters with '?'
	          schar = "?";
	          font_char = font.chars["?"];
	        }
	
	        var kern = font.kern[prev_char + schar];
	        if (!kern) kern = 0.0; // calculating the glyph rectangle and copying it to the vertex array
	
	        var rect = this.charRect(cpos, font, font_metrics, font_char, kern);
	        rect.positions.map(function (pos) {
	          return _this5.vertices[_this5.arrayPositions.vertex++] = pos;
	        });
	        rect.uvs.map(function (uv) {
	          return _this5.uvs[_this5.arrayPositions.uvs++] = uv;
	        });
	        rect.sdfSizes.map(function (sdf) {
	          return _this5.sdfSizes[_this5.arrayPositions.sdf++] = sdf;
	        });
	        prev_char = schar;
	        cpos = rect.pos;
	      }
	
	      return {
	        rect: [pos[0], pos[1], x_max - pos[0], pos[1] - cpos[1] + font_metrics.lineHeight],
	        string_pos: str_pos //array_pos : array_pos
	
	      };
	    }
	  }, {
	    key: "fontMetrics",
	    value: function fontMetrics(fontSize) {
	      var moreLineGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
	      var _this$font = this.font,
	          cap_height = _this$font.cap_height,
	          x_height = _this$font.x_height,
	          fontAscent = _this$font.ascent,
	          descent = _this$font.descent,
	          line_gap = _this$font.line_gap;
	      var capScale = this.style.fontSize / cap_height;
	      var lowScale = Math.round(x_height * capScale) / x_height;
	      var ascent = Math.round(fontAscent * capScale);
	      var lineHeight = Math.round(capScale * (fontAscent + descent + line_gap) + moreLineGap);
	      if (this.style.lineHeight > 0) lineHeight = this.style.lineHeight;else this.style.lineHeight = lineHeight;
	      return {
	        capScale: capScale,
	        lowScale: lowScale,
	        ascent: ascent,
	        lineHeight: lineHeight
	      };
	    }
	  }, {
	    key: "charRect",
	    value: function charRect(pos, font, font_metrics, font_char) {
	      var kern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.0;
	      // Low case characters have first bit set in 'flags'
	      var lowcase = (font_char.flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - font_metrics.ascent; // Low case chars use their own scale
	
	      var scale = lowcase ? font_metrics.lowScale : font_metrics.capScale; // Laying out the glyph rectangle
	
	      var g = font_char.rect;
	      var bottom = baseline - scale * (font.descent + font.iy);
	      var top = bottom + scale * font.row_height;
	      var left = pos[0] + scale * (font_char.bearing_x + kern - font.ix);
	      var right = left + scale * (g[2] - g[0]);
	      var p = [left, top, right, bottom]; // Advancing pen position
	
	      var new_pos_x = pos[0] + scale * font_char.advance_x; // Signed distance field size in screen pixels
	
	      var sdf_size = 2.0 * font.iy * scale;
	      var positions = [p[0], p[3], // left bottom,
	      p[2], p[3], // right bottom,
	      p[2], p[1], // right top
	      p[0], p[1]];
	      var uvs = [g[0], g[1], // left top
	      g[2], g[1], // right top
	      g[2], g[3], // right bottom,
	      g[0], g[3]];
	      var sdfSizes = [sdf_size, sdf_size, sdf_size, sdf_size];
	      return {
	        positions: positions,
	        uvs: uvs,
	        sdfSizes: sdfSizes,
	        pos: [new_pos_x, pos[1]]
	      }; //return { vertices : vertices, pos : [ new_pos_x, pos[1] ] };
	    }
	  }, {
	    key: "text",
	    get: function get() {
	      return this._text;
	    },
	    set: function set(value) {
	      this._text = value;
	      this.update();
	    }
	  }, {
	    key: "texture",
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: "font",
	    get: function get() {
	      return this._font;
	    }
	  }]);
	
	  return AwesomeText;
	}(PIXI.mesh.Mesh);
	
	_defineProperty(AwesomeText, "scale", 1.0);
	
	_defineProperty(AwesomeText, "states", {
	  regular: 0,
	  editable: 1,
	  selecting: 2
	});
	
	_defineProperty(AwesomeText, "currentEditingElement", null);
	
	var _default = AwesomeText;
	exports["default"] = _default;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
	
	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
	
	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
	
	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var TextLayout =
	/*#__PURE__*/
	function () {
	  function TextLayout(owner, config) {
	    _classCallCheck(this, TextLayout);
	
	    _defineProperty(this, "text", "");
	
	    _defineProperty(this, "font", null);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "fontSize", 20);
	
	    _defineProperty(this, "align", "left");
	
	    _defineProperty(this, "startX", 0);
	
	    _defineProperty(this, "startY", 0);
	
	    _defineProperty(this, "wrapperWidth", 100);
	
	    _defineProperty(this, "wrapWords", false);
	
	    _defineProperty(this, "wordsMetrics", []);
	
	    _defineProperty(this, "lettersCount", 0);
	
	    _defineProperty(this, "height", 0);
	
	    _defineProperty(this, "linesCount", 0);
	
	    _defineProperty(this, "lineHeight", 0);
	
	    _defineProperty(this, "glyphs", []);
	
	    _defineProperty(this, "owner", null);
	
	    this.owner = owner;
	    this.text = owner.text;
	    this.font = owner.font;
	    this.fontSize = config.fontSize;
	    this.wrapWords = config.wrapWords;
	    this.wrapperWidth = config.wrapperWidth;
	    this.lineHeight = config.lineHeight;
	    this.align = config.align;
	    this.update();
	  }
	
	  _createClass(TextLayout, [{
	    key: "update",
	    value: function update() {
	      var _this = this;
	
	      this.text = this.owner.text;
	      this.font = this.owner.font;
	      this.lettersCount = this.text.split("").length;
	      this.metrics = this.fontMetrics(this.font, 0.0);
	      this.startY = this.metrics.lineHeight;
	      this.calculateWordsPositions();
	      this.glyphs = [];
	      this.wordsMetrics.forEach(function (word) {
	        _this.getGlyphs(word.word, [word.x, word.y]);
	      });
	    }
	  }, {
	    key: "fontMetrics",
	    value: function fontMetrics(fontSize) {
	      var moreLineGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
	      var _this$font = this.font,
	          cap_height = _this$font.cap_height,
	          x_height = _this$font.x_height,
	          fontAscent = _this$font.ascent,
	          descent = _this$font.descent,
	          line_gap = _this$font.line_gap;
	      var capScale = this.fontSize / cap_height;
	      var lowScale = Math.round(x_height * capScale) / x_height;
	      var ascent = Math.round(fontAscent * capScale);
	      var lineHeight = Math.round(capScale * (fontAscent + descent + line_gap) + moreLineGap);
	      if (this.lineHeight > 0) lineHeight = this.lineHeight;else this.lineHeight = lineHeight;
	      return {
	        capScale: capScale,
	        lowScale: lowScale,
	        ascent: ascent,
	        lineHeight: lineHeight
	      };
	    }
	  }, {
	    key: "charRect",
	    value: function charRect(pos, font_char) {
	      var kern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
	      // Low case characters have first bit set in 'flags'
	      var lowcase = (font_char.flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - this.metrics.ascent; // Low case chars use their own scale
	
	      var scale = lowcase ? this.metrics.lowScale : this.metrics.capScale; // Laying out the glyph rectangle
	
	      var g = font_char.rect;
	      var bottom = baseline - scale * (this.font.descent + this.font.iy);
	      var top = bottom + scale * this.font.row_height;
	      var left = pos[0] + scale * (font_char.bearing_x + kern - this.font.ix);
	      var right = left + scale * (g[2] - g[0]);
	      var p = [left, top, right, bottom]; // Advancing pen position
	
	      var new_pos_x = pos[0] + scale * font_char.advance_x;
	      var positions = [p[0], p[3], // left bottom,
	      p[2], p[3], // right bottom,
	      p[2], p[1], // right top
	      p[0], p[1]];
	      return {
	        positions: positions,
	        pos: [new_pos_x, pos[1]],
	        metrics: {
	          x: pos[0],
	          y: pos[1],
	          width: scale * font_char.advance_x
	        }
	      };
	    }
	  }, {
	    key: "getStringSize",
	    value: function getStringSize(string) {
	      var _this2 = this;
	
	      var width = 0;
	      var height = this.metrics.lineHeight;
	
	      var chars = _toConsumableArray(string); // Iterate thought the chars, calculate position
	
	
	      chars.forEach(function (_char) {
	        var font_char = _this2.font.chars[_char];
	        /*if (char === " ") {
	          width += this.font.space_advance * this.metrics.capScale;
	          return;
	        }*/
	        // Get char metrics
	
	        var charRect = _this2.charRect([width, 0], font_char, 0.2);
	
	        width = charRect.pos[0];
	      });
	      return {
	        width: width,
	        height: height
	      };
	    }
	  }, {
	    key: "calculateWordsPositions",
	    value: function calculateWordsPositions() {
	      var _this3 = this;
	
	      var words = this.text.split(" ");
	
	      for (var i = 0; i < words.length - 1; i++) {
	        words[i] = words[i] + " ";
	      }
	
	      this.wordsMetrics = []; // Initial position
	
	      var x = this.startX;
	      var y = this.startY; // Calculate words positions on lines
	
	      words.forEach(function (word) {
	        var wordSize = _this3.getStringSize(word);
	
	        if (x + wordSize.width > _this3.startX + _this3.wrapperWidth && _this3.wrapWords) {
	          x = _this3.startX;
	          y += wordSize.height;
	        }
	
	        _this3.wordsMetrics.push(_extends({}, wordSize, {
	          x: x,
	          y: y,
	          word: word
	        })); //x += wordSize.width + this.font.space_advance * this.metrics.capScale;
	
	
	        x += wordSize.width;
	      }); // Calculate lines count
	
	      this.linesCount = (y - this.startY) / this.metrics.lineHeight + 1;
	      this.height = this.linesCount * this.metrics.lineHeight; // Change align TODO optimise
	
	      var _loop = function _loop(_i) {
	        var wordsOnLine = _this3.wordsMetrics.filter(function (word) {
	          return word.y === _this3.startY + _i * _this3.metrics.lineHeight;
	        });
	
	        var lastWord = wordsOnLine[wordsOnLine.length - 1];
	
	        if (lastWord) {
	          var freeSpace = _this3.startX + _this3.wrapperWidth - (lastWord.x + lastWord.width);
	          var leftOffset = 0;
	
	          switch (_this3.align) {
	            case "center":
	              leftOffset = freeSpace / 2;
	              break;
	
	            case "right":
	              leftOffset = freeSpace;
	              break;
	          }
	
	          _this3.wordsMetrics.forEach(function (word) {
	            if (word.y === _this3.startY + _i * _this3.metrics.lineHeight) {
	              word.x += leftOffset;
	            }
	          });
	        }
	      };
	
	      for (var _i = 0; _i < this.linesCount; ++_i) {
	        _loop(_i);
	      }
	    }
	  }, {
	    key: "getGlyphs",
	    value: function getGlyphs(string, pos) {
	      var prev_char = " "; // Used to calculate kerning
	
	      var cpos = pos; // Current pen position
	
	      var x_max = 0.0; // Max width - used for bounding box
	
	      var scale = this.metrics.capScale;
	      var str_pos = 0;
	
	      for (;;) {
	        if (str_pos === string.length) break;
	        var schar = string[str_pos];
	        str_pos++;
	
	        if (schar === "\n") {
	          if (cpos[0] > x_max) x_max = cpos[0]; // Expanding the bounding rect
	
	          cpos[0] = pos[0];
	          cpos[1] -= this.metrics.lineHeight;
	          prev_char = " ";
	          continue;
	        }
	
	        if (schar === " ") {
	          //schar = "_"
	          //cpos[0] += this.font.space_advance * scale;
	          prev_char = " "; //continue;
	        }
	
	        var font_char = this.font.chars[schar];
	
	        if (!font_char) {
	          // Substituting unavailable characters with '?'
	          schar = "?";
	          font_char = this.font.chars["?"];
	        }
	
	        var kern = this.font.kern[prev_char + schar];
	        if (!kern) kern = 0.0; // calculating the glyph rectangle and copying it to the vertex array
	
	        var rect = this.charRect(cpos, font_char, kern);
	        prev_char = schar;
	        cpos = rect.pos;
	        this.glyphs.push({
	          letter: schar,
	          vertices: rect.positions,
	          position: rect.pos,
	          metrics: rect.metrics
	        });
	      }
	    }
	  }]);
	
	  return TextLayout;
	}();
	
	var _default = TextLayout;
	exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(5);
	
	var Select =
	/*#__PURE__*/
	function () {
	  function Select(owner) {
	    _classCallCheck(this, Select);
	
	    _defineProperty(this, "range", [0, 0]);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "layout", null);
	
	    _defineProperty(this, "dirty", false);
	
	    _defineProperty(this, "indexBuffer", false);
	
	    _defineProperty(this, "owner", null);
	
	    this.owner = owner;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	  }
	
	  _createClass(Select, [{
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout; // Vertices array for all selected lines
	
	      this.vertices = new Float32Array(this.layout.linesCount * 4 * 2);
	      if (this.range[1] !== null) this.buildVertices();
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.linesCount
	      });
	      this.dirty = true;
	      this.indexBuffer = true;
	    }
	  }, {
	    key: "setRange",
	    value: function setRange() {
	      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var glyphs = this.owner.layout.glyphs;
	      if (start === null) start = this.range[0];
	      if (end === null) end = this.range[1];
	      if (start < 0) start = 0;
	      if (end < 0) end = 0;
	      if (start > glyphs.length - 1) start = glyphs.length - 1;
	      if (end > glyphs.length - 1) end = glyphs.length - 1;
	      if (end === false) end = null;
	      this.range = [start, end];
	      this.update();
	    }
	  }, {
	    key: "buildVertices",
	    value: function buildVertices() {
	      var _this = this;
	
	      this.metrics = this.owner.layout.metrics; // Select range
	
	      var start = this.layout.glyphs[Math.min.apply(null, this.range)];
	      var end = this.layout.glyphs[Math.max.apply(null, this.range)]; // Iterate thought all lines
	
	      var _loop = function _loop(i) {
	        var letterCount = 0; // letters passed
	
	        var firstLetter = null; // first letter on this line
	
	        var lastLetter = null; // last letter on this line
	
	        if (i * _this.metrics.lineHeight + _this.metrics.lineHeight < start.position[1]) return "continue";
	        if (i * _this.metrics.lineHeight + _this.metrics.lineHeight > end.position[1]) return "continue"; // Take every word, if it's last or first on line - change bounds letters
	
	        _this.layout.wordsMetrics.map(function (word) {
	          if (word.y === _this.layout.startY + i * _this.metrics.lineHeight) {
	            if (firstLetter === null) firstLetter = letterCount;
	            lastLetter = letterCount + word.word.length - 1;
	          }
	
	          letterCount += word.word.length;
	        }); // Bounds letters for current line
	
	
	        var startLineLetter = _this.layout.glyphs[firstLetter];
	        var endLineLetter = _this.layout.glyphs[lastLetter]; // If the start or end range is on this line, change bounds for them
	
	        if (start.position[1] === startLineLetter.position[1]) startLineLetter = start;
	        if (end.position[1] === endLineLetter.position[1]) endLineLetter = end; // We use offset to avoid selects overlapping
	
	        var offset = (_this.metrics.lineHeight - _this.metrics.ascent) / 2; // Add positions to array
	
	        _this.vertices[i * 8] = startLineLetter.vertices[0];
	        _this.vertices[i * 8 + 1] = startLineLetter.vertices[1] + offset;
	        _this.vertices[i * 8 + 2] = endLineLetter.vertices[2];
	        _this.vertices[i * 8 + 3] = endLineLetter.vertices[3] + offset;
	        _this.vertices[i * 8 + 4] = endLineLetter.vertices[4];
	        _this.vertices[i * 8 + 5] = endLineLetter.vertices[5] - offset;
	        _this.vertices[i * 8 + 6] = startLineLetter.vertices[6];
	        _this.vertices[i * 8 + 7] = startLineLetter.vertices[7] - offset;
	      };
	
	      for (var i = 0; i < this.layout.linesCount; ++i) {
	        var _ret = _loop(i);
	
	        if (_ret === "continue") continue;
	      }
	    }
	  }, {
	    key: "getClosestGlyph",
	    value: function getClosestGlyph(x, y) {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout;
	      var glyphs = this.owner.layout.glyphs;
	      var lineHeight = this.metrics.lineHeight;
	      var selectingLine = Math.floor(y / this.metrics.lineHeight);
	      var selectingLineY = selectingLine * lineHeight;
	      var lastGlyphOnLine = glyphs[glyphs.length - 1];
	      var firstGlyphOnLine = null;
	
	      for (var i = 0; i < glyphs.length; ++i) {
	        var glyph = glyphs[i];
	
	        if (glyph.metrics.y === selectingLineY + lineHeight) {
	          lastGlyphOnLine = glyph;
	
	          if (x < glyph.metrics.x + glyph.metrics.width / 2) {
	            if (i === 0) return -1;
	            return glyphs[i - 1];
	          }
	        }
	      }
	
	      return lastGlyphOnLine;
	    }
	  }, {
	    key: "onMouseDown",
	    value: function onMouseDown(event) {
	      // Only left mouse button
	      if (event.data.button !== 0) return;
	      var position = event.data.global;
	      var ownerPosition = this.owner.getGlobalPosition();
	      position.x -= ownerPosition.x;
	      position.y -= ownerPosition.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index + 1, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      var ownerPosition = this.owner.getGlobalPosition();
	      position.x -= ownerPosition.x;
	      position.y -= ownerPosition.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(null, index + 1);
	    }
	  }, {
	    key: "onMouseUp",
	    value: function onMouseUp(event) {
	      // Only left mouse button
	      if (event.data.button !== 0) return;
	      var position = event.data.global;
	      var ownerPosition = this.owner.getGlobalPosition();
	      position.x -= ownerPosition.x;
	      position.y -= ownerPosition.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y); // -1 means that we at the start of the line
	
	      if (closestLetter === -1) {
	        this.owner.input.glyphIndex = closestLetter;
	      } else {
	        this.owner.input.glyphIndex = this.owner.layout.glyphs.indexOf(closestLetter);
	      }
	    }
	  }, {
	    key: "clearSelectedRange",
	    value: function clearSelectedRange() {
	      var range = this.range; // If user selected some text, remove it
	
	      if (range[1] !== null) {
	        this.owner.input.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.select.setRange(0, false);
	        this.owner.removeString(removeIndex, removeLength);
	        this.owner.input.show();
	      }
	    }
	  }, {
	    key: "expand",
	    value: function expand(direction) {
	      this.range[1] += direction;
	      this.update();
	    }
	  }]);
	
	  return Select;
	}();
	
	var _default = Select;
	exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(6)
	var anArray = __webpack_require__(7)
	var isBuffer = __webpack_require__(8)
	
	var CW = [0, 2, 3]
	var CCW = [2, 1, 3]
	
	module.exports = function createQuadElements(array, opt) {
	    //if user didn't specify an output array
	    if (!array || !(anArray(array) || isBuffer(array))) {
	        opt = array || {}
	        array = null
	    }
	
	    if (typeof opt === 'number') //backwards-compatible
	        opt = { count: opt }
	    else
	        opt = opt || {}
	
	    var type = typeof opt.type === 'string' ? opt.type : 'uint16'
	    var count = typeof opt.count === 'number' ? opt.count : 1
	    var start = (opt.start || 0) 
	
	    var dir = opt.clockwise !== false ? CW : CCW,
	        a = dir[0], 
	        b = dir[1],
	        c = dir[2]
	
	    var numIndices = count * 6
	
	    var indices = array || new (dtype(type))(numIndices)
	    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
	        var x = i + start
	        indices[x + 0] = j + 0
	        indices[x + 1] = j + 1
	        indices[x + 2] = j + 2
	        indices[x + 3] = j + a
	        indices[x + 4] = j + b
	        indices[x + 5] = j + c
	    }
	    return indices
	}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function(dtype) {
	  switch (dtype) {
	    case 'int8':
	      return Int8Array
	    case 'int16':
	      return Int16Array
	    case 'int32':
	      return Int32Array
	    case 'uint8':
	      return Uint8Array
	    case 'uint16':
	      return Uint16Array
	    case 'uint32':
	      return Uint32Array
	    case 'float32':
	      return Float32Array
	    case 'float64':
	      return Float64Array
	    case 'array':
	      return Array
	    case 'uint8_clamped':
	      return Uint8ClampedArray
	  }
	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var str = Object.prototype.toString
	
	module.exports = anArray
	
	function anArray(arr) {
	  return (
	       arr.BYTES_PER_ELEMENT
	    && str.call(arr.buffer) === '[object ArrayBuffer]'
	    || Array.isArray(arr)
	  )
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Input =
	/*#__PURE__*/
	function () {
	  _createClass(Input, [{
	    key: "glyphIndex",
	    set: function set(value) {
	      this._glyphIndex = value;
	      if (this._glyphIndex < -1) this._glyphIndex = -1;
	      if (this._glyphIndex > this.owner.layout.glyphs.length) this._glyphIndex = this.owner.layout.glyphs.length;
	      this.update();
	    },
	    get: function get() {
	      return this._glyphIndex;
	    }
	  }, {
	    key: "enabled",
	    set: function set(value) {
	      this._enabled = value;
	
	      if (this._enabled) {
	        this.enable();
	      } else {
	        this.disable();
	      }
	    },
	    get: function get() {
	      return this._enabled;
	    }
	  }]);
	
	  function Input(owner) {
	    _classCallCheck(this, Input);
	
	    _defineProperty(this, "_enabled", false);
	
	    _defineProperty(this, "owner", null);
	
	    _defineProperty(this, "_glyphIndex", -1);
	
	    this.owner = owner;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	    this.canvas = document.getElementsByTagName("canvas")[0];
	    this.createField();
	    this.disable();
	  }
	
	  _createClass(Input, [{
	    key: "enable",
	    value: function enable() {
	      this.inputElement.style.display = 'block';
	      document.body.append(this.inputElement);
	    }
	  }, {
	    key: "disable",
	    value: function disable() {
	      this.inputElement.style.display = 'none';
	      if (document.body.contains(this.inputElement)) document.body.removeChild(this.inputElement);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      this.inputElement.style.opacity = '0';
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      this.inputElement.style.opacity = '1';
	    }
	  }, {
	    key: "createField",
	    value: function createField() {
	      var _this = this;
	
	      this.inputElement = document.createElement("input");
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
	      this.inputElement.style.backgroundColor = 'transparent'; //this.inputElement.style.backgroundColor = 'rgba(0,0,0,0.3)';
	
	      this.inputElement.style.color = 'transparent';
	      this.inputElement.style.border = "none";
	      this.inputElement.style.position = 'fixed';
	      this.inputElement.style.contain = 'strict';
	      this.inputElement.style.zIndex = 2;
	      this.inputElement.style.pointerEvents = "none";
	      this.inputElement.style.outline = "none";
	      this.inputElement.style.color = this.owner.style.fill;
	      this.inputElement.style.transformOrigin = "left top";
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	      this.inputElement.style.padding = "0";
	      this.addEvent("blur", function (event) {
	        return _this.inputElement.focus();
	      });
	      this.addEvent("input", function (event) {
	        return _this.onInput(event);
	      });
	      this.addEvent("keydown", function (event) {
	        return _this.onKeydown(event);
	      });
	      this.addEvent("paste", function (event) {
	        return _this.pasteFromClipboard(event);
	      });
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout;
	      var glyphs = this.owner.layout.glyphs;
	
	      if (this.glyphIndex >= glyphs.length) {
	        this.glyphIndex = glyphs.length - 1;
	      } // Default caret place - start of the input field TODO implement align
	
	
	      var glyphMetrics = {
	        x: this.owner.position.x,
	        y: this.owner.position.y
	      }; // if string is empty, put caret at the beginning
	
	      if (this.owner.layout.glyphs.length === -1) {// if we on the last glyph, place caret after it
	      } else if (this.glyphIndex === glyphs.length) {
	        var lastGlyph = glyphs[glyphs.length - 1];
	        glyphMetrics.x += lastGlyph.metrics.x + lastGlyph.metrics.width;
	        glyphMetrics.y += lastGlyph.metrics.y; // if caret in the middle of the text
	      } else if (this.glyphIndex !== -1) {
	        var selectedGlyph = glyphs[this.glyphIndex];
	        glyphMetrics.x += selectedGlyph.metrics.x + selectedGlyph.metrics.width;
	        glyphMetrics.y += selectedGlyph.metrics.y;
	      } else {
	        glyphMetrics.y += this.owner.style.lineHeight;
	      }
	
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	      this.inputElement.style.height = this.metrics.lineHeight + "px";
	      this.inputElement.style.fontSize = this.metrics.lineHeight + "px";
	      this.setPosition(glyphMetrics.x, glyphMetrics.y);
	      this.inputElement.focus();
	    }
	  }, {
	    key: "onInput",
	    value: function onInput(event) {
	      var range = this.owner.select.range;
	      this.owner.select.clearSelectedRange();
	      event.target.value = "";
	      if (event.data === null) return; // Content we are about to add
	
	      var textToAdd = event.data;
	
	      if (this.owner.config.uppercase) {
	        textToAdd = textToAdd.toUpperCase();
	      }
	
	      if (this.owner.config.lowercase) {
	        textToAdd = textToAdd.toLowerCase();
	      } // If text is empty now
	
	
	      if (this.owner.layout.glyphs.length === 0) {
	        this.owner.text = textToAdd;
	        this.glyphIndex = 1; // If caret is at the end of the text
	      } else if (this.glyphIndex === this.owner.layout.glyphs.length - 1) {
	        this.owner.text += textToAdd;
	        this.glyphIndex++; // If we in the middle of the line
	      } else {
	        this.owner.insertString(++this.glyphIndex, textToAdd); //this.glyphIndex++;
	      }
	
	      this.owner.select.setRange(0, false);
	    }
	  }, {
	    key: "onKeydown",
	    value: function onKeydown(event) {
	      var range = this.owner.select.range;
	
	      switch (event.key) {
	        case "ArrowUp":
	          this.moveUp();
	          break;
	
	        case "ArrowDown":
	          this.moveDown();
	          break;
	
	        case "ArrowLeft":
	          // Move by word
	          if (event.ctrlKey) {
	            this.moveByWordLeft(); // Select
	          } else if (event.shiftKey) {
	            this.moveWithSelectLeft(); // Just move cursor
	          } else {
	            this.owner.select.setRange(0, false);
	            this.show();
	            this.glyphIndex--;
	          }
	
	          break;
	
	        case "ArrowRight":
	          // Move by word
	          if (event.ctrlKey) {
	            this.moveByWordRight(); // Select
	          } else if (event.shiftKey) {
	            this.moveWithSelectRight(); // Just move index
	          } else {
	            this.owner.select.setRange(0, false);
	            this.show();
	            this.glyphIndex++;
	          }
	
	          break;
	
	        case "Backspace":
	          if (range[1] !== null) {
	            this.owner.select.clearSelectedRange();
	          } else {
	            this.owner.removeString(this.glyphIndex--, 0);
	          }
	
	          break;
	
	        case "Delete":
	          if (range[1] !== null) {
	            this.owner.select.clearSelectedRange();
	          } else {
	            this.owner.removeString(this.glyphIndex + 1, 0);
	          }
	
	          break;
	        // Select all
	
	        case "a":
	          if (event.ctrlKey) {
	            this.owner.select.setRange(0, this.owner.text.length - 1);
	          }
	
	          break;
	        // Copy to clipboard
	
	        case "c":
	          if (event.ctrlKey) {
	            this.copyToClipboard();
	          }
	
	          break;
	        // Cut
	
	        case "x":
	          if (event.ctrlKey) {
	            this.copyToClipboard(true);
	          }
	
	      }
	
	      this.inputElement.value = " ";
	      this.inputElement.value = "";
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(x, y) {
	      var _this$owner$transform = this.owner.transform.worldTransform,
	          scaleX = _this$owner$transform.a,
	          scaleY = _this$owner$transform.d;
	      var _this$owner$position = this.owner.position,
	          localX = _this$owner$position.x,
	          localY = _this$owner$position.y;
	      var lineHeight = this.metrics.lineHeight * scaleY;
	      y *= scaleY;
	      x *= scaleX;
	      y -= lineHeight;
	      y -= localY * scaleY;
	      x -= localX * scaleX;
	      this.inputElement.style.left = "".concat(x, "px");
	      this.inputElement.style.top = "".concat(y, "px");
	      this.inputElement.value = " ";
	      this.inputElement.value = "";
	      var transform = Object.values(this.getTransform()).slice(0, 6);
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	    }
	  }, {
	    key: "getTransform",
	    value: function getTransform() {
	      var ownerTransform = this.owner.transform.worldTransform;
	      var canvasRect = this.canvas.getBoundingClientRect();
	      return _extends({}, ownerTransform, {
	        tx: ownerTransform.tx + canvasRect.x,
	        ty: ownerTransform.ty + canvasRect.y
	      });
	    }
	  }, {
	    key: "addEvent",
	    value: function addEvent(event, callback) {
	      var _this2 = this;
	
	      this.inputElement.addEventListener(event, function (event) {
	        if (_this2._enabled) {
	          callback(event);
	        }
	      });
	    }
	  }, {
	    key: "copyToClipboard",
	    value: function copyToClipboard() {
	      var cut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      var range = this.owner.select.range;
	      var start = Math.min.apply(null, range);
	      var end = Math.max.apply(null, range);
	      this.inputElement.value = this.owner.text.slice(start, end + 1);
	      this.inputElement.select();
	      document.execCommand("copy");
	      this.inputElement.value = "";
	
	      if (cut) {
	        this.owner.select.clearSelectedRange();
	      }
	    }
	  }, {
	    key: "pasteFromClipboard",
	    value: function pasteFromClipboard(event) {
	      event.preventDefault();
	      var text = event.clipboardData.getData("text");
	      if (this.owner.config.uppercase) text = text.toUpperCase();
	      if (this.owner.config.lowercase) text = text.toLowerCase(); // TODO remove all trash symbols
	
	      this.owner.select.clearSelectedRange();
	      this.owner.insertString(this.glyphIndex + 1, text);
	      this.glyphIndex = this.glyphIndex + text.length;
	    }
	  }, {
	    key: "moveWithSelectRight",
	    value: function moveWithSelectRight() {
	      var range = this.owner.select.range;
	
	      if (range[1] === null) {
	        ++this.glyphIndex;
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex;
	      } else if (range[1] === range[0] && this.glyphIndex === range[0] - 1) {
	        range[1] = null;
	        this.glyphIndex++;
	      } else {
	        this.owner.select.expand(1);
	        this.glyphIndex++;
	      }
	
	      this.owner.select.update();
	    }
	  }, {
	    key: "moveWithSelectLeft",
	    value: function moveWithSelectLeft() {
	      var range = this.owner.select.range; // If we only have cursor, no selection
	
	      if (range[1] === null) {
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex; // If we have selected one glyph and we remove selection
	      } else if (range[1] === range[0] && this.glyphIndex === range[0]) {
	        range[1] = null; // Regular selecting
	      } else {
	        this.owner.select.expand(-1);
	      }
	
	      this.glyphIndex--;
	      this.owner.select.update();
	    }
	  }, {
	    key: "moveDown",
	    value: function moveDown() {
	      this.owner.select.setRange(null, false);
	      var glyph = this.layout.glyphs[Math.max(0, this.glyphIndex)]; // If we are on the first line
	
	      if (glyph.position[1] === this.layout.height) {
	        return;
	      }
	
	      var newGlyph = this.owner.select.getClosestGlyph(glyph.position[0], glyph.position[1]);
	      this.glyphIndex = this.layout.glyphs.indexOf(newGlyph);
	    }
	  }, {
	    key: "moveUp",
	    value: function moveUp() {
	      this.owner.select.setRange(null, false);
	      var glyph = this.layout.glyphs[this.glyphIndex]; // If we are on the first line
	
	      if (glyph.position[1] <= this.metrics.lineHeight) {
	        return;
	      }
	
	      var newGlyph = this.owner.select.getClosestGlyph(glyph.position[0], glyph.position[1] - this.metrics.lineHeight * 2);
	      this.glyphIndex = this.layout.glyphs.indexOf(newGlyph);
	    }
	  }, {
	    key: "moveByWordLeft",
	    value: function moveByWordLeft() {
	      var glyphs = this.layout.glyphs;
	
	      if (this.glyphIndex > 0) {
	        for (var i = this.glyphIndex - 2; i >= 0; i--) {
	          if (glyphs[i].letter === " " && glyphs[i + 1].letter !== " ") {
	            this.glyphIndex = i;
	            return;
	          }
	
	          if (i === 0) this.glyphIndex = -1;
	        }
	      }
	    }
	  }, {
	    key: "moveByWordRight",
	    value: function moveByWordRight() {
	      var glyphs = this.layout.glyphs;
	
	      if (this.glyphIndex < glyphs.length) {
	        for (var i = this.glyphIndex + 1; i <= glyphs.length - 1; i++) {
	          if (glyphs[i].letter === " " && glyphs[i - 1].letter !== " ") {
	            this.glyphIndex = i;
	            return;
	          }
	
	          if (i === glyphs.length - 1) this.glyphIndex = glyphs.length - 1;
	        }
	      }
	    }
	  }]);
	
	  return Input;
	}();
	
	var _default = Input;
	exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float sdfMultiplier;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize * sdfMultiplier;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = texture2D(uSampler, tc0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main(void) {\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 bg_color;\nvarying vec2  tc0;\n\nvoid main() {\n    gl_FragColor = vec4(bg_color,0.45);\n    gl_FragColor = vec4(1.0, 1.0, 1.0,0.2);\n}\n\n\n"

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNTFhNjdlZjU4OGRhOTgwZDE5OCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsImNvbmZpZyIsImFudGlhbGlhc2luZyIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsIm93bmVyIiwic3RhcnRZIiwiY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMiLCJnbHlwaHMiLCJnZXRHbHlwaHMiLCJ3aWR0aCIsImhlaWdodCIsImNoYXIiLCJ3b3JkcyIsImkiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsIndvcmRzT25MaW5lIiwiZmlsdGVyIiwibGFzdFdvcmQiLCJmcmVlU3BhY2UiLCJsZWZ0T2Zmc2V0IiwibGV0dGVyIiwicG9zaXRpb24iLCJyYW5nZSIsImJ1aWxkVmVydGljZXMiLCJzdGFydCIsImVuZCIsIm1pbiIsImFwcGx5IiwibWF4IiwibGV0dGVyQ291bnQiLCJmaXJzdExldHRlciIsImxhc3RMZXR0ZXIiLCJzdGFydExpbmVMZXR0ZXIiLCJlbmRMaW5lTGV0dGVyIiwib2Zmc2V0Iiwic2VsZWN0aW5nTGluZSIsImZsb29yIiwic2VsZWN0aW5nTGluZVkiLCJsYXN0R2x5cGhPbkxpbmUiLCJmaXJzdEdseXBoT25MaW5lIiwiZ2x5cGgiLCJldmVudCIsImJ1dHRvbiIsImdsb2JhbCIsIm93bmVyUG9zaXRpb24iLCJnZXRHbG9iYWxQb3NpdGlvbiIsImNsb3Nlc3RMZXR0ZXIiLCJnZXRDbG9zZXN0R2x5cGgiLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwiZGlyZWN0aW9uIiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwicGFzdGVGcm9tQ2xpcGJvYXJkIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwiY2xlYXJTZWxlY3RlZFJhbmdlIiwidGFyZ2V0IiwidGV4dFRvQWRkIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImluc2VydFN0cmluZyIsImtleSIsIm1vdmVVcCIsIm1vdmVEb3duIiwiY3RybEtleSIsIm1vdmVCeVdvcmRMZWZ0Iiwic2hpZnRLZXkiLCJtb3ZlV2l0aFNlbGVjdExlZnQiLCJtb3ZlQnlXb3JkUmlnaHQiLCJtb3ZlV2l0aFNlbGVjdFJpZ2h0IiwiY29weVRvQ2xpcGJvYXJkIiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJsb2NhbFgiLCJsb2NhbFkiLCJnZXRUcmFuc2Zvcm0iLCJvd25lclRyYW5zZm9ybSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0eCIsInR5IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiY3V0IiwiZXhlY0NvbW1hbmQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhwYW5kIiwibmV3R2x5cGgiXSwibWFwcGlu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TUFBTSxDQUFDTSxDQUFELENBQU4sQ0FBVVcsTUFBVixLQUFxQixHQUFyQixJQUE0QmpCLE1BQU0sQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBTixDQUFlVyxNQUFmLEtBQTBCLEdBQTFELEVBQStEO0FBQzdELGtCQUFLNkIsVUFBTCxHQUFrQnhDLENBQWxCO0FBQ0E7QUFDRDs7QUFDRCxlQUFJQSxDQUFDLEtBQUtOLE1BQU0sQ0FBQ3ZKLE1BQVAsR0FBZ0IsQ0FBMUIsRUFBNkIsS0FBS3FNLFVBQUwsR0FBa0I5QyxNQUFNLENBQUN2SixNQUFQLEdBQWUsQ0FBakM7QUFDOUI7QUFDRjtBQUVGOzs7Ozs7Z0JBSVlxRCxLOzs7Ozs7O0FDM2NmLHFFQUFvRSwrQkFBK0IsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MsOEJBQThCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHlCQUF5Qiw2RUFBNkUsOERBQThELDhCQUE4QiwrQkFBK0Isd0ZBQXdGLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0FudEIsaUVBQWdFLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDBCQUEwQix3OEJBQXc4Qiw4QkFBOEIsNEVBQTRFLGdDQUFnQyxpQ0FBaUMsNENBQTRDLGtFQUFrRSxpQkFBaUIsR0FBRyxrQkFBa0IsOENBQThDLEdBQUcscUJBQXFCLCtGQUErRiw4RUFBOEUsOEVBQThFLDRJQUE0SSw0REFBNEQsa0RBQWtELGtDQUFrQywrRUFBK0Usa0ZBQWtGLDJJQUEySSxnRUFBZ0Usb0ZBQW9GLHNHQUFzRyxnVUFBZ1UsZ0ZBQWdGLHVJQUF1SSxzQ0FBc0MsR0FBRyxPOzs7Ozs7QUNBbHNHLHFFQUFvRSxtQ0FBbUMsZ0NBQWdDLHFCQUFxQiw4R0FBOEcsS0FBSyxHOzs7Ozs7QUNBL1EsNERBQTJELG9CQUFvQixpQkFBaUIseUNBQXlDLDZDQUE2QyxHQUFHLE8iLCJmaWxlIjoicGl4aS1hd2Vzb21lLXRleHQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDUxYTY3ZWY1ODhkYTk4MGQxOTgiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vcmVuZGVyZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5cbk9iamVjdC5hc3NpZ24oUElYSS5leHRyYXMsIHtcbiAgQXdlc29tZVRleHQ6IFRleHRcbn0pO1xuXG5pZiAodHlwZW9mIFBJWEkgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChQSVhJLmV4dHJhcykge1xuICAgIFBJWEkuZXh0cmFzLkF3ZXNvbWVUZXh0ID0gVGV4dDtcbiAgfSBlbHNlIHtcbiAgICBQSVhJLmV4dHJhcyA9IHsgQXdlc29tZVRleHQ6IFRleHR9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRleHQsXG4gIFJlbmRlcmVyLFxuICBMYXlvdXRcbn1cblxuLypcblxuaXggICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X3dpZHRoXG5peSAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfaGVpZ2h0XG5yb3dfaGVpZ2h0ICAgID0gKHJvd19oZWlnaHQgKyAyICogc2RmX3NpemUpIC8gdGV4X2hlaWdodDtcbmFzcGVjdCAgICAgICAgPSB0ZXhfd2lkdGggLyB0ZXhfaGVpZ2h0O1xuYXNjZW50ICAgICAgICA9IGZvbnQtPmFzY2VudCAqIHNjYWxlWVxuZGVzY2VudCAgICAgICA9IGZhYnNmKGZvbnQtPmRlc2NlbnQgKiBzY2FsZVkpXG5saW5lX2dhcCAgICAgID0gZm9udC0+bGluZV9nYXAgKiBzY2FsZSBZXG5jYXBfaGVpZ2h0ICAgID0gZ3hjYXAubWF4LnkgKiBzY2FsZVlcbnhfaGVpZ2h0ICAgICAgPSBneC5tYXgueSAqIHNjYWxlWVxuc3BhY2VfYWR2YW5jZSA9IGdzcGFjZS5hZHZhbmNlX3dpZHRoICogc2NhbGVYXG5cblxuc2NhbGV5ID0gcm93X2hlaWdodCAvIHRleF9oZWlnaHQgLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbnNjYWxleCA9IHJvd19oZWlnaHQgLyB0ZXhfd2lkdGggLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbmdzcGFjZSA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnICcgKSBdO1xuZ3ggICAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICd4JyApIF1cbmd4Y2FwICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnWCcgKSBdXG5cblxuc2RmX3NpemUgPSAxMFxuXG4qL1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBBd2Vzb21lVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IHNlbGVjdFZlcnRleHRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBzZWxlY3RGcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcblxuICBzdGF0aWMgY29udGV4dFRleHQgPSAwO1xuICBzdGF0aWMgY29udGV4dFNlbGVjdCA9IDE7XG5cbiAgc2VsZWN0Q29sb3IgPSAweEZGQjNDMztcblxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgc3VwZXIocmVuZGVyZXIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBudWxsO1xuXG4gIH1cblxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuICAgIGdsLmdldEV4dGVuc2lvbihcIk9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1wiKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCBzZWxlY3RWZXJ0ZXh0U2hhZGVyLCBzZWxlY3RGcmFnbWVudFNoYWRlcik7XG4gIH1cblxuICByZW5kZXJUZXh0KHNvdXJjZSkge1xuXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XTtcblxuICAgIGlmICghZ2xEYXRhKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdID0gZ2xEYXRhO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2UuZGlydHkpIHtcbiAgICAgIHNvdXJjZS5kaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChzb3VyY2UudXZzKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2UudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKHNvdXJjZS5ibGVuZE1vZGUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHRoaXMucmVuZGVyZXIuYmluZFRleHR1cmUoc291cmNlLnRleHR1cmUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuaGludF9hbW91bnQgPSBzb3VyY2UuY29uZmlnLmFudGlhbGlhc2luZyAqIDE7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zZGZNdWx0aXBsaWVyID0gQXdlc29tZVRleHQuc2NhbGU7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSBzb3VyY2UuY29uZmlnLmFudGlhbGlhc2luZyAqIDE7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2UuaW5kaWNlcy5sZW5ndGgsIDApO1xuXG4gIH1cblxuICByZW5kZXJTZWxlY3Qoc291cmNlKSB7XG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdO1xuXG4gICAgaWYgKCFnbERhdGEgfHwgc291cmNlLnNlbGVjdC5kaXJ0eSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF0gPSBnbERhdGE7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLnNlbGVjdC5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoMTcpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHRoaXMuc2VsZWN0Q29sb3IpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcy5sZW5ndGgsIDApO1xuICB9XG5cbiAgcmVuZGVyKHNvdXJjZSkge1xuXG4gICAgaWYgKHNvdXJjZS5zdHlsZUlEICE9PSBzb3VyY2Uuc3R5bGUuc3R5bGVJRCkge1xuICAgICAgc291cmNlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSB8fCBzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyU2VsZWN0KHNvdXJjZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyVGV4dChzb3VyY2UpO1xuICB9XG5cbiAgYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcblxuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy50ZXh0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudXZzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZGZTaXplcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxuICAgICAgdmFvOiBudWxsLFxuICAgICAgZGlydHk6IHNvdXJjZS5kaXJ0eSxcbiAgICAgIGluZGV4RGlydHk6IHNvdXJjZS5pbmRleERpcnR5LFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMuc2VsZWN0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIHZhbzogbnVsbFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxufVxuXG5QSVhJLldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ0F3ZXNvbWVUZXh0UmVuZGVyZXInLCBBd2Vzb21lVGV4dFJlbmRlcmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcbmltcG9ydCBUZXh0TGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wO1xuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwbHVnaW5OYW1lID0gJ0F3ZXNvbWVUZXh0UmVuZGVyZXInO1xuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xuICBjbGlja3NDb3VudCA9IDA7XG5cbiAgY29uZmlnID0ge1xuICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgICB1cHBlcmNhc2U6IGZhbHNlLFxuICAgIGxvd2VyY2FzZTogZmFsc2UsXG4gICAgYW50aWFsaWFzaW5nOiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCJcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnLnRleHR1cmUpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZShzdHlsZSk7XG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ307XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7IC8vIENvbnRlbnRcbiAgICB0aGlzLl9mb250ID0gY29uZmlnLmZvbnQ7IC8vIEZvbnQgaW5mb3JtYXRpb25cbiAgICB0aGlzLl90ZXh0dXJlID0gY29uZmlnLnRleHR1cmU7IC8vIFRleHR1cmUgd2l0aCBnbHlwaHNcblxuICAgIC8vIENhbGN1bGF0ZSBsYXlvdXRcbiAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXG4gICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplLCAwLjApO1xuXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBBcnJheXMgZm9yIHZlcnRpY2VzLCB1dnMgYW5kIHNkZlxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMuc2RmU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQpO1xuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIC8vIEZpbGwgYXJyYXlzIHdvcmQgYnkgd29yZFxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICAvLyBQcmVwYXJlIGluZGljZXNcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaW5kZXhEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fZ2xEYXRhcyA9IFtdO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcblxuICAgIGlmICghdGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXRlcyB9ID0gQXdlc29tZVRleHQ7XG5cbiAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xuICAgICAgY2FzZSBzdGF0ZXMucmVndWxhcjpcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN0YXRlcy5lZGl0YWJsZTpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50Kys7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHNldEVkaXRhYmxlU3RhdGUoKSB7XG5cbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxuICAgIGlmIChBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gdGhpcztcblxuICAgIC8vIERpc2FibGUgdW5uZWNlc3NhcnkgZXZlbnRzXG4gICAgdGhpcy5vZmYoXCJjbGlja1wiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5oaWRlKCk7XG5cbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcbiAgICB0aGlzLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMudGV4dC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcbiAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgY29uc3Qge21vdmVtZW50WCwgbW92ZW1lbnRZfSA9IGUuZGF0YS5vcmlnaW5hbEV2ZW50O1xuICAgICAgaWYgKG1vdmVtZW50WCA9PT0gMCAmJiBtb3ZlbWVudFkgPT09IDApIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZU1vdmUoZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBpbmRleCkgKyBzdHJpbmcgKyB0aGlzLnRleHQuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIHJlbW92ZVN0cmluZyhpbmRleCwgbGVuZ3RoKSB7XG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xuICAgIHRoaXMudGV4dCA9IG5ld1RleHQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG4gIG93bmVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcblxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IG93bmVyLmZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLm93bmVyLmZvbnQ7XG5cbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLmZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdseXBocyA9IFtdO1xuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSB0aGlzLm1ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyB0aGlzLm1ldHJpY3MubG93U2NhbGUgOiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gdGhpcy5mb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSovXG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcblxuY2xhc3MgU2VsZWN0IHtcblxuICByYW5nZSA9IFswLDBdO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgbGF5b3V0ID0gbnVsbDtcbiAgZGlydHkgPSBmYWxzZTtcbiAgaW5kZXhCdWZmZXIgPSBmYWxzZTtcbiAgb3duZXIgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGluZXNDb3VudCAqIDQgKiAyKTtcblxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxuICAgIHRoaXMuYnVpbGRWZXJ0aWNlcygpO1xuXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XG4gICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICB0eXBlOiAndWludDE2JyxcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcbiAgICB9KTtcblxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSB0cnVlO1xuICB9XG5cbiAgc2V0UmFuZ2Uoc3RhcnQgPSBudWxsLCBlbmQgPSBudWxsKSB7XG5cbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xuXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRoaXMucmFuZ2VbMF07XG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcblxuICAgIGlmIChzdGFydCA+IGdseXBocy5sZW5ndGggLTEpc3RhcnQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKGVuZCA9PT0gZmFsc2UpIGVuZCA9IG51bGw7XG5cbiAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBidWlsZFZlcnRpY2VzKCkge1xuXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5sYXlvdXQubWV0cmljcztcbiAgICAvLyBTZWxlY3QgcmFuZ2VcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XG4gICAgbGV0IGVuZCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heC5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcblxuXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IGFsbCBsaW5lc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXlvdXQubGluZXNDb3VudDsgKytpKSB7XG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxuICAgICAgbGV0IGZpcnN0TGV0dGVyID0gbnVsbDsgLy8gZmlyc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxuICAgICAgbGV0IGxhc3RMZXR0ZXIgPSBudWxsOyAvLyBsYXN0IGxldHRlciBvbiB0aGlzIGxpbmVcblxuXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPCBzdGFydC5wb3NpdGlvblsxXSkgY29udGludWU7XG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xuXG4gICAgICAvLyBUYWtlIGV2ZXJ5IHdvcmQsIGlmIGl0J3MgbGFzdCBvciBmaXJzdCBvbiBsaW5lIC0gY2hhbmdlIGJvdW5kcyBsZXR0ZXJzXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xuXG4gICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMubGF5b3V0LnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xuICAgICAgICAgIGxhc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudCArIHdvcmQud29yZC5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0dGVyQ291bnQgKz0gd29yZC53b3JkLmxlbmd0aDtcbiAgICAgIH0pO1xuXG5cblxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxuICAgICAgbGV0IHN0YXJ0TGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tmaXJzdExldHRlcl07XG4gICAgICBsZXQgZW5kTGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tsYXN0TGV0dGVyXTtcblxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCByYW5nZSBpcyBvbiB0aGlzIGxpbmUsIGNoYW5nZSBib3VuZHMgZm9yIHRoZW1cbiAgICAgIGlmIChzdGFydC5wb3NpdGlvblsxXSA9PT0gIHN0YXJ0TGluZUxldHRlci5wb3NpdGlvblsxXSkgc3RhcnRMaW5lTGV0dGVyID0gc3RhcnQ7XG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xuXG4gICAgICAvLyBXZSB1c2Ugb2Zmc2V0IHRvIGF2b2lkIHNlbGVjdHMgb3ZlcmxhcHBpbmdcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcblxuICAgICAgLy8gQWRkIHBvc2l0aW9ucyB0byBhcnJheVxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDFdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzFdICsgb2Zmc2V0O1xuXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAzXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbM10gICArIG9mZnNldDtcblxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNV0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzVdICAtIG9mZnNldDtcblxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA3XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s3XSAgLSBvZmZzZXQ7XG5cbiAgICB9XG5cbiAgfVxuXG4gIGdldENsb3Nlc3RHbHlwaCh4LCB5KSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBjb25zdCB7IGdseXBocyB9ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZSA9IE1hdGguZmxvb3IoeSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KTtcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xuICAgIGxldCBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBmaXJzdEdseXBoT25MaW5lID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2x5cGhzLmxlbmd0aCA7ICsraSkge1xuXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XG5cbiAgICAgIGlmIChnbHlwaC5tZXRyaWNzLnkgPT09IHNlbGVjdGluZ0xpbmVZICsgbGluZUhlaWdodCkge1xuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcbiAgICAgICAgaWYgKHggPCBnbHlwaC5tZXRyaWNzLnggKyBnbHlwaC5tZXRyaWNzLndpZHRoIC8gMikge1xuICAgICAgICAgIGlmIChpID09PSAwKSByZXR1cm4gLTE7XG5cbiAgICAgICAgICByZXR1cm4gZ2x5cGhzW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XG5cbiAgfVxuXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XG5cbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xuXG4gICAgcG9zaXRpb24ueCAtPSBvd25lclBvc2l0aW9uLng7XG4gICAgcG9zaXRpb24ueSAtPSBvd25lclBvc2l0aW9uLnk7XG5cbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvICB0aGlzLm93bmVyLnNjYWxlLng7XG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XG5cbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xuXG4gICAgbGV0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XG5cbiAgICB0aGlzLnNldFJhbmdlKGluZGV4ICsgMSwgZmFsc2UgKTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XG5cbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xuXG4gICAgcG9zaXRpb24ueCAtPSBvd25lclBvc2l0aW9uLng7XG4gICAgcG9zaXRpb24ueSAtPSBvd25lclBvc2l0aW9uLnk7XG5cbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcblxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICAsIHBvc2l0aW9uLnkpO1xuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xuXG4gICAgdGhpcy5zZXRSYW5nZShudWxsLCBpbmRleCArIDEpO1xuICB9XG5cbiAgb25Nb3VzZVVwKGV2ZW50KSB7XG5cbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xuXG4gICAgcG9zaXRpb24ueCAtPSBvd25lclBvc2l0aW9uLng7XG4gICAgcG9zaXRpb24ueSAtPSBvd25lclBvc2l0aW9uLnk7XG5cbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcblxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XG5cblxuXG4gICAgLy8gLTEgbWVhbnMgdGhhdCB3ZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxpbmVcbiAgICBpZiAoY2xvc2VzdExldHRlciA9PT0gLTEpIHtcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcblxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcblxuICAgIC8vIElmIHVzZXIgc2VsZWN0ZWQgc29tZSB0ZXh0LCByZW1vdmUgaXRcbiAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcbiAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xuICAgICAgY29uc3QgcmVtb3ZlTGVuZ3RoID0gTWF0aC5hYnMocmFuZ2VbMF0gLSByYW5nZVsxXSk7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcbiAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHJlbW92ZUluZGV4LCByZW1vdmVMZW5ndGgpO1xuICAgICAgdGhpcy5vd25lci5pbnB1dC5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kKGRpcmVjdGlvbikge1xuICAgIHRoaXMucmFuZ2VbMV0gKz0gZGlyZWN0aW9uO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VsZWN0LmpzIiwidmFyIGR0eXBlID0gcmVxdWlyZSgnZHR5cGUnKVxudmFyIGFuQXJyYXkgPSByZXF1aXJlKCdhbi1hcnJheScpXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG52YXIgQ1cgPSBbMCwgMiwgM11cbnZhciBDQ1cgPSBbMiwgMSwgM11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVRdWFkRWxlbWVudHMoYXJyYXksIG9wdCkge1xuICAgIC8vaWYgdXNlciBkaWRuJ3Qgc3BlY2lmeSBhbiBvdXRwdXQgYXJyYXlcbiAgICBpZiAoIWFycmF5IHx8ICEoYW5BcnJheShhcnJheSkgfHwgaXNCdWZmZXIoYXJyYXkpKSkge1xuICAgICAgICBvcHQgPSBhcnJheSB8fCB7fVxuICAgICAgICBhcnJheSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ251bWJlcicpIC8vYmFja3dhcmRzLWNvbXBhdGlibGVcbiAgICAgICAgb3B0ID0geyBjb3VudDogb3B0IH1cbiAgICBlbHNlXG4gICAgICAgIG9wdCA9IG9wdCB8fCB7fVxuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb3B0LnR5cGUgPT09ICdzdHJpbmcnID8gb3B0LnR5cGUgOiAndWludDE2J1xuICAgIHZhciBjb3VudCA9IHR5cGVvZiBvcHQuY291bnQgPT09ICdudW1iZXInID8gb3B0LmNvdW50IDogMVxuICAgIHZhciBzdGFydCA9IChvcHQuc3RhcnQgfHwgMCkgXG5cbiAgICB2YXIgZGlyID0gb3B0LmNsb2Nrd2lzZSAhPT0gZmFsc2UgPyBDVyA6IENDVyxcbiAgICAgICAgYSA9IGRpclswXSwgXG4gICAgICAgIGIgPSBkaXJbMV0sXG4gICAgICAgIGMgPSBkaXJbMl1cblxuICAgIHZhciBudW1JbmRpY2VzID0gY291bnQgKiA2XG5cbiAgICB2YXIgaW5kaWNlcyA9IGFycmF5IHx8IG5ldyAoZHR5cGUodHlwZSkpKG51bUluZGljZXMpXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgdmFyIHggPSBpICsgc3RhcnRcbiAgICAgICAgaW5kaWNlc1t4ICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW3ggKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbeCArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1t4ICsgM10gPSBqICsgYVxuICAgICAgICBpbmRpY2VzW3ggKyA0XSA9IGogKyBiXG4gICAgICAgIGluZGljZXNbeCArIDVdID0gaiArIGNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZHR5cGUpIHtcbiAgc3dpdGNoIChkdHlwZSkge1xuICAgIGNhc2UgJ2ludDgnOlxuICAgICAgcmV0dXJuIEludDhBcnJheVxuICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgIHJldHVybiBJbnQxNkFycmF5XG4gICAgY2FzZSAnaW50MzInOlxuICAgICAgcmV0dXJuIEludDMyQXJyYXlcbiAgICBjYXNlICd1aW50OCc6XG4gICAgICByZXR1cm4gVWludDhBcnJheVxuICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICByZXR1cm4gVWludDE2QXJyYXlcbiAgICBjYXNlICd1aW50MzInOlxuICAgICAgcmV0dXJuIFVpbnQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICByZXR1cm4gRmxvYXQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICByZXR1cm4gRmxvYXQ2NEFycmF5XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIEFycmF5XG4gICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICByZXR1cm4gVWludDhDbGFtcGVkQXJyYXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2R0eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gYW5BcnJheVxuXG5mdW5jdGlvbiBhbkFycmF5KGFycikge1xuICByZXR1cm4gKFxuICAgICAgIGFyci5CWVRFU19QRVJfRUxFTUVOVFxuICAgICYmIHN0ci5jYWxsKGFyci5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nXG4gICAgfHwgQXJyYXkuaXNBcnJheShhcnIpXG4gIClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbi1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbmNsYXNzIElucHV0IHtcblxuICBfZW5hYmxlZCA9IGZhbHNlO1xuICBvd25lciA9IG51bGw7XG5cbiAgX2dseXBoSW5kZXggPSAtMTtcblxuICBzZXQgZ2x5cGhJbmRleCh2YWx1ZSkge1xuXG4gICAgdGhpcy5fZ2x5cGhJbmRleCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSAtMTtcblxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBnbHlwaEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9nbHlwaEluZGV4O1xuICB9XG5cbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF1cblxuICAgIHRoaXMuY3JlYXRlRmllbGQoKTtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmlucHV0RWxlbWVudCkpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfVxuXG4gIGNyZWF0ZUZpZWxkKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbnRhaW4gPSAnc3RyaWN0JztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPSBcImxlZnQgdG9wXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuXG4gICAgdGhpcy5hZGRFdmVudChcImJsdXJcIiwgKGV2ZW50KSA9PiB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHRoaXMub25LZXlkb3duKGV2ZW50KSlcbiAgICB0aGlzLmFkZEV2ZW50KFwicGFzdGVcIiwgKGV2ZW50KSA9PiB0aGlzLnBhc3RlRnJvbUNsaXBib2FyZChldmVudCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cbiAgICBsZXQgZ2x5cGhNZXRyaWNzID0ge1xuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxuICAgICAgeTogdGhpcy5vd25lci5wb3NpdGlvbi55XG4gICAgfTtcblxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICBpZiAodGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aCA9PT0gLTEpIHtcblxuICAgICAgLy8gaWYgd2Ugb24gdGhlIGxhc3QgZ2x5cGgsIHBsYWNlIGNhcmV0IGFmdGVyIGl0XG4gICAgfWVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCA9PT0gZ2x5cGhzLmxlbmd0aCkge1xuXG4gICAgICBjb25zdCBsYXN0R2x5cGggPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBsYXN0R2x5cGgubWV0cmljcy55O1xuXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEdseXBoID0gZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy54ICsgc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLndpZHRoO1xuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gdGhpcy5vd25lci5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xuXG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihnbHlwaE1ldHJpY3MueCAsIGdseXBoTWV0cmljcy55KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgb25JbnB1dChldmVudCkge1xuXG4gICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcblxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gQ29udGVudCB3ZSBhcmUgYWJvdXQgdG8gYWRkXG4gICAgbGV0IHRleHRUb0FkZCA9IGV2ZW50LmRhdGE7XG5cbiAgICBpZiAodGhpcy5vd25lci5jb25maWcudXBwZXJjYXNlKSB7XG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vd25lci5jb25maWcubG93ZXJjYXNlKSB7XG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0ZXh0IGlzIGVtcHR5IG5vd1xuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgPSB0ZXh0VG9BZGQ7XG4gICAgICB0aGlzLmdseXBoSW5kZXggPSAxO1xuXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5vd25lci50ZXh0ICs9IHRleHRUb0FkZDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuXG4gICAgLy8gSWYgd2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgdGV4dFRvQWRkKTtcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcblxuICB9XG5cbiAgb25LZXlkb3duKGV2ZW50KSB7XG5cbiAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG5cbiAgICAgICAgLy8gTW92ZSBieSB3b3JkXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG5cbiAgICAgICAgICB0aGlzLm1vdmVCeVdvcmRMZWZ0KClcblxuICAgICAgICAgIC8vIFNlbGVjdFxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cbiAgICAgICAgICB0aGlzLm1vdmVXaXRoU2VsZWN0TGVmdCgpXG5cbiAgICAgICAgICAvLyBKdXN0IG1vdmUgY3Vyc29yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG5cbiAgICAgICAgLy8gTW92ZSBieSB3b3JkXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICB0aGlzLm1vdmVCeVdvcmRSaWdodCgpO1xuICAgICAgICAvLyBTZWxlY3RcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RSaWdodCgpXG5cbiAgICAgICAgLy8gSnVzdCBtb3ZlIGluZGV4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy5vd25lci50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQ3V0XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcblxuICAgIGNvbnN0IHthIDogc2NhbGVYLCBkOiBzY2FsZVl9ID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcblxuICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiBzY2FsZVk7XG5cbiAgICB5ICo9IHNjYWxlWTtcbiAgICB4ICo9IHNjYWxlWDtcblxuICAgIHkgLT0gbGluZUhlaWdodDtcblxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IG93bmVyVHJhbnNmb3JtID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XG4gIH1cblxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvcHlUb0NsaXBib2FyZChjdXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5zZWxlY3QucmFuZ2U7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmFuZ2UpO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLm93bmVyLnRleHQuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoY3V0KSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0ZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dFwiKTtcblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpXG4gICAgICB0ZXh0ID0gdGV4dC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLmxvd2VyY2FzZSlcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgdHJhc2ggc3ltYm9sc1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG5cbiAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCB0ZXh0KTtcblxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMuZ2x5cGhJbmRleCArIHRleHQubGVuZ3RoO1xuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RSaWdodCgpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMub3duZXIuc2VsZWN0LnJhbmdlO1xuXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XG4gICAgICArK3RoaXMuZ2x5cGhJbmRleDtcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5nbHlwaEluZGV4O1xuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xuICAgIH0gZWxzZSBpZiAocmFuZ2VbMV0gPT09IHJhbmdlWzBdICYmIHRoaXMuZ2x5cGhJbmRleCA9PT0gcmFuZ2VbMF0gLSAxKSB7XG4gICAgICByYW5nZVsxXSA9IG51bGw7XG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vd25lci5zZWxlY3QuZXhwYW5kKDEpO1xuICAgICAgdGhpcy5nbHlwaEluZGV4KytcbiAgICB9XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC51cGRhdGUoKVxuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RMZWZ0KCkge1xuXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBjdXJzb3IsIG5vIHNlbGVjdGlvblxuICAgIGlmIChyYW5nZVsxXSA9PT0gbnVsbCkge1xuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgc2VsZWN0ZWQgb25lIGdseXBoIGFuZCB3ZSByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSkge1xuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xuXG4gICAgICAvLyBSZWd1bGFyIHNlbGVjdGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5leHBhbmQoLTEpO1xuICAgIH1cblxuICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QudXBkYXRlKCk7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcblxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKG51bGwsIGZhbHNlKVxuXG4gICAgY29uc3QgZ2x5cGggPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXgoMCwgdGhpcy5nbHlwaEluZGV4KV07XG5cbiAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmVcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPT09IHRoaXMubGF5b3V0LmhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0dseXBoID0gdGhpcy5vd25lci5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKGdseXBoLnBvc2l0aW9uWzBdLCBnbHlwaC5wb3NpdGlvblsxXSk7XG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xuICB9XG5cbiAgbW92ZVVwKCkge1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UobnVsbCwgZmFsc2UpXG5cbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xuXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXG4gICAgaWYgKGdseXBoLnBvc2l0aW9uWzFdIDw9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3R2x5cGggPSB0aGlzLm93bmVyLnNlbGVjdC5nZXRDbG9zZXN0R2x5cGgoZ2x5cGgucG9zaXRpb25bMF0sIGdseXBoLnBvc2l0aW9uWzFdIC0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiAyKTtcbiAgICB0aGlzLmdseXBoSW5kZXggPSB0aGlzLmxheW91dC5nbHlwaHMuaW5kZXhPZihuZXdHbHlwaCk7XG5cbiAgfVxuXG4gIG1vdmVCeVdvcmRMZWZ0KCkge1xuICAgIGNvbnN0IGdseXBocyA9IHRoaXMubGF5b3V0LmdseXBocztcblxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5nbHlwaEluZGV4IC0gMjsgaSA+PSAwOyBpLS0gKSB7XG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSArIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDAgKSB0aGlzLmdseXBoSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlQnlXb3JkUmlnaHQoKSB7XG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xuXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA8IGdseXBocy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggKyAxOyBpIDw9IGdseXBocy5sZW5ndGggLSAxOyBpKysgKSB7XG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSAtIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IGdseXBocy5sZW5ndGggLSAxKSB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0xO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdGMwKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnZhcnlpbmcgdmVjMiAgdGMwO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChiZ19jb2xvciwwLjQ1KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLDAuMik7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9