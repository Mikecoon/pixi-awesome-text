!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(1),f=n(s),h=r(10),l=n(h),c=r(11),d=n(c),p=PIXI.glCore,y=function(t){function e(t){i(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.shader=null,r}return a(e,t),u(e,[{key:"onContextChange",value:function(){var t=this.renderer.gl;t.getExtension("OES_standard_derivatives"),this.shader=new PIXI.Shader(t,l.default,d.default)}},{key:"render",value:function(t){var e=this.renderer,r=e.gl,n=t._texture,i=t._font;if(n&&n.valid&&i){t.styleID!==t.style.styleID&&t.updateText();var o=t._glDatas[e.CONTEXT_UID];o||(e.bindVao(null),o=this.buildGlData(t,r)),e.bindVao(o.vao),t.dirty!==o.dirty&&(o.dirty=t.dirty,o.uvBuffer.upload(t.uvs)),t.indexDirty!==o.indexDirty&&(o.indexDirty=t.indexDirty,o.indexBuffer.upload(t.indices)),o.vertexBuffer.upload(t.vertices),e.bindShader(o.shader),e.state.setBlendMode(t.blendMode),o.shader.uniforms.uSampler=e.bindTexture(n),o.shader.uniforms.translationMatrix=t.worldTransform.toArray(!0),o.shader.uniforms.u_fontInfoSize=t.style.fontSize/i.info.size,o.shader.uniforms.u_alpha=t.worldAlpha,o.shader.uniforms.u_color=t.style.fill,o.shader.uniforms.u_fontSize=t.style.fontSize,o.shader.uniforms.u_fontInfoSize=t.style.fontSize/i.info.size,o.shader.uniforms.u_weight=t.style.weight;var a=t.drawMode=r.TRIANGLES;o.vao.draw(a,t.indices.length,0)}}},{key:"buildGlData",value:function(t,e){var r={shader:this.shader,vertexBuffer:p.GLBuffer.createVertexBuffer(e,t.vertices,e.STREAM_DRAW),uvBuffer:p.GLBuffer.createVertexBuffer(e,t.uvs,e.STREAM_DRAW),indexBuffer:p.GLBuffer.createIndexBuffer(e,t.indices,e.STATIC_DRAW),vao:null,dirty:t.dirty,indexDirty:t.indexDirty};return r.vao=new p.VertexArrayObject(e).addIndex(r.indexBuffer).addAttribute(r.vertexBuffer,r.shader.attributes.aVertexPosition,e.FLOAT,!1,8,0).addAttribute(r.uvBuffer,r.shader.attributes.aTextureCoord,e.FLOAT,!1,8,0),r}}]),e}(PIXI.ObjectRenderer);PIXI.WebGLRenderer.registerPlugin("AwesomeTextRenderer",y),Object.assign(PIXI.extras,{AwesomeText:f.default})},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(2),f=n(s),h=r(6),l=n(h),c=function(t){function e(t,r,n){i(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n.texture));return a.style=r,a._text=t,a._font=n.glyphs,a._texture=n.texture,a.pluginName="AwesomeTextRenderer",a}return a(e,t),u(e,[{key:"updateText",value:function(){this.layout=(0,f.default)({text:this._text,font:this._font,align:this.style.align,fontSize:this.style.fontSize,fill:this.style.fill,fontWeight:this.style.fontWeight,width:this.style.wordWrapWidth,wordWrapWidth:this.style.wordWrapWidth,lineHeight:this.style.lineHeight});var t={width:this._font.common.scaleW,height:this._font.common.scaleH};this.visibleGlyphs=this.layout.glyphs.filter(function(t){return t.data.width*t.data.height>0}),this.vertices=this.getVertices(this.visibleGlyphs),this.uvs=this.getUvs(this.visibleGlyphs,t),this.indices=(0,l.default)({clockwise:!0,type:"uint16",count:this.visibleGlyphs.length}),this.styleID=this.style.styleID,this.dirty++,this.indexDirty++}},{key:"getVertices",value:function(t){var e=new Float32Array(4*t.length*2),r=0;return t.forEach(function(t){var n=t.data,i=t.position[0]+n.xoffset,o=t.position[1]+n.yoffset;e[r++]=i,e[r++]=o,e[r++]=i,e[r++]=o+n.height,e[r++]=i+n.width,e[r++]=o+n.height,e[r++]=i+n.width,e[r++]=o}),e}},{key:"getUvs",value:function(t,e){var r=new Float32Array(4*t.length*2),n=0;return t.forEach(function(t){var i=t.data,o=i.x+i.width,a=i.y+i.height,u=i.x/e.width,s=i.y/e.height,f=o/e.width,h=a/e.height;r[n++]=u,r[n++]=s,r[n++]=u,r[n++]=h,r[n++]=f,r[n++]=h,r[n++]=f,r[n++]=s}),r}},{key:"getPages",value:function(t){var e=new Float32Array(4*t.length),r=0;return t.forEach(function(t){var n=t.data.page||0;e[r++]=n,e[r++]=n,e[r++]=n,e[r++]=n}),e}},{key:"text",get:function(){return this._text},set:function(t){this._text=t,this.update()}},{key:"texture",get:function(){return this._texture}},{key:"font",get:function(){return this._font}}]),e}(PIXI.mesh.Mesh);e.default=c},function(t,e,r){function n(t){this.glyphs=[],this._measure=this.computeMetrics.bind(this),this.update(t)}function i(t){Object.defineProperty(n.prototype,t,{get:o(t),configurable:!0})}function o(t){return new Function(["return function "+t+"() {","  return this._"+t,"}"].join("\n"))()}function a(t,e){if(!t.chars||0===t.chars.length)return null;var r=c(t.chars,e);return r>=0?t.chars[r]:null}function u(t){for(var e=0;e<v.length;e++){var r=v[e].charCodeAt(0),n=c(t.chars,r);if(n>=0)return t.chars[n].height}return 0}function s(t){for(var e=0;e<g.length;e++){var r=g[e].charCodeAt(0),n=c(t.chars,r);if(n>=0)return t.chars[n]}return 0}function f(t){for(var e=0;e<x.length;e++){var r=x[e].charCodeAt(0),n=c(t.chars,r);if(n>=0)return t.chars[n].height}return 0}function h(t,e,r){if(!t.kernings||0===t.kernings.length)return 0;for(var n=t.kernings,i=0;i<n.length;i++){var o=n[i];if(o.first===e&&o.second===r)return o.amount}return 0}function l(t){return"center"===t?w:"right"===t?A:m}function c(t,e,r){r=r||0;for(var n=r;n<t.length;n++)if(t[n].id===e)return n;return-1}var d=r(3),p=r(4),y=r(5),v=["x","e","a","o","n","s","r","c","u","m","v","w","z"],g=["m","w"],x=["H","I","N","E","F","K","L","T","U","V","W","X","Y","Z"],_="\t".charCodeAt(0),b=" ".charCodeAt(0),m=0,w=1,A=2;t.exports=function(t){return new n(t)},n.prototype.update=function(t){if(t=p({measure:this._measure},t),this._opt=t,this._opt.tabSize=y(this._opt.tabSize,4),!t.font)throw new Error("must provide a valid bitmap font");var e=this.glyphs,r=t.text||"",n=t.font;this._setupSpaceGlyphs(n);var i=d.lines(r,t),o=t.width||0;e.length=0;var a=i.reduce(function(t,e){return Math.max(t,e.width,o)},0),s=0,c=0,v=y(t.lineHeight,n.common.lineHeight),g=n.common.base,x=v-g,_=t.letterSpacing||0,b=v*i.length-x,m=l(this._opt.align);c-=b,this._width=a,this._height=b,this._descender=v-g,this._baseline=g,this._xHeight=u(n),this._capHeight=f(n),this._lineHeight=v,this._ascender=v-x-this._xHeight;var S=this;i.forEach(function(t,i){for(var o,u=t.start,f=t.end,l=t.width,d=u;d<f;d++){var p=r.charCodeAt(d),y=S.getGlyph(n,p);if(y){o&&(s+=h(n,o.id,y.id));var g=s;m===w?g+=(a-l)/2:m===A&&(g+=a-l),e.push({position:[g,c],data:y,index:d,line:i}),s+=y.xadvance+_,o=y}}c+=v,s=0}),this._linesTotal=i.length},n.prototype._setupSpaceGlyphs=function(t){if(this._fallbackSpaceGlyph=null,this._fallbackTabGlyph=null,t.chars&&0!==t.chars.length){var e=a(t,b)||s(t)||t.chars[0],r=this._opt.tabSize*e.xadvance;this._fallbackSpaceGlyph=e,this._fallbackTabGlyph=p(e,{x:0,y:0,xadvance:r,id:_,xoffset:0,yoffset:0,width:0,height:0})}},n.prototype.getGlyph=function(t,e){var r=a(t,e);return r?r:e===_?this._fallbackTabGlyph:e===b?this._fallbackSpaceGlyph:null},n.prototype.computeMetrics=function(t,e,r,n){var i,o,a=this._opt.letterSpacing||0,u=this._opt.font,s=0,f=0,l=0;if(!u.chars||0===u.chars.length)return{start:e,end:e,width:0};r=Math.min(t.length,r);for(var c=e;c<r;c++){var d=t.charCodeAt(c),i=this.getGlyph(u,d);if(i){var p=(i.xoffset,o?h(u,o.id,i.id):0);s+=p;var y=s+i.xadvance+a,v=s+i.width;if(v>=n||y>=n)break;s=y,f=v,o=i}l++}return o&&(f+=o.xoffset),{start:e,end:e+l,width:f}},["width","height","descender","ascender","xHeight","baseline","capHeight","lineHeight"].forEach(i)},function(t,e){function r(t,e,r,n){var i=t.indexOf(e,r);return i===-1||i>n?n:i}function n(t){return f.test(t)}function i(t,e,r,n,i){for(var o=[],a=r,s=r;s<n&&s<e.length;s++){var f=e.charAt(s),h=u.test(f);if(h||s===n-1){var l=h?s:s+1,c=t(e,a,l,i);o.push(c),a=s+1}}return o}function o(t,e,i,o,a,u){var f=[],h=a;for("nowrap"===u&&(h=Number.MAX_VALUE);i<o&&i<e.length;){for(var l=r(e,s,i,o);i<l&&n(e.charAt(i));)i++;var c=t(e,i,l,h),d=i+(c.end-c.start),p=d+s.length;if(d<l){for(;d>i&&!n(e.charAt(d));)d--;if(d===i)p>i+s.length&&p--,d=p;else for(p=d;d>i&&n(e.charAt(d-s.length));)d--}if(d>=i){var y=t(e,i,d,h);f.push(y)}i=p}return f}function a(t,e,r,n){var i=Math.min(n,r-e);return{start:e,end:e+i}}var u=/\n/,s="\n",f=/\s/;t.exports=function(e,r){var n=t.exports.lines(e,r);return n.map(function(t){return e.substring(t.start,t.end)}).join("\n")},t.exports.lines=function(t,e){if(e=e||{},0===e.width&&"nowrap"!==e.mode)return[];t=t||"";var r="number"==typeof e.width?e.width:Number.MAX_VALUE,n=Math.max(0,e.start||0),u="number"==typeof e.end?e.end:t.length,s=e.mode,f=e.measure||a;return"pre"===s?i(f,t,n,u,r):o(f,t,n,u,r,s)}},function(t,e){function r(){for(var t={},e=0;e<arguments.length;e++){var r=arguments[e];for(var i in r)n.call(r,i)&&(t[i]=r[i])}return t}t.exports=r;var n=Object.prototype.hasOwnProperty},function(t,e){t.exports=function(t,e){return"number"==typeof t?t:"number"==typeof e?e:0}},function(t,e,r){var n=r(7),i=r(8),o=r(9),a=[0,2,3],u=[2,1,3];t.exports=function(t,e){t&&(i(t)||o(t))||(e=t||{},t=null),e="number"==typeof e?{count:e}:e||{};for(var r="string"==typeof e.type?e.type:"uint16",s="number"==typeof e.count?e.count:1,f=e.start||0,h=e.clockwise!==!1?a:u,l=h[0],c=h[1],d=h[2],p=6*s,y=t||new(n(r))(p),v=0,g=0;v<p;v+=6,g+=4){var x=v+f;y[x+0]=g+0,y[x+1]=g+1,y[x+2]=g+2,y[x+3]=g+l,y[x+4]=g+c,y[x+5]=g+d}return y}},function(t,e){t.exports=function(t){switch(t){case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"float32":return Float32Array;case"float64":return Float64Array;case"array":return Array;case"uint8_clamped":return Uint8ClampedArray}}},function(t,e){function r(t){return t.BYTES_PER_ELEMENT&&"[object ArrayBuffer]"===n.call(t.buffer)||Array.isArray(t)}var n=Object.prototype.toString;t.exports=r},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},function(t,e){t.exports="#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float u_fontInfoSize;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    vTextureCoord = aTextureCoord;\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition * u_fontInfoSize, 1.0)).xy, 0.0, 1.0);\n}\n"},function(t,e){t.exports="#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform vec3 u_color;\nuniform sampler2D uSampler;\nuniform float u_alpha;\nuniform float u_fontSize;\nuniform float u_weight;\n\nvoid main(void)\n{\n\n    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n\n    /*float smoothing = 1. / u_fontSize * 6.;\n    float debug = 0.0;\n\n    vec2 textureCoord = vTextureCoord * 2.;\n    float dist = texture2D(uSampler, vTextureCoord).a;\n\n    if (debug > 0.0) {\n        gl_FragColor = vec4(dist, dist, dist, 1);\n    } else {\n        float alpha = smoothstep(u_weight - smoothing, u_weight + smoothing, dist);\n\n        vec3 color = u_color * alpha;\n\n        gl_FragColor = vec4(color, alpha) * u_alpha;\n    }*/\n}\n"}]);