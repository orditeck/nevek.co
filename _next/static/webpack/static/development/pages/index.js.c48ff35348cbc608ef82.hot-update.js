webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/Testimonies.js":
/*!********************************!*\
  !*** ./layouts/Testimonies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/layouts/Testimonies.js";




var _default =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      aboutVisible: false,
      aboutTooltipVisible: false,
      mouseX: 0,
      mouseY: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "swiper", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "aboutToggle", function () {
      if (_this.state.aboutVisible) {
        _this.swiper.autoplay.start();

        _this.setState({
          aboutVisible: false
        });
      } else {
        _this.swiper.autoplay.stop();

        _this.setState({
          aboutVisible: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "aboutMouseEnter", function () {
      return _this.setState({
        aboutTooltipVisible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "aboutMouseLeave", function () {
      return _this.setState({
        aboutTooltipVisible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "aboutMouseMove", function (e) {
      var bounds = event.target.getBoundingClientRect();

      _this.setState({
        mouseX: event.clientX - bounds.left,
        mouseY: event.clientY - bounds.top
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderAboutTooltip", function () {
      if (!_this.state.aboutTooltipVisible) {
        return;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "about-tooltip",
        style: {
          left: _this.state.mouseX + 'px',
          top: _this.state.mouseY + 'px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\xC0 propos de cette photo");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderAboutSection", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, _this.renderAboutTooltip(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "about-toggle",
        onClick: _this.aboutToggle,
        onMouseEnter: _this.aboutMouseEnter,
        onMouseLeave: _this.aboutMouseLeave,
        onMouseMove: _this.aboutMouseMove,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()({
          about: true,
          invisible: !_this.state.aboutVisible,
          visible: _this.state.aboutVisible
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: _this.aboutToggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "\u2716"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "La photo de chaque t\xE9moignage est celle de son auteur."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Les photos corporatives, \xE7a repr\xE9sente moins la proximit\xE9 et l'accessibilit\xE9 que j'offre \xE0 mes clients."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "C'est pourquoi j'ai fait une suggestion plus \xE9clat\xE9e aux clients qui me laissent un t\xE9moignage: faire faire leur caricature par un excellent dessinateur et utiliser cette derni\xE8re comme photo de t\xE9moignage."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/images/testimonies/example.gif",
        alt: "Exemple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_8__["default"]('.testimony .swiper-container', {
        preloadImages: false,
        lazy: {
          loadPrevNext: true
        },
        grabCursor: true,
        loop: true,
        autoplay: {
          delay: 15000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoHeight: true,
        on: {
          lazyImageReady: function lazyImageReady() {
            _this2.swiper.updateAutoHeight();
          }
        }
      });
      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "testimony",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, this.renderAboutSection(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/testimonies/mathieu.jpg",
        alt: "Mathieu Brassard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Nous collaborons avec Keven depuis bient\xF4t 5 ans. Travailler avec lui est clair et simple. Il est en mesure d\u2019analyser rapidement la situation, imaginer des solutions efficaces et rencontrant les besoins du client. Jamais en panne d\u2019id\xE9e, il est en mesure de respecter les d\xE9lais et d\u2019apporter des solutions qui vont au-del\xE0 de la simple demande. Il est un atout important."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "Mathieu Brassard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Karbur ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "http://karbur.ca",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), "Partenaires depuis 2014")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/testimonies/david.jpg",
        alt: "David",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "L\u2019expertise de Keven nous a beaucoup aid\xE9 ces derni\xE8res ann\xE9es en tant qu\u2019entreprise. Son dynamisme est contagieux et son approche est toujours professionnelle. Keven est toujours \xE0 l'\xE9coute de nos besoins. Merci Keven!"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "David"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Garderie D\xE9p\xF4t ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://garderiedepot.com",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), "Partenaires depuis 2015")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/testimonies/valerie.jpg",
        alt: "Val\xE9rie Laporte",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Pour Keven, ce n\u2019est pas seulement un travail, c\u2019est une passion. Il se fait un devoir de proposer la meilleure solution et n\u2019est jamais \xE0 court d\u2019id\xE9es pour optimiser nos r\xE9sultats. Le souci du d\xE9tail et la minutie dont il fait preuve, tout en r\xE9ussissant \xE0 \xEAtre rapide font de lui un fournisseur fiable."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Val\xE9rie Laporte"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Cyan Concept ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://garderiedepot.com",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), "Partenaires depuis 2013"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-button-prev",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "swiper-button-next",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.c48ff35348cbc608ef82.hot-update.js.map