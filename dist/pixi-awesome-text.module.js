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
	      antialiasing: true
	    });
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text; // Content
	
	    _this._font = config.font; // Font information
	
	    _this._texture = config.texture; // Texture with glyphs
	
	    _this.config = _extends({}, _this.config, config); // Calculate layout
	
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
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      console.log(closestLetter);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index + 1, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
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
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
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
	      console.log(this.range);
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
	        case "ArrowLeft":
	          // Move by word
	          if (event.ctrlKey) {
	            var glyphs = this.layout.glyphs;
	
	            if (this.glyphIndex > 0) {
	              for (var i = this.glyphIndex - 2; i >= 0; i--) {
	                if (glyphs[i].letter === " " && glyphs[i + 1].letter !== " ") {
	                  this.glyphIndex = i;
	                  return;
	                }
	
	                if (i === 0) this.glyphIndex = -1;
	              }
	            } // Select
	
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
	            var _glyphs = this.layout.glyphs;
	
	            if (this.glyphIndex < _glyphs.length) {
	              for (var _i = this.glyphIndex + 1; _i <= _glyphs.length - 1; _i++) {
	                if (_glyphs[_i].letter === " " && _glyphs[_i - 1].letter !== " ") {
	                  this.glyphIndex = _i;
	                  return;
	                }
	
	                if (_i === _glyphs.length - 1) this.glyphIndex = _glyphs.length - 1;
	              }
	            } // Select
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0OTc4MTU3YmE0NjMzYzQ3Y2IwNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsImNvbmZpZyIsImFudGlhbGlhc2luZyIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwiZGlyZWN0aW9uIiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwicGFzdGVGcm9tQ2xpcGJvYXJkIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwiY2xlYXJTZWxlY3RlZFJhbmdlIiwidGFyZ2V0IiwidGV4dFRvQWRkIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImluc2VydFN0cmluZyIsImtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm1vdmVXaXRoU2VsZWN0TGVmdCIsIm1vdmVXaXRoU2VsZWN0UmlnaHQiLCJjb3B5VG9DbGlwYm9hcmQiLCJzY2FsZVgiLCJhIiwic2NhbGVZIiwiZCIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInR4IiwidHkiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXQiLCJleGVjQ29tbWFuZCIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleHBhbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7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aUJBQWlCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQiwrRkFBK0YsOEVBQThFLDhFQUE4RSw0SUFBNEksNERBQTRELGtEQUFrRCxrQ0FBa0MsK0VBQStFLGtGQUFrRiwySUFBMkksZ0VBQWdFLG9GQUFvRixzR0FBc0csZ1VBQWdVLGdGQUFnRix1SUFBdUksc0NBQXNDLEdBQUcsTzs7Ozs7O0FDQWxzRyxxRUFBb0UsbUNBQW1DLGdDQUFnQyxxQkFBcUIsOEdBQThHLEtBQUssRzs7Ozs7O0FDQS9RLDREQUEyRCxvQkFBb0IsaUJBQWlCLHlDQUF5Qyw2Q0FBNkMsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ5NzgxNTdiYTQ2MzNjNDdjYjA3IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBUZXh0XG59KTtcblxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoUElYSS5leHRyYXMpIHtcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XG4gIH0gZWxzZSB7XG4gICAgUElYSS5leHRyYXMgPSB7IEF3ZXNvbWVUZXh0OiBUZXh0fTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0LFxuICBSZW5kZXJlcixcbiAgTGF5b3V0XG59XG5cbi8qXG5cbml4ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF93aWR0aFxuaXkgICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X2hlaWdodFxucm93X2hlaWdodCAgICA9IChyb3dfaGVpZ2h0ICsgMiAqIHNkZl9zaXplKSAvIHRleF9oZWlnaHQ7XG5hc3BlY3QgICAgICAgID0gdGV4X3dpZHRoIC8gdGV4X2hlaWdodDtcbmFzY2VudCAgICAgICAgPSBmb250LT5hc2NlbnQgKiBzY2FsZVlcbmRlc2NlbnQgICAgICAgPSBmYWJzZihmb250LT5kZXNjZW50ICogc2NhbGVZKVxubGluZV9nYXAgICAgICA9IGZvbnQtPmxpbmVfZ2FwICogc2NhbGUgWVxuY2FwX2hlaWdodCAgICA9IGd4Y2FwLm1heC55ICogc2NhbGVZXG54X2hlaWdodCAgICAgID0gZ3gubWF4LnkgKiBzY2FsZVlcbnNwYWNlX2FkdmFuY2UgPSBnc3BhY2UuYWR2YW5jZV93aWR0aCAqIHNjYWxlWFxuXG5cbnNjYWxleSA9IHJvd19oZWlnaHQgLyB0ZXhfaGVpZ2h0IC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5zY2FsZXggPSByb3dfaGVpZ2h0IC8gdGV4X3dpZHRoIC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5nc3BhY2UgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJyAnICkgXTtcbmd4ICAgICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAneCcgKSBdXG5neGNhcCAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ1gnICkgXVxuXG5cbnNkZl9zaXplID0gMTBcblxuKi9cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvdmVydC5nbHNsXCIpO1xuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBzZWxlY3RWZXJ0ZXh0U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XG5cbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcbiAgc3RhdGljIGNvbnRleHRTZWxlY3QgPSAxO1xuXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XG5cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcblxuICB9XG5cbiAgb25Db250ZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgc2VsZWN0VmVydGV4dFNoYWRlciwgc2VsZWN0RnJhZ21lbnRTaGFkZXIpO1xuICB9XG5cbiAgcmVuZGVyVGV4dChzb3VyY2UpIHtcblxuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF07XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFRleHRHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLmRpcnR5KSB7XG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoc291cmNlLnV2cyk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2UuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudVNhbXBsZXIgPSB0aGlzLnJlbmRlcmVyLmJpbmRUZXh0dXJlKHNvdXJjZS50ZXh0dXJlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmhpbnRfYW1vdW50ID0gc291cmNlLmNvbmZpZy5hbnRpYWxpYXNpbmcgKiAxO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gc291cmNlLmNvbmZpZy5hbnRpYWxpYXNpbmcgKiAxO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuZm9udF9jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2Uuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcblxuICB9XG5cbiAgcmVuZGVyU2VsZWN0KHNvdXJjZSkge1xuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XTtcblxuICAgIGlmICghZ2xEYXRhIHx8IHNvdXJjZS5zZWxlY3QuZGlydHkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdID0gZ2xEYXRhO1xuICAgICAgc291cmNlLnNlbGVjdC5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLnNlbGVjdENvbG9yKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHJlbmRlcihzb3VyY2UpIHtcblxuICAgIGlmIChzb3VyY2Uuc3R5bGVJRCAhPT0gc291cmNlLnN0eWxlLnN0eWxlSUQpIHtcbiAgICAgIHNvdXJjZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUgfHwgc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlclRleHQoc291cmNlKTtcbiAgfVxuXG4gIGJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIGdsKSB7XG5cbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMudGV4dFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgc2RmQnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2RmU2l6ZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXG4gICAgICBpbmRleERpcnR5OiBzb3VyY2UuaW5kZXhEaXJ0eSxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEuc2RmQnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVNkZlNpemUsIGdsLkZMT0FULCBmYWxzZSwgNCwgMCk7XG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxuICBidWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIGdsKSB7XG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICB2YW86IG51bGxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0UmVuZGVyZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnXG5cbmNsYXNzIEF3ZXNvbWVUZXh0IGV4dGVuZHMgUElYSS5tZXNoLk1lc2gge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcbiAgc3RhdGljIGN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcbiAgc3RhdGUgPSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcjtcbiAgY2xpY2tzQ291bnQgPSAwO1xuXG4gIGNvbmZpZyA9IHtcbiAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgdXBwZXJjYXNlOiBmYWxzZSxcbiAgICBsb3dlcmNhc2U6IGZhbHNlLFxuICAgIGFudGlhbGlhc2luZzogdHJ1ZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxuICAgIHRoaXMuX2ZvbnQgPSBjb25maWcuZm9udDsgLy8gRm9udCBpbmZvcm1hdGlvblxuICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xuICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5jb25maWd9O1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxheW91dFxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcblxuICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xuICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dCh0aGlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuc3R5bGUuZm9udFNpemUsIDAuMCk7XG5cbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xuICAgICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xuXG4gICAgLy8gRmlsbCBhcnJheXMgd29yZCBieSB3b3JkXG4gICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgdHlwZTogJ3VpbnQxNicsXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl9nbERhdGFzID0gW107XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhdGVzIH0gPSBBd2Vzb21lVGV4dDtcblxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxuICAgICAgICB0aGlzLnNldFJlZ3VsYXJTdGF0ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcbiAgICAgICAgICB0aGlzLnNldEVkaXRhYmxlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzZXRSZWd1bGFyU3RhdGUoKSB7XG5cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5vZmYoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cG91dHNpZGVcIik7XG5cbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcblxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSB0aGlzO1xuXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcbiAgICB0aGlzLm9mZihcImNsaWNrXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0LmhpZGUoKTtcblxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuaW5wdXQuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VEb3duKGUpO1xuICAgICAgdGhpcy5pbnB1dC5zaG93KCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZShlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlTW92ZShlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cFwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZXVwb3V0c2lkZVwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICB9XG5cbiAgaW5zZXJ0U3RyaW5nKGluZGV4LCBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIGluZGV4KSArIHN0cmluZyArIHRoaXMudGV4dC5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcbiAgICBsZXQgbmV3VGV4dCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKTtcbiAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XG4gICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xuICB9XG5cbiAgZ2V0IHRleHR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gIH1cblxuICBnZXQgZm9udCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFxuICB9XG5cbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSBmb250X21ldHJpY3MubGluZUhlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgLy9wcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgLy9jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVjdCA6IFsgcG9zWzBdLCBwb3NbMV0sIHhfbWF4IC0gcG9zWzBdLCBwb3NbMV0gLSBjcG9zWzFdICsgZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQgXSxcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxuICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcbiAgICB9XG5cbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuc3R5bGUuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXApO1xuXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dTY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZm9udC5kZXNjZW50ICsgZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgY29uc3QgdXZzID0gW1xuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXG4gICAgXTtcblxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICB1dnMsXG4gICAgICBzZGZTaXplcyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXG4gICAgfTtcblxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LmpzIiwiXG5jbGFzcyBUZXh0TGF5b3V0IHtcblxuICB0ZXh0ID0gXCJcIjtcbiAgZm9udCA9IG51bGw7XG4gIG1ldHJpY3MgPSBudWxsO1xuICBmb250U2l6ZSA9IDIwO1xuICBhbGlnbiA9IFwibGVmdFwiO1xuICBzdGFydFggPSAwO1xuICBzdGFydFkgPSAwO1xuICB3cmFwcGVyV2lkdGggPSAxMDA7XG4gIHdyYXBXb3JkcyA9IGZhbHNlO1xuICB3b3Jkc01ldHJpY3MgPSBbXTtcbiAgbGV0dGVyc0NvdW50ID0gMDtcbiAgaGVpZ2h0ID0gMDtcbiAgbGluZXNDb3VudCA9IDA7XG4gIGxpbmVIZWlnaHQgPSAwO1xuICBnbHlwaHMgPSBbXTtcbiAgb3duZXIgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xuXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XG4gICAgdGhpcy5mb250ID0gb3duZXIuZm9udDtcbiAgICB0aGlzLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplO1xuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IHRoaXMub3duZXIuZm9udDtcblxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuZm9udCwgMC4wKTtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcblxuICAgIHRoaXMuZ2x5cGhzID0gW107XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMuZ2V0R2x5cGhzKHdvcmQud29yZCwgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XG5cbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIHRoaXMubWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IHRoaXMubWV0cmljcy5sb3dTY2FsZSA6IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggdGhpcy5mb250LmRlc2NlbnQgKyB0aGlzLmZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSB0aGlzLmZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdLFxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RyaW5nU2l6ZShzdHJpbmcpIHtcblxuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcblxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCB0aGUgY2hhcnMsIGNhbGN1bGF0ZSBwb3NpdGlvblxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBsZXQgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBjaGFyIF07XG5cbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9Ki9cblxuICAgICAgLy8gR2V0IGNoYXIgbWV0cmljc1xuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xuXG4gIH1cblxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcblxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgfVxuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MgPSBbXTtcblxuICAgIC8vIEluaXRpYWwgcG9zaXRpb25cbiAgICBsZXQgeCA9IHRoaXMuc3RhcnRYO1xuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy53b3Jkc01ldHJpY3MucHVzaCh7Li4ud29yZFNpemUsIHgsIHksIHdvcmR9KTtcblxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICB4ICs9IHdvcmRTaXplLndpZHRoO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIC8vIENoYW5nZSBhbGlnbiBUT0RPIG9wdGltaXNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xuICAgICAgY29uc3Qgd29yZHNPbkxpbmUgPSB0aGlzLndvcmRzTWV0cmljcy5maWx0ZXIod29yZCA9PiB3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpXG5cbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0V29yZCkge1xuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcblxuICAgICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XG4gICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcbiAgICAgICAgICAgIHdvcmQueCArPSBsZWZ0T2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSB0aGlzLmZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuXG4gICAgICB0aGlzLmdseXBocy5wdXNoKHtcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcbiAgICAgICAgdmVydGljZXM6IHJlY3QucG9zaXRpb25zLFxuICAgICAgICBwb3NpdGlvbjogcmVjdC5wb3MsXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5cclxuY2xhc3MgU2VsZWN0IHtcclxuXHJcbiAgcmFuZ2UgPSBbMCwwXTtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBsYXlvdXQgPSBudWxsO1xyXG4gIGRpcnR5ID0gZmFsc2U7XHJcbiAgaW5kZXhCdWZmZXIgPSBmYWxzZTtcclxuICBvd25lciA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XHJcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIC8vIFZlcnRpY2VzIGFycmF5IGZvciBhbGwgc2VsZWN0ZWQgbGluZXNcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxpbmVzQ291bnQgKiA0ICogMik7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2VbMV0gIT09IG51bGwpXHJcbiAgICB0aGlzLmJ1aWxkVmVydGljZXMoKTtcclxuXHJcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcclxuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAndWludDE2JyxcclxuICAgICAgY291bnQ6dGhpcy5sYXlvdXQubGluZXNDb3VudFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICB0aGlzLmluZGV4QnVmZmVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFJhbmdlKHN0YXJ0ID0gbnVsbCwgZW5kID0gbnVsbCkge1xyXG5cclxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRoaXMucmFuZ2VbMF07XHJcbiAgICBpZiAoZW5kID09PSBudWxsKSBlbmQgPSB0aGlzLnJhbmdlWzFdO1xyXG5cclxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcclxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwO1xyXG5cclxuICAgIGlmIChzdGFydCA+IGdseXBocy5sZW5ndGggLTEpc3RhcnQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcclxuICAgIGlmIChlbmQgPiBnbHlwaHMubGVuZ3RoIC0gMSkgZW5kID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgaWYgKGVuZCA9PT0gZmFsc2UpIGVuZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5yYW5nZSA9IFtzdGFydCwgZW5kXTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFZlcnRpY2VzKCkge1xyXG5cclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubGF5b3V0Lm1ldHJpY3M7XHJcbiAgICAvLyBTZWxlY3QgcmFuZ2VcclxuICAgIGxldCBzdGFydCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1pbi5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuICAgIGxldCBlbmQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXguYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcblxyXG5cclxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCBhbGwgbGluZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXlvdXQubGluZXNDb3VudDsgKytpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7IC8vIGxldHRlcnMgcGFzc2VkXHJcbiAgICAgIGxldCBmaXJzdExldHRlciA9IG51bGw7IC8vIGZpcnN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuICAgICAgbGV0IGxhc3RMZXR0ZXIgPSBudWxsOyAvLyBsYXN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuXHJcblxyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPCBzdGFydC5wb3NpdGlvblsxXSkgY29udGludWU7XHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA+IGVuZC5wb3NpdGlvblsxXSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBUYWtlIGV2ZXJ5IHdvcmQsIGlmIGl0J3MgbGFzdCBvciBmaXJzdCBvbiBsaW5lIC0gY2hhbmdlIGJvdW5kcyBsZXR0ZXJzXHJcbiAgICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5tYXAod29yZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMubGF5b3V0LnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgICAgICBpZiAoZmlyc3RMZXR0ZXIgPT09IG51bGwpIGZpcnN0TGV0dGVyID0gbGV0dGVyQ291bnQ7XHJcbiAgICAgICAgICBsYXN0TGV0dGVyID0gbGV0dGVyQ291bnQgKyB3b3JkLndvcmQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldHRlckNvdW50ICs9IHdvcmQud29yZC5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAvLyBCb3VuZHMgbGV0dGVycyBmb3IgY3VycmVudCBsaW5lXHJcbiAgICAgIGxldCBzdGFydExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbZmlyc3RMZXR0ZXJdO1xyXG4gICAgICBsZXQgZW5kTGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tsYXN0TGV0dGVyXTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBzdGFydCBvciBlbmQgcmFuZ2UgaXMgb24gdGhpcyBsaW5lLCBjaGFuZ2UgYm91bmRzIGZvciB0aGVtXHJcbiAgICAgIGlmIChzdGFydC5wb3NpdGlvblsxXSA9PT0gIHN0YXJ0TGluZUxldHRlci5wb3NpdGlvblsxXSkgc3RhcnRMaW5lTGV0dGVyID0gc3RhcnQ7XHJcbiAgICAgIGlmIChlbmQucG9zaXRpb25bMV0gPT09IGVuZExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIGVuZExpbmVMZXR0ZXIgPSBlbmQ7XHJcblxyXG4gICAgICAvLyBXZSB1c2Ugb2Zmc2V0IHRvIGF2b2lkIHNlbGVjdHMgb3ZlcmxhcHBpbmdcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IC0gdGhpcy5tZXRyaWNzLmFzY2VudCkgLyAyO1xyXG5cclxuICAgICAgLy8gQWRkIHBvc2l0aW9ucyB0byBhcnJheVxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCldID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzBdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAxXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1sxXSArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDJdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1syXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgM10gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzNdICAgKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA0XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDVdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s1XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA2XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s2XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgN10gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbN10gIC0gb2Zmc2V0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0R2x5cGgoeCwgeSkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBjb25zdCB7IGdseXBocyB9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZSA9IE1hdGguZmxvb3IoeSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KTtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmVZID0gc2VsZWN0aW5nTGluZSAqIGxpbmVIZWlnaHQ7XHJcbiAgICBsZXQgbGFzdEdseXBoT25MaW5lID0gZ2x5cGhzW2dseXBocy5sZW5ndGggLSAxXTtcclxuICAgIGxldCBmaXJzdEdseXBoT25MaW5lID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdseXBocy5sZW5ndGggOyArK2kpIHtcclxuXHJcbiAgICAgIGxldCBnbHlwaCA9IGdseXBoc1tpXTtcclxuXHJcbiAgICAgIGlmIChnbHlwaC5tZXRyaWNzLnkgPT09IHNlbGVjdGluZ0xpbmVZICsgbGluZUhlaWdodCkge1xyXG4gICAgICAgIGxhc3RHbHlwaE9uTGluZSA9IGdseXBoO1xyXG4gICAgICAgIGlmICh4IDwgZ2x5cGgubWV0cmljcy54ICsgZ2x5cGgubWV0cmljcy53aWR0aCAvIDIpIHtcclxuICAgICAgICAgIGlmIChpID09PSAwKSByZXR1cm4gLTE7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGdseXBoc1tpIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhc3RHbHlwaE9uTGluZTtcclxuXHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRG93bihldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyAgdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICB0aGlzLnNldFJhbmdlKGluZGV4ICsgMSwgZmFsc2UgKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICAsIHBvc2l0aW9uLnkpO1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRSYW5nZShudWxsLCBpbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVVwKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucmFuZ2UpO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuY2xhc3MgSW5wdXQge1xuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIG93bmVyID0gbnVsbDtcblxuICBfZ2x5cGhJbmRleCA9IC0xO1xuXG4gIHNldCBnbHlwaEluZGV4KHZhbHVlKSB7XG5cbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA8IC0xKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPiB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGdseXBoSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XG4gIH1cblxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXVxuXG4gICAgdGhpcy5jcmVhdGVGaWVsZCgpO1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuaW5wdXRFbGVtZW50KSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9XG5cbiAgY3JlYXRlRmllbGQoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgLy90aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjMpJztcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdzdHJpY3QnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnpJbmRleCA9IDI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMub3duZXIuc3R5bGUuZmlsbDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG5cbiAgICB0aGlzLmFkZEV2ZW50KFwiYmx1clwiLCAoZXZlbnQpID0+IHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCkpO1xuICAgIHRoaXMuYWRkRXZlbnQoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dChldmVudCkpO1xuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxuICAgIHRoaXMuYWRkRXZlbnQoXCJwYXN0ZVwiLCAoZXZlbnQpID0+IHRoaXMucGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xuXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPj0gZ2x5cGhzLmxlbmd0aCkge1xuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7XG4gICAgICB4OiB0aGlzLm93bmVyLnBvc2l0aW9uLngsXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAtMSkge1xuXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcbiAgICB9ZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSBnbHlwaHMubGVuZ3RoKSB7XG5cbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnggKyBsYXN0R2x5cGgubWV0cmljcy53aWR0aDtcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XG5cbiAgICAgIC8vIGlmIGNhcmV0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHRleHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSB0aGlzLm93bmVyLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKGdseXBoTWV0cmljcy54ICwgZ2x5cGhNZXRyaWNzLnkpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbklucHV0KGV2ZW50KSB7XG5cbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xuXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcblxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBDb250ZW50IHdlIGFyZSBhYm91dCB0byBhZGRcbiAgICBsZXQgdGV4dFRvQWRkID0gZXZlbnQuZGF0YTtcblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpIHtcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy5sb3dlcmNhc2UpIHtcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHRleHQgaXMgZW1wdHkgbm93XG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IHRleHRUb0FkZDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XG5cbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gdGV4dFRvQWRkO1xuICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XG5cbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKCsrdGhpcy5nbHlwaEluZGV4LCB0ZXh0VG9BZGQpO1xuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuXG4gIH1cblxuICBvbktleWRvd24oZXZlbnQpIHtcblxuICAgIGNvbnN0IHtyYW5nZX0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcblxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcblxuICAgICAgICAgIGNvbnN0IGdseXBocyA9IHRoaXMubGF5b3V0LmdseXBocztcblxuICAgICAgICAgIGlmICh0aGlzLmdseXBoSW5kZXggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5nbHlwaEluZGV4IC0gMjsgaSA+PSAwOyBpLS0gKSB7XG4gICAgICAgICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSArIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGkgPT09IDAgKSB0aGlzLmdseXBoSW5kZXggPSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZWxlY3RcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuXG4gICAgICAgICAgdGhpcy5tb3ZlV2l0aFNlbGVjdExlZnQoKVxuXG4gICAgICAgICAgLy8gSnVzdCBtb3ZlIGN1cnNvclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuXG4gICAgICAgIC8vIE1vdmUgYnkgd29yZFxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuXG4gICAgICAgICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA8IGdseXBocy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggKyAxOyBpIDw9IGdseXBocy5sZW5ndGggLSAxOyBpKysgKSB7XG4gICAgICAgICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSAtIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGkgPT09IGdseXBocy5sZW5ndGggLSAxKSB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBTZWxlY3RcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RSaWdodCgpXG5cbiAgICAgICAgLy8gSnVzdCBtb3ZlIGluZGV4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy5vd25lci50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQ3V0XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcblxuICAgIGNvbnN0IHthIDogc2NhbGVYLCBkOiBzY2FsZVl9ID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcblxuICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiBzY2FsZVk7XG5cbiAgICB5ICo9IHNjYWxlWTtcbiAgICB4ICo9IHNjYWxlWDtcblxuICAgIHkgLT0gbGluZUhlaWdodDtcblxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IG93bmVyVHJhbnNmb3JtID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XG4gIH1cblxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvcHlUb0NsaXBib2FyZChjdXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5zZWxlY3QucmFuZ2U7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmFuZ2UpO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLm93bmVyLnRleHQuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoY3V0KSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0ZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dFwiKTtcblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpXG4gICAgICB0ZXh0ID0gdGV4dC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLmxvd2VyY2FzZSlcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgdHJhc2ggc3ltYm9sc1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG5cbiAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCB0ZXh0KTtcblxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMuZ2x5cGhJbmRleCArIHRleHQubGVuZ3RoO1xuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RSaWdodCgpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMub3duZXIuc2VsZWN0LnJhbmdlO1xuXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XG4gICAgICArK3RoaXMuZ2x5cGhJbmRleDtcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5nbHlwaEluZGV4O1xuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xuICAgIH0gZWxzZSBpZiAocmFuZ2VbMV0gPT09IHJhbmdlWzBdICYmIHRoaXMuZ2x5cGhJbmRleCA9PT0gcmFuZ2VbMF0gLSAxKSB7XG4gICAgICByYW5nZVsxXSA9IG51bGw7XG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vd25lci5zZWxlY3QuZXhwYW5kKDEpO1xuICAgICAgdGhpcy5nbHlwaEluZGV4KytcbiAgICB9XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC51cGRhdGUoKVxuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RMZWZ0KCkge1xuXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBjdXJzb3IsIG5vIHNlbGVjdGlvblxuICAgIGlmIChyYW5nZVsxXSA9PT0gbnVsbCkge1xuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgc2VsZWN0ZWQgb25lIGdseXBoIGFuZCB3ZSByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSkge1xuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xuXG4gICAgICAvLyBSZWd1bGFyIHNlbGVjdGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5leHBhbmQoLTEpO1xuICAgIH1cblxuICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QudXBkYXRlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=