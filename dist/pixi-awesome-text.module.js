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
	      glData.shader.uniforms.hint_amount = 1.0;
	      glData.shader.uniforms.sdfMultiplier = _text["default"].scale;
	      glData.shader.uniforms.subpixel_amount = 1.0;
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
	
	  function AwesomeText(text, style, font) {
	    var _this;
	
	    _classCallCheck(this, AwesomeText);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeText).call(this, font.texture));
	
	    _defineProperty(_assertThisInitialized(_this), "pluginName", 'AwesomeTextRenderer');
	
	    _defineProperty(_assertThisInitialized(_this), "state", AwesomeText.states.regular);
	
	    _defineProperty(_assertThisInitialized(_this), "clicksCount", 0);
	
	    _defineProperty(_assertThisInitialized(_this), "inputElement", null);
	
	    _defineProperty(_assertThisInitialized(_this), "input", null);
	
	    _defineProperty(_assertThisInitialized(_this), "select", null);
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text;
	    _this._font = font.font;
	    _this._texture = font.texture;
	    _this.interactive = true;
	    _this.buttonMode = true; // Calcualte layout
	
	    _this.layout = new _layout["default"](_assertThisInitialized(_this), {
	      fontSize: _this.style.fontSize,
	      wrapWords: _this.style.breakWords,
	      wrapperWidth: _this.style.wordWrapWidth,
	      align: _this.style.align,
	      lineHeight: _this.style.lineHeight
	    }); //  Select plugin
	
	    _this.select = new _select["default"](_assertThisInitialized(_this)); // Input plugin
	
	    _this.input = new _input["default"](_assertThisInitialized(_this));
	
	    _this.setState(AwesomeText.states.regular);
	
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.metrics = this.fontMetrics(this.style.fontSize);
	      this.layout.update();
	      this.select.update();
	      this.input.update(); // Arrays for vertices, uvs and sdf
	
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
	      this.input.enabled = true; // Select all characters
	
	      this.select.setRange(0, this.text.length - 1);
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
	      });
	      this.on("mouseupoutside", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	      });
	    }
	  }, {
	    key: "insertString",
	    value: function insertString(index, string) {
	      this.text = this.text.substr(0, index) + string + this.text.substr(index);
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
	    this.update();
	  }
	
	  _createClass(Select, [{
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout; // vertices array for all selected lines
	
	      this.vertices = new Float32Array(this.layout.linesCount * 4 * 2); // If range is greater than 0
	
	      if (this.range[0] !== this.range[1]) {
	        this.buildVertices();
	      }
	
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
	      if (start === null) start = this.range[0];
	      if (end === null) end = this.range[1];
	      this.range = [start, end];
	      this.update();
	    }
	  }, {
	    key: "buildVertices",
	    value: function buildVertices() {
	      var _this = this;
	
	      // Select range
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
	      // Get selecting line
	      // Get words on this line
	      // Get letters on this line
	      // Get letter which x is more than cursor x
	      var glyphs = this.owner.layout.glyphs;
	      var lineHeight = this.metrics.lineHeight;
	      var selectingLine = Math.floor(y / this.metrics.lineHeight);
	      var selectingLineY = selectingLine * lineHeight;
	      var lastGlyphOnLine = glyphs[glyphs.length - 1];
	
	      for (var i = 1; i < glyphs.length; ++i) {
	        var glyph = glyphs[i];
	
	        if (glyph.metrics.y === selectingLineY + lineHeight) {
	          lastGlyphOnLine = glyph;
	
	          if (glyph.metrics.x + glyph.metrics.width > x) {
	            return glyphs[i - 1];
	          }
	        }
	      }
	
	      return lastGlyphOnLine;
	    }
	  }, {
	    key: "onMouseDown",
	    value: function onMouseDown(event) {
	      var position = event.data.global;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x + 12, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index, index);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = text.select.getClosestGlyph(position.x + 12, position.y);
	      var index = text.layout.glyphs.indexOf(closestLetter);
	      this.setRange(null, index);
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
	
	    _defineProperty(this, "glyphIndex", null);
	
	    this.owner = owner;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	    this.createField();
	    this.disable();
	  }
	
	  _createClass(Input, [{
	    key: "enable",
	    value: function enable() {
	      this.inputElement.style.display = 'block';
	    }
	  }, {
	    key: "disable",
	    value: function disable() {
	      this.inputElement.style.display = 'none';
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
	      document.body.append(this.inputElement);
	      this.inputElement.style.backgroundColor = 'transparent';
	      this.inputElement.style.border = "none";
	      this.inputElement.style.position = 'fixed';
	      this.inputElement.style.contain = 'srtict';
	      this.inputElement.style.zIndex = 2;
	      this.inputElement.style.pointerEvents = "none";
	      this.inputElement.style.outline = "none";
	      this.inputElement.style.color = this.owner.style.fill;
	      this.inputElement.style.marginLeft = "10px";
	      this.inputElement.addEventListener("blur", function () {
	        if (_this._enabled) {
	          _this.inputElement.focus();
	        }
	      });
	      this.inputElement.addEventListener("input", function (event) {
	        if (_this._enabled) {
	          _this.onInput(event);
	        }
	      });
	    }
	  }, {
	    key: "update",
	    value: function update(event) {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout;
	      var selectedGlyph = this.layout.glyphs[this.owner.select.range[1]];
	      var position = {
	        x: 0,
	        y: this.metrics.lineHeight
	      };
	
	      if (selectedGlyph) {
	        position = _extends({}, selectedGlyph.metrics);
	      }
	
	      position.x *= this.owner.scale.x;
	      position.y *= this.owner.scale.y;
	      this.setPosition(position.x, position.y);
	      this.setScale(this.owner.scale.x, this.owner.scale.y);
	      this.inputElement.focus();
	    }
	  }, {
	    key: "onInput",
	    value: function onInput(event) {
	      var range = this.owner.select.range;
	
	      if (range[0] !== range[1]) {
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        var newText = this.owner.text.split("");
	        newText.splice(removeIndex, removeLength + 1);
	        this.owner.select.setRange(removeIndex, removeIndex);
	        this.owner.text = newText.join("");
	        this.show();
	      }
	
	      event.target.value = "";
	      this.owner.insertString(this.owner.select.range[0], event.data);
	      console.log("set range");
	      this.owner.select.setRange(this.owner.select.range[0] + 1, this.owner.select.range[1] + 1);
	      var selectedGlyph = this.layout.glyphs[this.owner.select.range[0]];
	      var position = {
	        x: 0,
	        y: this.metrics.lineHeight
	      };
	
	      if (selectedGlyph) {
	        position = _extends({}, selectedGlyph.metrics);
	      }
	
	      position.x *= this.owner.scale.x;
	      position.y *= this.owner.scale.y;
	      this.setPosition(position.x, position.y);
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(x, y) {
	      var top = y - this.metrics.lineHeight;
	      var offset = this.metrics.lineHeight - this.metrics.ascent;
	      top += offset;
	      this.inputElement.style.left = "".concat(x, "px");
	      this.inputElement.style.top = "".concat(top, "px");
	    }
	  }, {
	    key: "setScale",
	    value: function setScale(x, y) {
	      var offset = this.metrics.lineHeight - this.metrics.ascent;
	      var top = y - this.metrics.lineHeight;
	      var lineHeight = this.metrics.lineHeight; //top += offset;
	
	      this.inputElement.style.height = lineHeight + "px";
	      this.inputElement.style.transform = "scale(".concat(x, ")");
	      this.inputElement.style.fontSize = this.metrics.lineHeight * y + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNzlkOTQ1ZmExYmI5OWRkODk3NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0UmFuZ2UiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsImhpZGUiLCJpbmRleCIsInN0cmluZyIsInN1YnN0ciIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInNwbGl0Iiwic3RhcnRZIiwiY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMiLCJnbHlwaHMiLCJnZXRHbHlwaHMiLCJ3aWR0aCIsImhlaWdodCIsImNoYXIiLCJ3b3JkcyIsImkiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsIndvcmRzT25MaW5lIiwiZmlsdGVyIiwibGFzdFdvcmQiLCJmcmVlU3BhY2UiLCJsZWZ0T2Zmc2V0IiwibGV0dGVyIiwicG9zaXRpb24iLCJyYW5nZSIsImJ1aWxkVmVydGljZXMiLCJzdGFydCIsImVuZCIsIm1pbiIsImFwcGx5IiwibWF4IiwibGV0dGVyQ291bnQiLCJmaXJzdExldHRlciIsImxhc3RMZXR0ZXIiLCJzdGFydExpbmVMZXR0ZXIiLCJlbmRMaW5lTGV0dGVyIiwib2Zmc2V0Iiwic2VsZWN0aW5nTGluZSIsImZsb29yIiwic2VsZWN0aW5nTGluZVkiLCJsYXN0R2x5cGhPbkxpbmUiLCJnbHlwaCIsImV2ZW50IiwiZGF0YSIsImdsb2JhbCIsImNsb3Nlc3RMZXR0ZXIiLCJnZXRDbG9zZXN0R2x5cGgiLCJpbmRleE9mIiwiX2VuYWJsZWQiLCJlbmFibGUiLCJkaXNhYmxlIiwiY3JlYXRlRmllbGQiLCJpbnB1dEVsZW1lbnQiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9jdXMiLCJvbklucHV0Iiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwic2V0U2NhbGUiLCJyZW1vdmVJbmRleCIsInJlbW92ZUxlbmd0aCIsImFicyIsIm5ld1RleHQiLCJzcGxpY2UiLCJqb2luIiwidGFyZ2V0IiwiaW5zZXJ0U3RyaW5nIiwiY29uc29sZSIsImxvZyIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOztBQUNBOzs7O0FBRUFBLE9BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFJLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCQyxjQUFXLEVBQUVDO0FBRFksRUFBM0I7O0FBSUEsS0FBSSxPQUFPSCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLE9BQUlBLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNmRCxTQUFJLENBQUNDLE1BQUwsQ0FBWUMsV0FBWixHQUEwQkMsZ0JBQTFCO0FBQ0QsSUFGRCxNQUVPO0FBQ0xILFNBQUksQ0FBQ0MsTUFBTCxHQUFjO0FBQUVDLGtCQUFXLEVBQUVDO0FBQWYsTUFBZDtBQUNEO0FBQ0Y7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQyxZQUFZLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQTVCOztBQUNBLEtBQU1DLGNBQWMsR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBOUI7O0FBRUEsS0FBTUMsbUJBQW1CLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENB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LENBQTdDO0FBQ0EsWUFBSzJILFlBQUwsQ0FBa0JuTSxLQUFsQixDQUF3QmtELFFBQXhCLEdBQW9DLEtBQUtXLE9BQUwsQ0FBYUwsVUFBYixHQUEwQmlCLENBQTNCLEdBQWdDLElBQW5FO0FBQ0Q7Ozs7OztnQkFJWWQsSzs7Ozs7OztBQy9KZixxRUFBb0UsK0JBQStCLDJCQUEyQixtQ0FBbUMsZ0NBQWdDLDhCQUE4QixzQkFBc0Isd0JBQXdCLDBCQUEwQix5QkFBeUIsNkVBQTZFLDhEQUE4RCw4QkFBOEIsK0JBQStCLHdGQUF3Riw4R0FBOEcsS0FBSyxHOzs7Ozs7QUNBbnRCLGlFQUFnRSw0QkFBNEIsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsdzhCQUF3OEIsOEJBQThCLDRFQUE0RSxnQ0FBZ0MsaUNBQWlDLDRDQUE0QyxrRUFBa0UsaUJBQWlCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQiwrRkFBK0YsOEVBQThFLDhFQUE4RSw0SUFBNEksNERBQTRELGtEQUFrRCxrQ0FBa0MsK0VBQStFLGtGQUFrRiwySUFBMkksZ0VBQWdFLG9GQUFvRixzR0FBc0csZ1VBQWdVLGdGQUFnRix1SUFBdUksc0NBQXNDLEdBQUcsTzs7Ozs7O0FDQWxzRyxxRUFBb0UsbUNBQW1DLGdDQUFnQyxxQkFBcUIsOEdBQThHLEtBQUssRzs7Ozs7O0FDQS9RLDREQUEyRCxvQkFBb0IsaUJBQWlCLHlDQUF5Qyw2Q0FBNkMsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDE3OWQ5NDVmYTFiYjk5ZGQ4OTc3IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBUZXh0XG59KTtcblxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoUElYSS5leHRyYXMpIHtcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XG4gIH0gZWxzZSB7XG4gICAgUElYSS5leHRyYXMgPSB7IEF3ZXNvbWVUZXh0OiBUZXh0fTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0LFxuICBSZW5kZXJlcixcbiAgTGF5b3V0XG59XG5cbi8qXG5cbml4ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF93aWR0aFxuaXkgICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X2hlaWdodFxucm93X2hlaWdodCAgICA9IChyb3dfaGVpZ2h0ICsgMiAqIHNkZl9zaXplKSAvIHRleF9oZWlnaHQ7XG5hc3BlY3QgICAgICAgID0gdGV4X3dpZHRoIC8gdGV4X2hlaWdodDtcbmFzY2VudCAgICAgICAgPSBmb250LT5hc2NlbnQgKiBzY2FsZVlcbmRlc2NlbnQgICAgICAgPSBmYWJzZihmb250LT5kZXNjZW50ICogc2NhbGVZKVxubGluZV9nYXAgICAgICA9IGZvbnQtPmxpbmVfZ2FwICogc2NhbGUgWVxuY2FwX2hlaWdodCAgICA9IGd4Y2FwLm1heC55ICogc2NhbGVZXG54X2hlaWdodCAgICAgID0gZ3gubWF4LnkgKiBzY2FsZVlcbnNwYWNlX2FkdmFuY2UgPSBnc3BhY2UuYWR2YW5jZV93aWR0aCAqIHNjYWxlWFxuXG5cbnNjYWxleSA9IHJvd19oZWlnaHQgLyB0ZXhfaGVpZ2h0IC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5zY2FsZXggPSByb3dfaGVpZ2h0IC8gdGV4X3dpZHRoIC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5nc3BhY2UgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJyAnICkgXTtcbmd4ICAgICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAneCcgKSBdXG5neGNhcCAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ1gnICkgXVxuXG5cbnNkZl9zaXplID0gMTBcblxuKi9cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvdmVydC5nbHNsXCIpO1xuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBzZWxlY3RWZXJ0ZXh0U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XG5cbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcbiAgc3RhdGljIGNvbnRleHRTZWxlY3QgPSAxO1xuXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XG5cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcblxuICB9XG5cbiAgb25Db250ZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgc2VsZWN0VmVydGV4dFNoYWRlciwgc2VsZWN0RnJhZ21lbnRTaGFkZXIpO1xuICB9XG5cbiAgcmVuZGVyVGV4dChzb3VyY2UpIHtcblxuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF07XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFRleHRHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLmRpcnR5KSB7XG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoc291cmNlLnV2cyk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2UuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudVNhbXBsZXIgPSB0aGlzLnJlbmRlcmVyLmJpbmRUZXh0dXJlKHNvdXJjZS50ZXh0dXJlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmhpbnRfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuZm9udF9jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2Uuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcblxuICB9XG5cbiAgcmVuZGVyU2VsZWN0KHNvdXJjZSkge1xuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XTtcblxuICAgIGlmICghZ2xEYXRhIHx8IHNvdXJjZS5zZWxlY3QuZGlydHkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdID0gZ2xEYXRhO1xuICAgICAgc291cmNlLnNlbGVjdC5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLnNlbGVjdENvbG9yKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHJlbmRlcihzb3VyY2UpIHtcblxuICAgIGlmIChzb3VyY2Uuc3R5bGVJRCAhPT0gc291cmNlLnN0eWxlLnN0eWxlSUQpIHtcbiAgICAgIHNvdXJjZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUgfHwgc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlclRleHQoc291cmNlKTtcbiAgfVxuXG4gIGJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIGdsKSB7XG5cbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMudGV4dFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgc2RmQnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2RmU2l6ZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXG4gICAgICBpbmRleERpcnR5OiBzb3VyY2UuaW5kZXhEaXJ0eSxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEuc2RmQnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVNkZlNpemUsIGdsLkZMT0FULCBmYWxzZSwgNCwgMCk7XG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxuICBidWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIGdsKSB7XG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICB2YW86IG51bGxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0UmVuZGVyZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnXG5cbmNsYXNzIEF3ZXNvbWVUZXh0IGV4dGVuZHMgUElYSS5tZXNoLk1lc2gge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcblxuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwbHVnaW5OYW1lID0gJ0F3ZXNvbWVUZXh0UmVuZGVyZXInO1xuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xuICBjbGlja3NDb3VudCA9IDA7XG4gIGlucHV0RWxlbWVudCA9IG51bGw7XG4gIGlucHV0ID0gbnVsbDtcbiAgc2VsZWN0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgZm9udCkge1xuICAgIHN1cGVyKGZvbnQudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9mb250ID0gZm9udC5mb250O1xuICAgIHRoaXMuX3RleHR1cmUgPSBmb250LnRleHR1cmU7XG5cbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xuXG4gICAgLy8gQ2FsY3VhbHRlIGxheW91dFxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICAvLyAgU2VsZWN0IHBsdWdpblxuICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcblxuICAgIC8vIElucHV0IHBsdWdpblxuICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuc3R5bGUuZm9udFNpemUpO1xuXG5cbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcbiAgICB0aGlzLnNlbGVjdC51cGRhdGUoKTtcbiAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xuXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcbiAgICB0aGlzLmFycmF5UG9zaXRpb25zID0geyB2ZXJ0ZXg6IDAsIHV2czogMCwgc2RmOiAwIH07XG5cbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcbiAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLndyaXRlU3RyaW5nKHdvcmQud29yZCwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBpbmRpY2VzXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XG4gICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICB0eXBlOiAndWludDE2JyxcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmluZGV4RGlydHkgPSB0cnVlO1xuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG5cbiAgICBjb25zdCB7IHN0YXRlcyB9ID0gQXdlc29tZVRleHQ7XG5cbiAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xuICAgICAgY2FzZSBzdGF0ZXMucmVndWxhcjpcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN0YXRlcy5lZGl0YWJsZTpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gZmFsc2U7XG5cblxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcblxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSB0aGlzO1xuXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcbiAgICB0aGlzLm9mZihcImNsaWNrXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcblxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcbiAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZU1vdmUoZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBpbmRleCkgKyBzdHJpbmcgKyB0aGlzLnRleHQuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG4gIG93bmVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcblxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IG93bmVyLmZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLm93bmVyLmZvbnQ7XG5cbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLmZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdseXBocyA9IFtdO1xuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSB0aGlzLm1ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyB0aGlzLm1ldHJpY3MubG93U2NhbGUgOiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gdGhpcy5mb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSovXG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgLy8gdmVydGljZXMgYXJyYXkgZm9yIGFsbCBzZWxlY3RlZCBsaW5lc1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGluZXNDb3VudCAqIDQgKiAyKTtcclxuXHJcbiAgICAvLyBJZiByYW5nZSBpcyBncmVhdGVyIHRoYW4gMFxyXG4gICAgaWYgKHRoaXMucmFuZ2VbMF0gIT09IHRoaXMucmFuZ2VbMV0pIHtcclxuICAgICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICAvLyBTZWxlY3QgcmFuZ2VcclxuICAgIGxldCBzdGFydCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1pbi5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuICAgIGxldCBlbmQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXguYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcblxyXG5cclxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCBhbGwgbGluZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXlvdXQubGluZXNDb3VudDsgKytpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7IC8vIGxldHRlcnMgcGFzc2VkXHJcbiAgICAgIGxldCBmaXJzdExldHRlciA9IG51bGw7IC8vIGZpcnN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuICAgICAgbGV0IGxhc3RMZXR0ZXIgPSBudWxsOyAvLyBsYXN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuXHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA8IHN0YXJ0LnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ID4gZW5kLnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFRha2UgZXZlcnkgd29yZCwgaWYgaXQncyBsYXN0IG9yIGZpcnN0IG9uIGxpbmUgLSBjaGFuZ2UgYm91bmRzIGxldHRlcnNcclxuICAgICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLm1hcCh3b3JkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5sYXlvdXQuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gbnVsbCkgZmlyc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudDtcclxuICAgICAgICAgIGxhc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudCArIHdvcmQud29yZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0dGVyQ291bnQgKz0gd29yZC53b3JkLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCb3VuZHMgbGV0dGVycyBmb3IgY3VycmVudCBsaW5lXHJcbiAgICAgIGxldCBzdGFydExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbZmlyc3RMZXR0ZXJdO1xyXG4gICAgICBsZXQgZW5kTGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tsYXN0TGV0dGVyXTtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBzdGFydCBvciBlbmQgcmFuZ2UgaXMgb24gdGhpcyBsaW5lLCBjaGFuZ2UgYm91bmRzIGZvciB0aGVtXHJcbiAgICAgIGlmIChzdGFydC5wb3NpdGlvblsxXSA9PT0gIHN0YXJ0TGluZUxldHRlci5wb3NpdGlvblsxXSkgc3RhcnRMaW5lTGV0dGVyID0gc3RhcnQ7XHJcbiAgICAgIGlmIChlbmQucG9zaXRpb25bMV0gPT09IGVuZExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIGVuZExpbmVMZXR0ZXIgPSBlbmQ7XHJcblxyXG4gICAgICAvLyBXZSB1c2Ugb2Zmc2V0IHRvIGF2b2lkIHNlbGVjdHMgb3ZlcmxhcHBpbmdcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IC0gdGhpcy5tZXRyaWNzLmFzY2VudCkgLyAyO1xyXG5cclxuICAgICAgLy8gQWRkIHBvc2l0aW9ucyB0byBhcnJheVxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCldID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzBdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAxXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1sxXSArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDJdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1syXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgM10gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzNdICAgKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA0XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDVdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s1XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA2XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s2XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgN10gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbN10gIC0gb2Zmc2V0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0R2x5cGgoeCwgeSkge1xyXG5cclxuICAgIC8vIEdldCBzZWxlY3RpbmcgbGluZVxyXG4gICAgLy8gR2V0IHdvcmRzIG9uIHRoaXMgbGluZVxyXG4gICAgLy8gR2V0IGxldHRlcnMgb24gdGhpcyBsaW5lXHJcbiAgICAvLyBHZXQgbGV0dGVyIHdoaWNoIHggaXMgbW9yZSB0aGFuIGN1cnNvciB4XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBnbHlwaHMubGVuZ3RoOyArK2kpIHtcclxuXHJcbiAgICAgIGxldCBnbHlwaCA9IGdseXBoc1tpXTtcclxuXHJcbiAgICAgIGlmIChnbHlwaC5tZXRyaWNzLnkgPT09IHNlbGVjdGluZ0xpbmVZICsgbGluZUhlaWdodCkge1xyXG4gICAgICAgIGxhc3RHbHlwaE9uTGluZSA9IGdseXBoO1xyXG5cclxuICAgICAgICBpZiAoZ2x5cGgubWV0cmljcy54ICsgZ2x5cGgubWV0cmljcy53aWR0aD4geCkge1xyXG4gICAgICAgICByZXR1cm4gZ2x5cGhzW2kgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdEdseXBoT25MaW5lO1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvICB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCArIDEyLCBwb3NpdGlvbi55KTtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRSYW5nZShpbmRleCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRleHQuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICsgMTIgLCBwb3NpdGlvbi55KTtcclxuICAgIGNvbnN0IGluZGV4ID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcbiAgICB0aGlzLnNldFJhbmdlKG51bGwsIGluZGV4KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuXHJcbmNsYXNzIElucHV0IHtcclxuXHJcbiAgX2VuYWJsZWQgPSBmYWxzZTtcclxuICBvd25lciA9IG51bGw7XHJcblxyXG4gIGdseXBoSW5kZXggPSBudWxsO1xyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XHJcbiAgICB0aGlzLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmllbGQoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3NydGljdCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLm9uSW5wdXQoZXZlbnQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoZXZlbnQpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLm93bmVyLnNlbGVjdC5yYW5nZVsxXV07XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0ge3g6IDAsIHk6IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0fTtcclxuXHJcbiAgICBpZiAoc2VsZWN0ZWRHbHlwaCkge1xyXG4gICAgICBwb3NpdGlvbiA9IHsuLi5zZWxlY3RlZEdseXBoLm1ldHJpY3N9O1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uLnggKj0gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSAqPSB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XHJcblxyXG4gICAgdGhpcy5zZXRTY2FsZSh0aGlzLm93bmVyLnNjYWxlLngsIHRoaXMub3duZXIuc2NhbGUueSk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dChldmVudCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMub3duZXIuc2VsZWN0O1xyXG5cclxuICAgIGlmIChyYW5nZVswXSAhPT0gcmFuZ2VbMV0pIHtcclxuXHJcbiAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG4gICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuXHJcbiAgICAgIGxldCBuZXdUZXh0ID0gdGhpcy5vd25lci50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgICBuZXdUZXh0LnNwbGljZShyZW1vdmVJbmRleCwgcmVtb3ZlTGVuZ3RoICsgMSk7XHJcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKHJlbW92ZUluZGV4LHJlbW92ZUluZGV4KTtcclxuICAgICAgdGhpcy5vd25lci50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKHRoaXMub3duZXIuc2VsZWN0LnJhbmdlWzBdLCBldmVudC5kYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInNldCByYW5nZVwiKTtcclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKHRoaXMub3duZXIuc2VsZWN0LnJhbmdlWzBdICsgMSwgdGhpcy5vd25lci5zZWxlY3QucmFuZ2VbMV0gKyAxKVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSB0aGlzLmxheW91dC5nbHlwaHNbdGhpcy5vd25lci5zZWxlY3QucmFuZ2VbMF1dO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IHt4OiAwLCB5OiB0aGlzLm1ldHJpY3MubGluZUhlaWdodH07XHJcblxyXG4gICAgaWYgKHNlbGVjdGVkR2x5cGgpIHtcclxuICAgICAgcG9zaXRpb24gPSB7Li4uc2VsZWN0ZWRHbHlwaC5tZXRyaWNzfTtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbi54ICo9IHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgKj0gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIHRoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG5cclxuICAgIGxldCB0b3AgPSB5IC0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICB0b3AgKz0gb2Zmc2V0O1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgfVxyXG5cclxuICBzZXRTY2FsZSh4LCB5KSB7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgLSB0aGlzLm1ldHJpY3MuYXNjZW50KTtcclxuXHJcbiAgICBsZXQgdG9wID0geSAtIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA7XHJcbiAgICAvL3RvcCArPSBvZmZzZXQ7XHJcblxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGxpbmVIZWlnaHQgKyBcInB4XCJcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHt4fSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiB5KSArIFwicHhcIlxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdGMwKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnZhcnlpbmcgdmVjMiAgdGMwO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChiZ19jb2xvciwwLjQ1KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLDAuMik7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9