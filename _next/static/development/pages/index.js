((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/FaqItem.js":
/*!*******************************!*\
  !*** ./components/FaqItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/FaqItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('faq', {
          open: _this.state.open
        }),
        onClick: _this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, _this.props.children);
    });

    return _this;
  }

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/LogoSlider.js":
/*!**********************************!*\
  !*** ./components/LogoSlider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/LogoSlider.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('section.logo-slider .swiper-container', {
        slidesPerView: window.innerWidth / 200,
        loopedSlides: 9999,
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        },
        preloadImages: false,
        lazy: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "logo-slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/garderiedepot.jpg",
        alt: "Garderie D\xE9p\xF4t",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/villesag.jpg",
        alt: "Ville Saguenay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/uqac.jpg",
        alt: "Universit\xE9 du Qu\xE9bec \xE0 Chicoutimi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/frt.jpg",
        alt: "Fen\xEAtres R\xE9jean Tremblay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/gardaworld.jpg",
        alt: "Garda World",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/lacbeauport.jpg",
        alt: "Municipalit\xE9 du Lac Beauport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/sthubert.jpg",
        alt: "St-Hubert",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/laparisienne.jpg",
        alt: "La Parisienne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "swiper-lazy",
        "data-src": "/static/images/logos/arcticpower.jpg",
        alt: "Arctic Power",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "swiper-lazy-preloader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/ */ "./components/services/index.js");

var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/Services.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var services = {
  accompagnement: _services___WEBPACK_IMPORTED_MODULE_3__["Accompagnement"],
  consultation: _services___WEBPACK_IMPORTED_MODULE_3__["Consultation"],
  developpement: _services___WEBPACK_IMPORTED_MODULE_3__["Developpement"]
};

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      currentService: null,
      title: 'Services en bref',
      closingCallback: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onServiceClick",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(service) {
        var previousServiceState, opening, closing;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                previousServiceState = _this.state.currentService;
                opening = previousServiceState === null;
                closing = previousServiceState === service;
                _context.next = 5;
                return _this.setState({
                  currentService: service,
                  title: 'Services'
                });

              case 5:
                if (!opening && !closing) {
                  document.querySelectorAll('section.service article').forEach(function (el) {
                    return el.style.animationName = "article-after";
                  });
                }

                if (closing) {
                  document.querySelector('section.service').classList.add('closing');

                  _this.setState({
                    closingCallback: setTimeout(function () {
                      _this.setState({
                        currentService: null,
                        title: 'Services en bref'
                      });
                    }, 750)
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var Service = this.state.currentService ? services[this.state.currentService] : react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('services', {
          "is-single": !!this.state.currentService
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services___WEBPACK_IMPORTED_MODULE_3__["AccompagnementSummary"], {
        currentService: this.state.currentService,
        onClickHandler: this.onServiceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services___WEBPACK_IMPORTED_MODULE_3__["ConsultationSummary"], {
        currentService: this.state.currentService,
        onClickHandler: this.onServiceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_services___WEBPACK_IMPORTED_MODULE_3__["DeveloppementSummary"], {
        currentService: this.state.currentService,
        onClickHandler: this.onServiceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          service: true,
          active: !!this.state.currentService
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Service, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./components/Welcome.js":
/*!*******************************!*\
  !*** ./components/Welcome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/Welcome.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Keven Lefebvre,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "strat\xE8ge num\xE9rique")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "J'aspire \xE0 une chose pour mes clients: qu'ils deviennent les meilleurs sur le Web."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "J'aide les entreprises \xE0 porter leur vision sur le Web en mettant l'emphase sur les besoins de leurs clients."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Je passe beaucoup de temps \xE0 \xE9tudier comment le Web et le marketing affectent nos choix. Et beaucoup de temps \xE0 programmer."))));
});

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: FaqItem, Footer, LogoSlider, Services, Welcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FaqItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaqItem */ "./components/FaqItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaqItem", function() { return _FaqItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Footer */ "./layouts/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _LogoSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LogoSlider */ "./components/LogoSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoSlider", function() { return _LogoSlider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services */ "./components/Services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _Services__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Welcome */ "./components/Welcome.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Welcome", function() { return _Welcome__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./components/services/Accompagnement.js":
/*!***********************************************!*\
  !*** ./components/services/Accompagnement.js ***!
  \***********************************************/
/*! exports provided: default, Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceSummary */ "./components/services/ServiceSummary.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/services/Accompagnement.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "accompagnement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/accompagnement.gif",
    alt: "Accompagnement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Mon service d'accompagnement consiste \xE0 vous fournir des conseils personnalis\xE9s dans une perspective de d\xE9veloppement des affaires, mais aussi de vos comp\xE9tences personnelles. Ce n'est pas seulement de vous donner la tranquilit\xE9 d'esprit de faire affaire avec un professionnel d'exp\xE9rience pour l'ensemble de votre num\xE9rique, mais aussi d'avoir un alli\xE9 qui vous expliquera en profondeur toutes les options qui s'offrent \xE0 vous."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Ce service est un partenariat o\xF9 vous me mettez en charge de ce que je fais de mieux afin de vous concentrer \xE0 ce que vous faites le mieux. Nous travaillons ensemble afin de d\xE9finir les meilleures strat\xE9gies pour vous d\xE9marquer et augmenter votre chiffre d'affaire. Puisque notre partenariat est intimement li\xE9 aux r\xE9sultats, je carbure au surpassement des objectifs tout comme vous."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Votre projet devient notre projet."));
});
var Summary =
/*#__PURE__*/
function (_Component) {
  _inherits(Summary, _Component);

  function Summary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Summary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Summary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSummary__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        service: "accompagnement"
      }, _this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Accompagnement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Mon service d'accompagnement vous assure d'avoir un partenaire fiable et comp\xE9tant pour tout ce qui touche le num\xE9rique de votre entreprise. C'est la tranquilit\xE9 d'esprit de savoir que votre num\xE9rique est guid\xE9 par un expert qui transporte votre vision."));
    });

    return _this;
  }

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/services/Consultation.js":
/*!*********************************************!*\
  !*** ./components/services/Consultation.js ***!
  \*********************************************/
/*! exports provided: default, Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceSummary */ "./components/services/ServiceSummary.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/services/Consultation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "consultation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/consultation.gif",
    alt: "Consultation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Mon service de consultation est similaire \xE0 celui d'accompagnement, \xE0 la diff\xE9rence qu'il est cibl\xE9 sur des besoins pr\xE9cis. Le service se termine souvent suite \xE0 la compl\xE9tion d'un objectif particulier, par exemple suite \xE0 la formation de vos \xE9quipes, et recommence suite \xE0 d'autres besoins. \xC0 travers mon chapeau de consultant, j'aurai pour mission de vous donner des conseils d'expert dans un domaine particulier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Voici quelques exemples de services offerts en consultation:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Formations des \xE9quipes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "R\xE9daction de votre appel d'offres"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Gestion de votre projet num\xE9rique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "\xC9laboration d'une strat\xE9gie d'innovation technologique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Identification des risques et des opportunit\xE9s technologiques pour votre projet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Veille technologique approfondie"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Direction de projets techniques"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "D\xE9ploiement des projets"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Conseils d'expert sur la s\xE9curit\xE9")));
});
var Summary =
/*#__PURE__*/
function (_Component) {
  _inherits(Summary, _Component);

  function Summary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Summary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Summary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSummary__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        service: "consultation"
      }, _this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "\xC0 mi-chemin entre d\xE9veloppeur et accompagnateur, mon r\xF4le de consultant Web est de vous donner les meilleurs conseils d'expert pour vos besoins pr\xE9cis. Avec ma connaissance approfondie du Web, vous serez entre bonne main."));
    });

    return _this;
  }

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/services/Developpement.js":
/*!**********************************************!*\
  !*** ./components/services/Developpement.js ***!
  \**********************************************/
/*! exports provided: default, Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceSummary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceSummary */ "./components/services/ServiceSummary.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/services/Developpement.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "developpement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/developpement.gif",
    alt: "D\xE9veloppement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Si on me demandait de comparer le travail de deux carreleurs, la seule chose que je saurais comparer, c'est le r\xE9sultat final, soit l'alignement des tuiles. Il en a va sensiblement de m\xEAme les d\xE9veloppeurs Web: sans conna\xEEtre toutes les bonnes pratiques, il est difficile savoir si on a fait le bon choix."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "C'est d'ailleurs pour cette raison qu'en plus de mon service de d\xE9veloppement Web, j'offre \xE9galement les services de consultation et d'accompagnement Web: j'aide des entreprises \xE0 faire le bon choix lors de la s\xE9lection de leur agence Web, de leur d\xE9veloppeur Web et m\xEAme de leur employ\xE9."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Le d\xE9veloppement Web n'\xE9chappe pas au principe qu'il y a autant de fa\xE7ons de faire quelque chose qu'il y a de personnes pour le faire. Mais heureusement, des standards existent et m\xEAme en leur absence, une veille technologique approfondie permet de faire des choix \xE9clair\xE9s."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Avec mes ann\xE9es d'exp\xE9rience dans le Web, je connais les bonnes m\xE9thodes pour r\xE9aliser des projets Web qui durent longtemps. Plut\xF4t que de d\xE9penser des sommes d'entretiens et de r\xE9\xE9critures, je pr\xE9f\xE8re que mes clients r\xE9-investissent dans leurs plateformes pour r\xE9pondre aux besoins \xE9volutifs de leurs utilisateurs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Faire affaire avec un programmeur d'exp\xE9rience, c'est s'assurer d'avoir une sous-fondation solide suivie d'une fondation modulable qui permettra d'\xE9voluer au rythme de votre entreprise."));
});
var Summary =
/*#__PURE__*/
function (_Component) {
  _inherits(Summary, _Component);

  function Summary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Summary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Summary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceSummary__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
        service: "developpement"
      }, _this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "D\xE9veloppement"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Je suis un d\xE9veloppeur Web senior qui offre du d\xE9veloppement haut de gamme aux entreprises soucieuses de leurs conversions et de l'exp\xE9rience de leurs utilisateurs. Je d\xE9veloppe d'abord pour les clients de mes clients."));
    });

    return _this;
  }

  return Summary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./components/services/ServiceSummary.js":
/*!***********************************************!*\
  !*** ./components/services/ServiceSummary.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/components/services/ServiceSummary.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function () {
      _this.props.onClickHandler(_this.props.service);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: _this.props.currentService === _this.props.service ? 'active' : '',
        onClick: _this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, _this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "En savoir plus"));
    });

    return _this;
  }

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/services/index.js":
/*!**************************************!*\
  !*** ./components/services/index.js ***!
  \**************************************/
/*! exports provided: Accompagnement, AccompagnementSummary, Consultation, ConsultationSummary, Developpement, DeveloppementSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Accompagnement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accompagnement */ "./components/services/Accompagnement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accompagnement", function() { return _Accompagnement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccompagnementSummary", function() { return _Accompagnement__WEBPACK_IMPORTED_MODULE_0__["Summary"]; });

/* harmony import */ var _Consultation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Consultation */ "./components/services/Consultation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Consultation", function() { return _Consultation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsultationSummary", function() { return _Consultation__WEBPACK_IMPORTED_MODULE_1__["Summary"]; });

/* harmony import */ var _Developpement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Developpement */ "./components/services/Developpement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Developpement", function() { return _Developpement__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeveloppementSummary", function() { return _Developpement__WEBPACK_IMPORTED_MODULE_2__["Summary"]; });





/***/ }),

/***/ "./layouts/Engagement.js":
/*!*******************************!*\
  !*** ./layouts/Engagement.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/layouts/Engagement.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "with-bg right mustard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-src": "/static/images/engagement.gif",
    alt: "Un engagement clair",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Un engagement clair"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Mon engagment envers vous est simple:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "transposer votre vision dans l'univers num\xE9rique"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Je suis un passionn\xE9 du Web. J'ai des connaissances \xE9tendues dans le num\xE9rique, j'ai de fortes opinions quant \xE0 l'avenir du Web, de son pass\xE9 et de son pr\xE9sent. C'est l'atout qu'il vous faut pour bien vous positionner, aujourd'hui, pour ne pas reproduire les erreurs du pass\xE9, pour r\xE9pondre d\xE8s maintenant aux besoins de vos clients et de vous assurer d'une perrenit\xE9 num\xE9rique (car oui, \xE7a existe)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Je m'engage \xE0 \xEAtre le porteur num\xE9rique de votre vision d'entreprise et de votre vision personnelle d'entrepreneur.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Curieux d'en apprendre plus?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Continuez votre lecture \u2193")))))));
});

/***/ }),

/***/ "./layouts/Faq.js":
/*!************************!*\
  !*** ./layouts/Faq.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/layouts/Faq.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "with-bg white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Foire aux questions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Combien charges-tu / combien \xE7a va co\xFBter?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "La plupart du temps, je charge au projet, et non \xE0 l'heure. Je vous fourni un estim\xE9 pour la r\xE9alisation du projet dans son ensemble, vous n'avez donc pas \xE0 d\xE9bourser pour chaque petit d\xE9tail suppl\xE9mentaire (dans les limites du raisonnable). Le projet est termin\xE9 lorsque vous \xEAtes satisfait du r\xE9sultat. Le support est inclus gratuitement dans la majorit\xE9 des cas."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Pour conna\xEEtre combien \xE7a co\xFBte, comme chaque projet est unique, \xE7a d\xE9pend du projet. C'est pourquoi m\xEAme donner un ordre de grandeur est impossible. Donnez-moi quelques d\xE9tails et il me fera plaisir de vous donner un approximatif pour vous donner une id\xE9e.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "J'ai besoin d'aide imm\xE9diatement, peux-tu m'aider?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Probablement. Une consultation t\xE9l\xE9phonique co\xFBte 180$ jusqu'\xE0 deux heures. Tirez le maximum de ces deux heures en demandant tout ce que vous voulez, incluant une correction rapide sur votre site Web."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Lors d'un appel, je vous informerai clairement lorsque mon temps deviendra facturable, aucune surprise."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Je ne charge habituellement rien pour quelque chose qui se r\xE8gle en quelques minutes, n'h\xE9sitez donc jamais \xE0 m'appeler!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://18444487602",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Appelez-moi: 1 (844) 448-7602"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Et si j'ai besoin de support ensuite?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Si vous avez besoin de quoi que ce soit, je suis aussi loin qu'un ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://18444487602",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "appel"), " ou qu'un ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:keven@nevek.co",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "courriel"), ". Le support post-livraison est g\xE9n\xE9ralement gratuit.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Pourquoi faire affaires avec toi?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "J'aspire \xE0 ce que vous deveniez le meilleur sur le Web"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "J'ai plus de 10 ans d'exp\xE9rience en Web"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Je suis un passionn\xE9, vous verrez, c'est contagieux"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "J'ai des sp\xE9cialit\xE9s tout en restant g\xE9n\xE9raliste"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "J'ai de l'exp\xE9rience avec des grandes entreprises et des PME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Mon travail a eu des impacts significatifs sur le chiffre d'affaires de mes clients"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "J'ai des solides r\xE9f\xE9rences, ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://18444487602",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "contactez-moi"), " pour obtenir des exemples concrets"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Pourquoi tes clients aiment-ils travailler toi?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Parce que je traite leur projet comme si c'\xE9tait le mien. Car je sais me mettre \xE0 leur place et \xE0 la place de leurs clients. Je parle honn\xEAtement et je suis un bon vulg\xE9risateur. Mes clients comprennent ce que je fais car je prend le temps de leur expliquer. Ils se font pr\xE9senter plusieurs options et font donc des choix \xE9clair\xE9s. Je m'investi personnellement dans tous les projets que je fais. Mes clients sont trait\xE9s aux petits soins."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Faire traiter votre projet avec l'importance qu'il m\xE9rite vous int\xE9resse? ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://18444487602",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Contactez-moi"), "!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Offres-tu l'h\xE9bergement Web?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Parfois, en option. Plus pr\xE9cisement, j'offre de la gestion d'h\xE9bergement, du \xAB managed hosting \xBB en bon fran\xE7ais. Ce qui veut dire que je peux g\xE9rer l'ensemble de votre infrastructure Web pour vous offrir une tranquilit\xE9 d'esprit compl\xE8te."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Il existe cependant d'autres options et tout d\xE9pend de vos besoins. Je ne vous vendrai jamais des services dont vous n'avez pas besoin.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Fais-tu tout toi-m\xEAme? SEO, SEM, PPC, design, etc?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Non."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "J'offre trois services:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "D\xE9veloppement Web (programmation)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Accompagnement")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "En consultation, la majorit\xE9 de mes clients ont d\xE9j\xE0 les ressources (ex: designer) \xE0 l'interne ou \xE0 l'externe. Je viens combler un besoin pr\xE9cis, par exemple, la formation d'une \xE9quipe, l'\xE9valuer de la s\xE9curit\xE9 d'un site, de l'application ou du serveur, etc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "En accompagnement, nous chercherons ensemble les meilleures ressources pour nous aider selon votre budget. Avec mes dix ann\xE9es d'exp\xE9riences dans le Web, comme propri\xE9taire d'agence, directeur des technologies ou encore consultant dans diverses grandes organisations, j'ai les connaissances n\xE9cessaires pour g\xE9rer l'ensemble de votre num\xE9rique et faire les bons choix.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "En quoi d\xE9veloppes-tu?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Je d\xE9veloppe principalement en JavaScript (frontend & backend) et PHP. J'ai beaucoup d'exp\xE9riences par le fait m\xEAme en HTML5/CSS3. J'ai de bonnes connaissances en Python. J'ai beaucoup d'exp\xE9riences en MySQL et de bonnes connaissances en NoSQL."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Mais surtout, j'analyse et je conceptualise avant de d\xE9buter la programmation. De cette fa\xE7on, la structure organisationnelle du site Web ou de l'application est \xE9tabli \xE0 l'avance, il ne reste qu'\xE0 faire le plus facile: programmer!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Je programme toujours en suivant les normes les plus populaires. Par exemple, en PHP, je me soucie que mon code soit conforme aux standards ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.php-fig.org/psr/",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
    title: "PHP Standards Recommendations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "PSR")), ". J'utilise le formattage automatique pour rendre mon code lisible. Je documente."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "J'opte le plus souvent possible pour une g\xE9n\xE9ration de site statique, permettant ainsi une rapidit\xE9 in\xE9galable qui n'a que des r\xE9percussions positive sur le positionnement dans les moteurs de recherche, sur les taux de conversion, etc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Je suis expert WordPress. Apr\xE8s plus de 10 ans \xE0 l'utiliser de fa\xE7on avanc\xE9e, je connais les meilleures pratiques et je connais tr\xE8s bien son code source. Il fait parti des options que j'offre lorsque je pr\xE9sente tous les choix.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Es-tu 360\xB0? 2.0? 4.0?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Je suis capable de pivoter sur moi-m\xEAme \xE0 360\xB0, m\xEAme plus avec un peu de motivation. J'ai cependant une vision p\xE9riph\xE9rique en dessous de la moyenne. Je suis actuellement en version ", new Date().getFullYear(), ".", ("0" + (new Date().getMonth() + 1)).slice(-2), ".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["FaqItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Qu'est-ce que \xE7a veut dire nevek?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Keven", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), "Nevek")))));
});

/***/ }),

/***/ "./layouts/Footer.js":
/*!***************************!*\
  !*** ./layouts/Footer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/layouts/Footer.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "site-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/footer.png",
    alt: "Keven Lefebvre, Strat\xE8ge num\xE9rique, Consultant Web & D\xE9veloppeur Web Senior \xE0 Chicoutimi, Saguenay.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), "Keven Lefebvre \xA9 ", new Date().getFullYear(), ", tous droits r\xE9serv\xE9s. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), "Strat\xE8ge num\xE9rique, Consultant Web & D\xE9veloppeur Web Senior \xE0 Chicoutimi, Saguenay.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Entrons en contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "T\xE9l\xE9phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "tel://18444487602",
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "1 (844) 448-7602"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Courriel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:keven@nevek.co",
    className: "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "keven@nevek.co"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-src": "/static/images/footer.png",
    alt: "Keven Lefebvre, Strat\xE8ge num\xE9rique, Consultant Web & D\xE9veloppeur Web Senior \xE0 Chicoutimi, Saguenay.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), "Keven Lefebvre \xA9 ", new Date().getFullYear(), ", tous droits r\xE9serv\xE9s. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), "Strat\xE8ge num\xE9rique, Consultant Web & D\xE9veloppeur Web Senior \xE0 Chicoutimi, Saguenay. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/orditeck/nevek.co",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Sources de ce site"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/orditeck",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/keven.lefebvre",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/keven.lefebvre",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/orditeck/",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "LinkedIn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), "\xA0")));
});

/***/ }),

/***/ "./layouts/StrategeNumerique.js":
/*!**************************************!*\
  !*** ./layouts/StrategeNumerique.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/layouts/StrategeNumerique.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "with-bg left green-sheen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    "data-src": "/static/images/stratege.gif",
    alt: "Strat\xE8ge num\xE9rique",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Strat\xE8ge num\xE9rique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "On parle de virage num\xE9rique des entreprises depuis d\xE9j\xE0 plusieurs ann\xE9es. Mais peut-\xEAtre vous demandez-vous:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\xC0 qui s'adresser?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Par o\xF9 commencer?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Un strat\xE8ge num\xE9rique est la personne id\xE9ale pour vous aider \xE0 mettre au point un plan num\xE9rique selon vos besoins et votre budget. \xC9tape par \xE9tape en fonction de des objectifs clairs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Communiquez avec moi afin d'obtenir gratuitement des suggestions d'am\xE9liorations num\xE9riques pour votre entreprise."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Curieux d'en apprendre plus?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "",
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Continuez votre lecture \u2193")))))));
});

/***/ }),

/***/ "./layouts/index.js":
/*!**************************!*\
  !*** ./layouts/index.js ***!
  \**************************/
/*! exports provided: Engagement, StrategeNumerique, Faq, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Engagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Engagement */ "./layouts/Engagement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Engagement", function() { return _Engagement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _StrategeNumerique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StrategeNumerique */ "./layouts/StrategeNumerique.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StrategeNumerique", function() { return _StrategeNumerique__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Faq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Faq */ "./layouts/Faq.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Faq", function() { return _Faq__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./layouts/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom7/dist/dom7.modular.js":
/*!************************************************!*\
  !*** ./node_modules/dom7/dist/dom7.modular.js ***!
  \************************************************/
/*! exports provided: $, addClass, removeClass, hasClass, toggleClass, attr, removeAttr, prop, data, removeData, dataset, val, transform, transition, on, off, once, trigger, transitionEnd, animationEnd, width, outerWidth, height, outerHeight, offset, hide, show, styles, css, toArray, each, forEach, filter, map, html, text, is, indexOf, index, eq, append, appendTo, prepend, prependTo, insertBefore, insertAfter, next, nextAll, prev, prevAll, siblings, parent, parents, closest, find, children, remove, detach, add, empty, scrollTo, scrollTop, scrollLeft, animate, stop, click, blur, focus, focusin, focusout, keyup, keydown, keypress, submit, change, mousedown, mousemove, mouseup, mouseenter, mouseleave, mouseout, mouseover, touchstart, touchend, touchmove, resize, scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return indexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Dom7 2.1.2
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2018, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: September 13, 2018
 */


class Dom7 {
  constructor(arr) {
    const self = this;
    // Create array-like object
    for (let i = 0; i < arr.length; i += 1) {
      self[i] = arr[i];
    }
    self.length = arr.length;
    // Return collection with methods
    return this;
  }
}

function $(selector, context) {
  const arr = [];
  let i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      let els;
      let tempParent;
      const html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        let toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        tempParent = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) arr.push(els[i]);
        }
      }
    } else if (selector.nodeType || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] || selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$.fn = Dom7.prototype;
$.Class = Dom7;
$.Dom7 = Dom7;

function unique(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }
  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, (match, group1) => group1.toUpperCase());
}

function requestAnimationFrame(callback) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame(callback);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame(callback);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(callback, 1000 / 60);
}
function cancelAnimationFrame(id) {
  if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame(id);
  else if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame(id);
  return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout(id);
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this;
  }
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
    }
  }
  return this;
}
function removeClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) return false;
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  const classes = className.split(' ');
  for (let i = 0; i < classes.length; i += 1) {
    for (let j = 0; j < this.length; j += 1) {
      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
    }
  }
  return this;
}
function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  }

  // Set attrs
  for (let i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (const attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (let i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }
  return this;
}
// eslint-disable-next-line
function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (let i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        // eslint-disable-next-line
        for (const propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }
    return this;
  }
}
function data(key, value) {
  let el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      const dataKey = el.getAttribute(`data-${key}`);
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (let i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
function removeData(key) {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}
function dataset() {
  const el = this[0];
  if (!el) return undefined;
  const dataset = {}; // eslint-disable-line
  if (el.dataset) {
    // eslint-disable-next-line
    for (const dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (let i = 0; i < el.attributes.length; i += 1) {
      // eslint-disable-next-line
      const attr = el.attributes[i];
      if (attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
      }
    }
  }
  // eslint-disable-next-line
  for (const key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;
    else if (dataset[key] === 'true') dataset[key] = true;
    else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }
  return dataset;
}
function val(value) {
  const dom = this;
  if (typeof value === 'undefined') {
    if (dom[0]) {
      if (dom[0].multiple && dom[0].nodeName.toLowerCase() === 'select') {
        const values = [];
        for (let i = 0; i < dom[0].selectedOptions.length; i += 1) {
          values.push(dom[0].selectedOptions[i].value);
        }
        return values;
      }
      return dom[0].value;
    }
    return undefined;
  }

  for (let i = 0; i < dom.length; i += 1) {
    const el = dom[i];
    if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
      for (let j = 0; j < el.options.length; j += 1) {
        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
      }
    } else {
      el.value = value;
    }
  }
  return dom;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = `${duration}ms`; // eslint-disable-line
  }
  for (let i = 0; i < this.length; i += 1) {
    const elStyle = this[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  function handleLiveEvent(e) {
    const target = e.target;
    if (!target) return;
    const eventData = e.target.dom7EventData || [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    if ($(target).is(targetSelector)) listener.apply(target, eventData);
    else {
      const parents = $(target).parents(); // eslint-disable-line
      for (let k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
      }
    }
  }
  function handleEvent(e) {
    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }
    listener.apply(this, eventData);
  }
  const events = eventType.split(' ');
  let j;
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        const event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
        el.dom7LiveListeners[event].push({
          listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(event, handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off(...args) {
  let [eventType, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventType, listener, capture] = args;
    targetSelector = undefined;
  }
  if (!capture) capture = false;

  const events = eventType.split(' ');
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let handlers;
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }
      if (handlers && handlers.length) {
        for (let k = handlers.length - 1; k >= 0; k -= 1) {
          const handler = handlers[k];
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }
  return this;
}
function once(...args) {
  const dom = this;
  let [eventName, targetSelector, listener, capture] = args;
  if (typeof args[1] === 'function') {
    [eventName, listener, capture] = args;
    targetSelector = undefined;
  }
  function proxy(...eventArgs) {
    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, proxy, capture);
  }
  return dom.on(eventName, targetSelector, proxy, capture);
}
function trigger(...args) {
  const events = args[0].split(' ');
  const eventData = args[1];
  for (let i = 0; i < events.length; i += 1) {
    const event = events[i];
    for (let j = 0; j < this.length; j += 1) {
      const el = this[j];
      let evt;
      try {
        evt = new ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createEvent('Event');
        evt.initEvent(event, true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
      el.dispatchEvent(evt);
      el.dom7EventData = [];
      delete el.dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  const events = ['webkitTransitionEnd', 'transitionend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function animationEnd(callback) {
  const events = ['webkitAnimationEnd', 'animationend'];
  const dom = this;
  let i;
  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
// Sizing/Styles
function width() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function height() {
  if (this[0] === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      const styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    const el = this[0];
    const box = el.getBoundingClientRect();
    const body = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollY : el.scrollTop;
    const scrollLeft = el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"] ? ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function hide() {
  for (let i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }
  return this;
}
function show() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.style.display === 'none') {
      el.style.display = '';
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }
  return this;
}
function styles() {
  if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null);
  return {};
}
function css(props, value) {
  let i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) return ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (let prop in props) {
          this[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Dom manipulation
function toArray() {
  const arr = [];
  for (let i = 0; i < this.length; i += 1) {
    arr.push(this[i]);
  }
  return arr;
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function forEach(callback) {
  // Don't bother continuing without a callback
  if (!callback) return this;
  // Iterate over the current collection
  for (let i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], this[i], i) === false) {
      // End the loop early
      return this;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
function filter(callback) {
  const matchedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
  }
  return new Dom7(matchedItems);
}
function map(callback) {
  const modifiedItems = [];
  const dom = this;
  for (let i = 0; i < dom.length; i += 1) {
    modifiedItems.push(callback.call(dom[i], i, dom[i]));
  }
  return new Dom7(modifiedItems);
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (let i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }
  return this;
}
function is(selector) {
  const el = this[0];
  let compareWith;
  let i;
  if (!el || typeof selector === 'undefined') return false;
  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

    compareWith = $(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  } else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"];
  else if (selector === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"]) return el === ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"];

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }
    return false;
  }
  return false;
}
function indexOf(el) {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] === el) return i;
  }
  return -1;
}
function index() {
  let child = this[0];
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') return this;
  const length = this.length;
  let returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) return new Dom7([]);
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append(...args) {
  let newChild;

  for (let k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (let i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (let j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}
 // eslint-disable-next-line
function appendTo(parent) {
  $(parent).append(this);
  return this;
}
function prepend(newChild) {
  let i;
  let j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      const tempDiv = ssr_window__WEBPACK_IMPORTED_MODULE_0__["document"].createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }
  return this;
}
 // eslint-disable-next-line
function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}
function insertBefore(selector) {
  const before = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (let j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}
function insertAfter(selector) {
  const after = $(selector);
  for (let i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (let j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  const nextEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    const el = this[0];
    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  const prevEls = [];
  let el = this[0];
  if (!el) return new Dom7([]);
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return new Dom7(prevEls);
}
function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }
  return $(unique(parents));
}
function parents(selector) {
  const parents = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    let parent = this[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $(unique(parents));
}
function closest(selector) {
  let closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  const foundElements = [];
  for (let i = 0; i < this.length; i += 1) {
    const found = this[i].querySelectorAll(selector);
    for (let j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  const children = []; // eslint-disable-line
  for (let i = 0; i < this.length; i += 1) {
    const childNodes = this[i].childNodes;

    for (let j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  for (let i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }
  return this;
}
function detach() {
  return this.remove();
}
function add(...args) {
  const dom = this;
  let i;
  let j;
  for (i = 0; i < args.length; i += 1) {
    const toAdd = $(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
function empty() {
  for (let i = 0; i < this.length; i += 1) {
    const el = this[i];
    if (el.nodeType === 1) {
      for (let j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }
      el.textContent = '';
    }
  }
  return this;
}

function scrollTo(...args) {
  let [left, top, duration, easing, callback] = args;
  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    [left, top, duration, callback, easing] = args;
  }
  if (typeof easing === 'undefined') easing = 'swing';

  return this.each(function animate() {
    const el = this;
    let currentTop;
    let currentLeft;
    let maxTop;
    let maxLeft;
    let newTop;
    let newLeft;
    let scrollTop; // eslint-disable-line
    let scrollLeft; // eslint-disable-line
    let animateTop = top > 0 || top === 0;
    let animateLeft = left > 0 || left === 0;
    if (typeof easing === 'undefined') {
      easing = 'swing';
    }
    if (animateTop) {
      currentTop = el.scrollTop;
      if (!duration) {
        el.scrollTop = top;
      }
    }
    if (animateLeft) {
      currentLeft = el.scrollLeft;
      if (!duration) {
        el.scrollLeft = left;
      }
    }
    if (!duration) return;
    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }
    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }
    let startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;
    function render(time = new Date().getTime()) {
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = easing === 'linear' ? progress : (0.5 - (Math.cos(progress * Math.PI) / 2));
      let done;
      if (animateTop) scrollTop = currentTop + (easeProgress * (newTop - currentTop));
      if (animateLeft) scrollLeft = currentLeft + (easeProgress * (newLeft - currentLeft));
      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }
      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }
      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }
      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  });
}
// scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
  let [top, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [top, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }
  return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
  let [left, duration, easing, callback] = args;
  if (args.length === 3 && typeof easing === 'function') {
    [left, duration, callback, easing] = args;
  }
  const dom = this;
  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }
  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  const els = this;
  const a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing', // or 'linear'
      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */
    }, initialParams),

    elements: els,
    animating: false,
    que: [],

    easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - (Math.cos(progress * Math.PI) / 2);
      }
      if (typeof easing === 'function') {
        return easing(progress);
      }
      return progress;
    },
    stop() {
      if (a.frameId) {
        cancelAnimationFrame(a.frameId);
      }
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done(complete) {
      a.animating = false;
      a.elements.each((index, el) => {
        const element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);
      if (a.que.length > 0) {
        const que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }
      const elements = [];

      // Define & Cache Initials & Units
      a.elements.each((index, el) => {
        let initialFullValue;
        let initialValue;
        let unit;
        let finalValue;
        let finalFullValue;

        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;

        elements[index] = {
          container: el,
        };
        Object.keys(props).forEach((prop) => {
          initialFullValue = ssr_window__WEBPACK_IMPORTED_MODULE_0__["window"].getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue,
            initialValue,
            unit,
            finalValue,
            finalFullValue,
            currentValue: initialValue,
          };
        });
      });

      let startTime = null;
      let time;
      let elementsDone = 0;
      let propsDone = 0;
      let done;
      let began = false;

      a.animating = true;

      function render() {
        time = new Date().getTime();
        let progress;
        let easeProgress;
        // let el;
        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }
        if (startTime === null) {
          startTime = time;
        }
        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), ((startTime + params.duration) - time < 0 ? 0 : (startTime + params.duration) - time), startTime);
        }

        elements.forEach((element) => {
          const el = element;
          if (done || el.done) return;
          Object.keys(props).forEach((prop) => {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            const { initialValue, finalValue, unit } = el[prop];
            el[prop].currentValue = initialValue + (easeProgress * (finalValue - initialValue));
            const currentValue = el[prop].currentValue;

            if (
              (finalValue > initialValue && currentValue >= finalValue) ||
              (finalValue < initialValue && currentValue <= finalValue)) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;
              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }
              if (elementsDone === elements.length) {
                done = true;
              }
            }
            if (done) {
              a.done(params.complete);
              return;
            }
            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return;
        // Then call
        a.frameId = requestAnimationFrame(render);
      }
      a.frameId = requestAnimationFrame(render);
      return a;
    },
  };

  if (a.elements.length === 0) {
    return els;
  }

  let animateInstance;
  for (let i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }
  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  const els = this;
  for (let i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

const noTrigger = ('resize scroll').split(' ');
function eventShortcut(name, ...args) {
  if (typeof args[0] === 'undefined') {
    for (let i = 0; i < this.length; i += 1) {
      if (noTrigger.indexOf(name) < 0) {
        if (name in this[i]) this[i][name]();
        else {
          $(this[i]).trigger(name);
        }
      }
    }
    return this;
  }
  return this.on(name, ...args);
}

function click(...args) {
  return eventShortcut.bind(this)('click', ...args);
}
function blur(...args) {
  return eventShortcut.bind(this)('blur', ...args);
}
function focus(...args) {
  return eventShortcut.bind(this)('focus', ...args);
}
function focusin(...args) {
  return eventShortcut.bind(this)('focusin', ...args);
}
function focusout(...args) {
  return eventShortcut.bind(this)('focusout', ...args);
}
function keyup(...args) {
  return eventShortcut.bind(this)('keyup', ...args);
}
function keydown(...args) {
  return eventShortcut.bind(this)('keydown', ...args);
}
function keypress(...args) {
  return eventShortcut.bind(this)('keypress', ...args);
}
function submit(...args) {
  return eventShortcut.bind(this)('submit', ...args);
}
function change(...args) {
  return eventShortcut.bind(this)('change', ...args);
}
function mousedown(...args) {
  return eventShortcut.bind(this)('mousedown', ...args);
}
function mousemove(...args) {
  return eventShortcut.bind(this)('mousemove', ...args);
}
function mouseup(...args) {
  return eventShortcut.bind(this)('mouseup', ...args);
}
function mouseenter(...args) {
  return eventShortcut.bind(this)('mouseenter', ...args);
}
function mouseleave(...args) {
  return eventShortcut.bind(this)('mouseleave', ...args);
}
function mouseout(...args) {
  return eventShortcut.bind(this)('mouseout', ...args);
}
function mouseover(...args) {
  return eventShortcut.bind(this)('mouseover', ...args);
}
function touchstart(...args) {
  return eventShortcut.bind(this)('touchstart', ...args);
}
function touchend(...args) {
  return eventShortcut.bind(this)('touchend', ...args);
}
function touchmove(...args) {
  return eventShortcut.bind(this)('touchmove', ...args);
}
function resize(...args) {
  return eventShortcut.bind(this)('resize', ...args);
}
function scroll(...args) {
  return eventShortcut.bind(this)('scroll', ...args);
}




/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_10edf27d814a728d21af ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_10edf27d814a728d21af */ "dll-reference dll_10edf27d814a728d21af"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/ssr-window/dist/ssr-window.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/ssr-window/dist/ssr-window.esm.js ***!
  \********************************************************/
/*! exports provided: window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return doc; });
/**
 * SSR Window 1.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2018, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: July 18, 2018
 */
var doc = (typeof document === 'undefined') ? {
  body: {},
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  activeElement: {
    blur: function blur() {},
    nodeName: '',
  },
  querySelector: function querySelector() {
    return null;
  },
  querySelectorAll: function querySelectorAll() {
    return [];
  },
  getElementById: function getElementById() {
    return null;
  },
  createEvent: function createEvent() {
    return {
      initEvent: function initEvent() {},
    };
  },
  createElement: function createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function setAttribute() {},
      getElementsByTagName: function getElementsByTagName() {
        return [];
      },
    };
  },
  location: { hash: '' },
} : document; // eslint-disable-line

var win = (typeof window === 'undefined') ? {
  document: doc,
  navigator: {
    userAgent: '',
  },
  location: {},
  history: {},
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return '';
      },
    };
  },
  Image: function Image() {},
  Date: function Date() {},
  screen: {},
  setTimeout: function setTimeout() {},
  clearTimeout: function clearTimeout() {},
} : window; // eslint-disable-line




/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.esm.bundle.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.esm.bundle.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7/dist/dom7.modular */ "./node_modules/dom7/dist/dom7.modular.js");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/dist/ssr-window.esm.js");
/**
 * Swiper 4.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 14, 2018
 */




const Methods = {
  addClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  data: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["data"],
  transform: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  offset: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["children"],
  remove: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["remove"],
  add: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["add"],
  styles: dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["styles"],
};

Object.keys(Methods).forEach((methodName) => {
  dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"].fn[methodName] = Methods[methodName];
});

const Utils = {
  deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
  },
  now() {
    return Date.now();
  },
  getTranslate(el, axis = 'x') {
    let matrix;
    let curTransform;
    let transformMatrix;

    const curStyle = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(el, null);

    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m41;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebKitCSSMatrix) curTransform = transformMatrix.m42;
      // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  },
  parseUrlQuery(url) {
    const query = {};
    let urlToParse = url || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.href;
    let i;
    let params;
    let param;
    let length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(paramsPart => paramsPart !== '');
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend(...args) {
    const to = Object(args[0]);
    for (let i = 1; i < args.length; i += 1) {
      const nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        const keysArray = Object.keys(Object(nextSource));
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
};

const Support = (function Support() {
  const testDiv = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
  return {
    touch: (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.touch === true) || (function checkTouch() {
      return !!(('ontouchstart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]) || (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"] instanceof ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].DocumentTouch));
    }()),

    pointerEvents: !!(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.pointerEnabled || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].PointerEvent),
    prefixedPointerEvents: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.msPointerEnabled,

    transition: (function checkTransition() {
      const style = testDiv.style;
      return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
    }()),
    transforms3d: (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
      const style = testDiv.style;
      return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
    }()),

    flexbox: (function checkFlexbox() {
      const style = testDiv.style;
      const styles$$1 = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
      for (let i = 0; i < styles$$1.length; i += 1) {
        if (styles$$1[i] in style) return true;
      }
      return false;
    }()),

    observer: (function checkObserver() {
      return ('MutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"] || 'WebkitMutationObserver' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]);
    }()),

    passiveListener: (function checkPassiveListener() {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get() {
            supportsPassive = true;
          },
        });
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }()),

    gestures: (function checkGestures() {
      return 'ongesturestart' in ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"];
    }()),
  };
}());

class SwiperClass {
  constructor(params = {}) {
    const self = this;
    self.params = params;

    // Events
    self.eventsListeners = {};

    if (self.params && self.params.on) {
      Object.keys(self.params.on).forEach((eventName) => {
        self.on(eventName, self.params.on[eventName]);
      });
    }
  }

  on(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach((event) => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  }

  once(events, handler, priority) {
    const self = this;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      handler.apply(self, args);
      self.off(events, onceHandler);
    }
    return self.on(events, onceHandler, priority);
  }

  off(events, handler) {
    const self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach((event) => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
        self.eventsListeners[event].forEach((eventHandler, index$$1) => {
          if (eventHandler === handler) {
            self.eventsListeners[event].splice(index$$1, 1);
          }
        });
      }
    });
    return self;
  }

  emit(...args) {
    const self = this;
    if (!self.eventsListeners) return self;
    let events;
    let data$$1;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data$$1 = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data$$1 = args[0].data;
      context = args[0].context || self;
    }
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach((event) => {
      if (self.eventsListeners && self.eventsListeners[event]) {
        const handlers = [];
        self.eventsListeners[event].forEach((eventHandler) => {
          handlers.push(eventHandler);
        });
        handlers.forEach((eventHandler) => {
          eventHandler.apply(context, data$$1);
        });
      }
    });
    return self;
  }

  useModulesParams(instanceParams) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      // Extend params
      if (module.params) {
        Utils.extend(instanceParams, module.params);
      }
    });
  }

  useModules(modulesParams = {}) {
    const instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach((moduleName) => {
      const module = instance.modules[moduleName];
      const moduleParams = modulesParams[moduleName] || {};
      // Extend instance methods and props
      if (module.instance) {
        Object.keys(module.instance).forEach((modulePropName) => {
          const moduleProp = module.instance[modulePropName];
          if (typeof moduleProp === 'function') {
            instance[modulePropName] = moduleProp.bind(instance);
          } else {
            instance[modulePropName] = moduleProp;
          }
        });
      }
      // Add event listeners
      if (module.on && instance.on) {
        Object.keys(module.on).forEach((moduleEventName) => {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      }

      // Module create callback
      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }

  static set components(components) {
    const Class = this;
    if (!Class.use) return;
    Class.use(components);
  }

  static installModule(module, ...params) {
    const Class = this;
    if (!Class.prototype.modules) Class.prototype.modules = {};
    const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
    Class.prototype.modules[name] = module;
    // Prototype
    if (module.proto) {
      Object.keys(module.proto).forEach((key) => {
        Class.prototype[key] = module.proto[key];
      });
    }
    // Class
    if (module.static) {
      Object.keys(module.static).forEach((key) => {
        Class[key] = module.static[key];
      });
    }
    // Callback
    if (module.install) {
      module.install.apply(Class, params);
    }
    return Class;
  }

  static use(module, ...params) {
    const Class = this;
    if (Array.isArray(module)) {
      module.forEach(m => Class.installModule(m));
      return Class;
    }
    return Class.installModule(module, ...params);
  }
}

function updateSize () {
  const swiper = this;
  let width;
  let height;
  const $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height,
  });
}

function updateSlides () {
  const swiper = this;
  const params = swiper.params;

  const {
    $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];

  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.snapGrid.length;

  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index$$1 = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) slides.css({ marginLeft: '', marginTop: '' });
  else slides.css({ marginRight: '', marginBottom: '' });

  let slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  let slideSize;
  const slidesPerColumn = params.slidesPerColumn;
  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  const numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      let newSlideOrderIndex;
      let column;
      let row;
      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - (column * slidesPerColumn);
        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
        slide
          .css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - (row * slidesPerRow);
      }
      slide
        .css(
          `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
          (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
        )
        .attr('data-swiper-column', column)
        .attr('data-swiper-row', row);
    }
    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      const slideStyles = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].getComputedStyle(slide[0], null);
      const currentTransform = slide[0].style.transform;
      const currentWebKitTransform = slide[0].style.webkitTransform;
      if (currentTransform) {
        slide[0].style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal()
          ? slide.outerWidth(true)
          : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        if (swiper.isHorizontal()) {
          slideSize = slide[0].getBoundingClientRect().width
            + parseFloat(slideStyles.getPropertyValue('margin-left'))
            + parseFloat(slideStyles.getPropertyValue('margin-right'));
        } else {
          slideSize = slide[0].getBoundingClientRect().height
            + parseFloat(slideStyles.getPropertyValue('margin-top'))
            + parseFloat(slideStyles.getPropertyValue('margin-bottom'));
        }
      }
      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = `${slideSize}px`;
        } else {
          slides[i].style.height = `${slideSize}px`;
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);


    if (params.centeredSlides) {
      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index$$1) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index$$1) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index$$1 += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  let newSlidesGrid;

  if (
    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
  }
  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) slides.css({ marginLeft: `${spaceBetween}px` });
      else slides.css({ marginRight: `${spaceBetween}px` });
    } else slides.css({ marginBottom: `${spaceBetween}px` });
  }

  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach((slideSizeValue) => {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Utils.extend(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid,
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

function updateAutoHeight (speed) {
  const swiper = this;
  const activeSlides = [];
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      const index$$1 = swiper.activeIndex + i;
      if (index$$1 > swiper.slides.length) break;
      activeSlides.push(swiper.slides.eq(index$$1)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

function updateSlidesOffset () {
  const swiper = this;
  const slides = swiper.slides;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

function updateSlidesProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const { slides, rtlTranslate: rtl } = swiper;

  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    const slideProgress = (
      (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
    ) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility) {
      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isVisible = (slideBefore >= 0 && slideBefore < swiper.size)
                || (slideAfter > 0 && slideAfter <= swiper.size)
                || (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
  swiper.visibleSlides = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.visibleSlides);
}

function updateProgress (translate = (this && this.translate) || 0) {
  const swiper = this;
  const params = swiper.params;

  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let { progress, isBeginning, isEnd } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / (translatesDiff);
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress,
    isBeginning,
    isEnd,
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

function updateSlidesClasses () {
  const swiper = this;

  const {
    slides, params, $wrapperEl, activeIndex, realIndex,
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

  let activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
        .addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl
        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
        .addClass(params.slideDuplicatePrevClass);
    }
  }
}

function updateActiveIndex (newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex,
    realIndex,
    previousIndex,
    activeIndex,
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  swiper.emit('slideChange');
}

function updateClickedSlide (e) {
  const swiper = this;
  const params = swiper.params;
  const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(`.${params.slideClass}`)[0];
  let slideFound = false;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) slideFound = true;
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide,
};

function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;

  const {
    params, rtlTranslate: rtl, translate, $wrapperEl,
  } = swiper;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;

  return currentTranslate || 0;
}

function setTranslate (translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl, params, $wrapperEl, progress,
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    else $wrapperEl.transform(`translate(${x}px, ${y}px)`);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate () {
  return (-this.snapGrid[0]);
}

function maxTranslate () {
  return (-this.snapGrid[this.snapGrid.length - 1]);
}

var translate = {
  getTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
};

function setTransition (duration, byController) {
  const swiper = this;

  swiper.$wrapperEl.transition(duration);

  swiper.emit('setTransition', duration, byController);
}

function transitionStart (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, params, previousIndex } = swiper;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }
    swiper.emit('slideChangeTransitionStart');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

function transitionEnd$1 (runCallbacks = true, direction) {
  const swiper = this;
  const { activeIndex, previousIndex } = swiper;
  swiper.animating = false;
  swiper.setTransition(0);

  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';
    else if (activeIndex < previousIndex) dir = 'prev';
    else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }
    swiper.emit('slideChangeTransitionEnd');
    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

var transition$1 = {
  setTransition,
  transitionStart,
  transitionEnd: transitionEnd$1,
};

function slideTo (index$$1 = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let slideIndex = index$$1;
  if (slideIndex < 0) slideIndex = 0;

  const {
    params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl,
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  let snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  const translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = 'next';
  else if (slideIndex < activeIndex) direction = 'prev';
  else direction = 'reset';


  // Update Index
  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }

  if (speed === 0 || !Support.transition) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd$$1(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

function slideToLoop (index$$1 = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index$$1;
  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const { params, animating } = swiper;
  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params, animating, snapGrid, slidesGrid, rtlTranslate,
  } = swiper;

  if (params.loop) {
    if (animating) return false;
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const normalizedSlidesGrid = slidesGrid.map(val => normalize(val));

  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  const prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  let prevIndex;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest (speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let index$$1 = swiper.activeIndex;
  const snapIndex = Math.floor(index$$1 / swiper.params.slidesPerGroup);

  if (snapIndex < swiper.snapGrid.length - 1) {
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];

    if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
      index$$1 = swiper.params.slidesPerGroup;
    }
  }

  return swiper.slideTo(index$$1, speed, runCallbacks, internal);
}

function slideToClickedSlide () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;

  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (
        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
        || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
      ) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
          .eq(0)
          .index();

        Utils.nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl
        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
        .eq(0)
        .index();

      Utils.nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide,
};

function loopCreate () {
  const swiper = this;
  const { params, $wrapperEl } = swiper;
  // Remove duplicated slides
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

  let slides = $wrapperEl.children(`.${params.slideClass}`);

  if (params.loopFillGroupWithBlank) {
    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (let i = 0; i < blankSlidesNum; i += 1) {
        const blankNode = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(`.${params.slideClass}`);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  const prependSlides = [];
  const appendSlides = [];
  slides.each((index$$1, el) => {
    const slide = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    if (index$$1 < swiper.loopedSlides) appendSlides.push(el);
    if (index$$1 < slides.length && index$$1 >= slides.length - swiper.loopedSlides) prependSlides.push(el);
    slide.attr('data-swiper-slide-index', index$$1);
  });
  for (let i = 0; i < appendSlides.length; i += 1) {
    $wrapperEl.append(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
    $wrapperEl.prepend(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

function loopFix () {
  const swiper = this;
  const {
    params, activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
  } = swiper;
  let newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;

  const snapTranslate = -snapGrid[activeIndex];
  const diff = snapTranslate - swiper.getTranslate();


  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
}

function loopDestroy () {
  const swiper = this;
  const { $wrapperEl, params, slides } = swiper;
  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
  slides.removeAttr('data-swiper-slide-index');
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy,
};

function setGrabCursor (moving) {
  const swiper = this;
  if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  const el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

function unsetGrabCursor () {
  const swiper = this;
  if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) return;
  swiper.el.style.cursor = '';
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor,
};

function appendSlide (slides) {
  const swiper = this;
  const { $wrapperEl, params } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
}

function prependSlide (slides) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide (index$$1, slides) {
  const swiper = this;
  const { $wrapperEl, params, activeIndex } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  const baseLength = swiper.slides.length;
  if (index$$1 <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index$$1 >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + 1 : activeIndexBuffer;

  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index$$1; i -= 1) {
    const currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index$$1 ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (let i = 0; i < slidesBuffer.length; i += 1) {
    $wrapperEl.append(slidesBuffer[i]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide (slidesIndexes) {
  const swiper = this;
  const { params, $wrapperEl, activeIndex } = swiper;

  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides () {
  const swiper = this;

  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

var manipulation = {
  appendSlide,
  prependSlide,
  addSlide,
  removeSlide,
  removeAllSlides,
};

const Device = (function Device() {
  const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent;

  const device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap,
    phonegap: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].cordova || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].phonegap,
  };

  const windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    const osVersionArr = device.osVersion.split('.');
    const metaViewport = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector('meta[name="viewport"]');
    device.minimalUi = !device.webView
      && (ipod || iphone)
      && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7)
      && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Pixel Ratio
  device.pixelRatio = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].devicePixelRatio || 1;

  // Export object
  return device;
}());

function onTouchStart (event) {
  const swiper = this;
  const data$$1 = swiper.touchEventsData;
  const { params, touches } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  data$$1.isTouchEvent = e.type === 'touchstart';
  if (!data$$1.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data$$1.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data$$1.isTouched && data$$1.isMoved) return;
  if (params.noSwiping && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e).closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (
    edgeSwipeDetection
    && ((startX <= edgeSwipeThreshold)
    || (startX >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].screen.width - edgeSwipeThreshold))
  ) {
    return;
  }

  Utils.extend(data$$1, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data$$1.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data$$1.allowThresholdMove = false;
  if (e.type !== 'touchstart') {
    let preventDefault = true;
    if (Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data$$1.formElements)) preventDefault = false;
    if (
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement
      && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement).is(data$$1.formElements)
      && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement !== e.target
    ) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.blur();
    }
    if (preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
}

function onTouchMove (event) {
  const swiper = this;
  const data$$1 = swiper.touchEventsData;
  const { params, touches, rtlTranslate: rtl } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data$$1.isTouched) {
    if (data$$1.startMoving && data$$1.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  if (data$$1.isTouchEvent && e.type === 'mousemove') return;
  const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data$$1.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
      });
      data$$1.touchStartTime = Utils.now();
    }
    return;
  }
  if (data$$1.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
        || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data$$1.isTouched = false;
        data$$1.isMoved = false;
        return;
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
      || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return;
    }
  }
  if (data$$1.isTouchEvent && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement) {
    if (e.target === ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is(data$$1.formElements)) {
      data$$1.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;

  touches.currentX = pageX;
  touches.currentY = pageY;

  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;

  if (typeof data$$1.isScrolling === 'undefined') {
    let touchAngle;
    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
      data$$1.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data$$1.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
      }
    }
  }
  if (data$$1.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data$$1.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data$$1.startMoving = true;
    }
  }
  if (data$$1.isScrolling) {
    data$$1.isTouched = false;
    return;
  }
  if (!data$$1.startMoving) {
    return;
  }
  swiper.allowClick = false;
  e.preventDefault();
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data$$1.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data$$1.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data$$1.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data$$1.isMoved = true;

  let diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) diff = -diff;

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data$$1.currentTranslate = diff + data$$1.startTranslate;

  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if ((diff > 0 && data$$1.currentTranslate > swiper.minTranslate())) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data$$1.startTranslate + diff) ** resistanceRatio);
  } else if (diff < 0 && data$$1.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data$$1.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data$$1.startTranslate - diff) ** resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data$$1.currentTranslate < data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data$$1.currentTranslate > data$$1.startTranslate) {
    data$$1.currentTranslate = data$$1.startTranslate;
  }


  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data$$1.allowThresholdMove) {
      if (!data$$1.allowThresholdMove) {
        data$$1.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data$$1.currentTranslate = data$$1.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data$$1.currentTranslate = data$$1.startTranslate;
      return;
    }
  }

  if (!params.followFinger) return;

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data$$1.velocities.length === 0) {
      data$$1.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data$$1.touchStartTime,
      });
    }
    data$$1.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now(),
    });
  }
  // Update progress
  swiper.updateProgress(data$$1.currentTranslate);
  // Update translate
  swiper.setTranslate(data$$1.currentTranslate);
}

function onTouchEnd (event) {
  const swiper = this;
  const data$$1 = swiper.touchEventsData;

  const {
    params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
  } = swiper;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data$$1.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data$$1.allowTouchCallbacks = false;
  if (!data$$1.isTouched) {
    if (data$$1.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data$$1.isMoved && data$$1.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = Utils.now();
  const timeDiff = touchEndTime - data$$1.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);
    if (timeDiff < 300 && (touchEndTime - data$$1.lastClickTime) > 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      data$$1.clickTimeout = Utils.nextTick(() => {
        if (!swiper || swiper.destroyed) return;
        swiper.emit('click', e);
      }, 300);
    }
    if (timeDiff < 300 && (touchEndTime - data$$1.lastClickTime) < 300) {
      if (data$$1.clickTimeout) clearTimeout(data$$1.clickTimeout);
      swiper.emit('doubleTap', e);
    }
  }

  data$$1.lastClickTime = Utils.now();
  Utils.nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data$$1.isTouched || !data$$1.isMoved || !swiper.swipeDirection || touches.diff === 0 || data$$1.currentTranslate === data$$1.startTranslate) {
    data$$1.isTouched = false;
    data$$1.isMoved = false;
    data$$1.startMoving = false;
    return;
  }
  data$$1.isTouched = false;
  data$$1.isMoved = false;
  data$$1.startMoving = false;

  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data$$1.currentTranslate;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data$$1.velocities.length > 1) {
        const lastMoveEvent = data$$1.velocities.pop();
        const velocityEvent = data$$1.velocities.pop();

        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data$$1.velocities.length = 0;
      let momentumDuration = 1000 * params.freeModeMomentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;

      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;

      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data$$1.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        swiper.once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(() => {
          if (!swiper || swiper.destroyed || !data$$1.allowMomentumBounce) return;
          swiper.emit('momentumBounce');

          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(() => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + params.slidesPerGroup);
      else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }
    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize () {
  const swiper = this;

  const { params, el } = swiper;

  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    const newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick (e) {
  const swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function attachEvents() {
  const swiper = this;
  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
}

function detachEvents() {
  const swiper = this;

  const {
    params, touchEvents, el, wrapperEl,
  } = swiper;

  const target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  const capture = !!params.nested;

  // Touch Events
  {
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.onTouchMove, capture);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
}

var events = {
  attachEvents,
  detachEvents,
};

function setBreakpoint () {
  const swiper = this;
  const {
    activeIndex, initialized, loopedSlides = 0, params,
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;
  // Set breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints);
  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    const breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
    const needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);

    Utils.extend(swiper.params, breakPointsParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakPointsParams);
  }
}

function getBreakpoint (breakpoints) {
  const swiper = this;
  // Get breakpoint for window width
  if (!breakpoints) return undefined;
  let breakpoint = false;
  const points = [];
  Object.keys(breakpoints).forEach((point) => {
    points.push(point);
  });
  points.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  for (let i = 0; i < points.length; i += 1) {
    const point = points[i];
    if (swiper.params.breakpointsInverse) {
      if (point <= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth) {
        breakpoint = point;
      }
    } else if (point >= ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = { setBreakpoint, getBreakpoint };

const Browser = (function Browser() {
  function isSafari() {
    const ua = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.toLowerCase();
    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
  }
  return {
    isIE: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Trident/g) || !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/MSIE/g),
    isEdge: !!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent),
  };
}());

function addClasses () {
  const swiper = this;
  const {
    classNames, params, rtl, $el,
  } = swiper;
  const suffixes = [];

  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  // WP8 Touch Events Fix
  if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
    suffixes.push(`wp8-${params.direction}`);
  }

  suffixes.forEach((suffix) => {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
}

function removeClasses () {
  const swiper = this;
  const { $el, classNames } = swiper;

  $el.removeClass(classNames.join(' '));
}

var classes = { addClasses, removeClasses };

function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
  let image;
  function onReady() {
    if (callback) callback();
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

function preloadImages () {
  const swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }
  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
    const imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(
      imageEl,
      imageEl.currentSrc || imageEl.getAttribute('src'),
      imageEl.srcset || imageEl.getAttribute('srcset'),
      imageEl.sizes || imageEl.getAttribute('sizes'),
      true,
      onReady
    );
  }
}

var images = {
  loadImage,
  preloadImages,
};

function checkOverflow() {
  const swiper = this;
  const wasLocked = swiper.isLocked;

  swiper.isLocked = swiper.snapGrid.length === 1;
  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked;

  // events
  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    swiper.navigation.update();
  }
}

var checkOverflow$1 = { checkOverflow };

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  //
  preventInteractionOnTransition: false,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsInverse: false,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,

  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchStartPreventDefault: true,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true,
};

const prototypes = {
  update,
  translate,
  transition: transition$1,
  slide,
  loop,
  grabCursor,
  manipulation,
  events,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes,
  images,
};

const extendedDefaults = {};

class Swiper extends SwiperClass {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};

    params = Utils.extend({}, params);
    if (el && !params.el) params.el = el;

    super(params);

    Object.keys(prototypes).forEach((prototypeGroup) => {
      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    const swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach((moduleName) => {
      const module = swiper.modules[moduleName];
      if (module.params) {
        const moduleParamName = Object.keys(module.params)[0];
        const moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (
          typeof params[moduleParamName] === 'object'
          && !('enabled' in params[moduleParamName])
        ) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
      }
    });

    // Extend defaults with modules params
    const swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Save Dom lib
    swiper.$ = dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];

    // Find el
    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      const swipers = [];
      $el.each((index$$1, containerEl) => {
        const newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    const $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);

    // Extend Swiper
    Utils.extend(swiper, {
      $el,
      el,
      $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: (function touchEvents() {
        const touch = ['touchstart', 'touchmove', 'touchend'];
        let desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (Support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (Support.prefixedPointerEvents) {
          desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
        }
        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2],
        };
        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }()),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0,

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }

  slidesPerViewDynamic() {
    const swiper = this;
    const {
      params, slides, slidesGrid, size: swiperSize, activeIndex,
    } = swiper;
    let spv = 1;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex].swiperSlideSize;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  }

  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const { snapGrid, params } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }

  init() {
    const swiper = this;
    if (swiper.initialized) return;

    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  }

  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params, $el, $wrapperEl, slides,
    } = swiper;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides
          .removeClass([
            params.slideVisibleClass,
            params.slideActiveClass,
            params.slideNextClass,
            params.slidePrevClass,
          ].join(' '))
          .removeAttr('style')
          .removeAttr('data-swiper-slide-index')
          .removeAttr('data-swiper-column')
          .removeAttr('data-swiper-row');
      }
    }

    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach((eventName) => {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;

    return null;
  }

  static extendDefaults(newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  }

  static get extendedDefaults() {
    return extendedDefaults;
  }

  static get defaults() {
    return defaults;
  }

  static get Class() {
    return SwiperClass;
  }

  static get $() {
    return dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"];
  }
}

var Device$1 = {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
};

var Support$1 = {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
  },
};

var Browser$1 = {
  name: 'browser',
  proto: {
    browser: Browser,
  },
  static: {
    browser: Browser,
  },
};

var Resize = {
  name: 'resize',
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      // Emit resize
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy() {
      const swiper = this;
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('resize', swiper.resize.resizeHandler);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
  },
};

const Observer = {
  func: ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].MutationObserver || ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].WebkitMutationObserver,
  attach(target, options = {}) {
    const swiper = this;

    const ObserverFunc = Observer.func;
    const observer = new ObserverFunc((mutations) => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame) {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].requestAnimationFrame(observerUpdate);
      } else {
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(observerUpdate, 0);
      }
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
    });

    swiper.observer.observers.push(observer);
  },
  init() {
    const swiper = this;
    if (!Support.observer || !swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = swiper.$el.parents();
      for (let i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: false });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy() {
    const swiper = this;
    swiper.observer.observers.forEach((observer) => {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  },
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: [],
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.observer.init();
    },
    destroy() {
      const swiper = this;
      swiper.observer.destroy();
    },
  },
};

const Virtual = {
  update(force) {
    const swiper = this;
    const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
    const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      renderSlide,
      offset: previousOffset,
    } = swiper.virtual;
    swiper.updateActiveIndex();
    const activeIndex = swiper.activeIndex || 0;

    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';
    else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
      slidesBefore = slidesPerGroup + addSlidesAfter;
    }
    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    const offset$$1 = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from,
      to,
      offset: offset$$1,
      slidesGrid: swiper.slidesGrid,
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset$$1 !== previousOffset) {
        swiper.slides.css(offsetProp, `${offset$$1}px`);
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset$$1,
        from,
        to,
        slides: (function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()),
      });
      onRendered();
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      if (i >= from && i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i);
        } else {
          if (i > previousTo) appendIndexes.push(i);
          if (i < previousFrom) prependIndexes.push(i);
        }
      }
    }
    appendIndexes.forEach((index$$1) => {
      swiper.$wrapperEl.append(renderSlide(slides[index$$1], index$$1));
    });
    prependIndexes.sort((a, b) => a < b).forEach((index$$1) => {
      swiper.$wrapperEl.prepend(renderSlide(slides[index$$1], index$$1));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset$$1}px`);
    onRendered();
  },
  renderSlide(slide, index$$1) {
    const swiper = this;
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index$$1]) {
      return swiper.virtual.cache[index$$1];
    }
    const $slideEl = params.renderSlide
      ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.renderSlide.call(swiper, slide, index$$1))
      : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index$$1}">${slide}</div>`);
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index$$1);
    if (params.cache) swiper.virtual.cache[index$$1] = $slideEl;
    return $slideEl;
  },
  appendSlide(slide) {
    const swiper = this;
    swiper.virtual.slides.push(slide);
    swiper.virtual.update(true);
  },
  prependSlide(slide) {
    const swiper = this;
    swiper.virtual.slides.unshift(slide);
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach((cachedIndex) => {
        newCache[cachedIndex + 1] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideNext(0);
  },
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {},
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
      const overwriteParams = {
        watchSlidesProgress: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      swiper.virtual.update();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    },
  },
};

const Keyboard = {
  handle(event) {
    const swiper = this;
    const { rtlTranslate: rtl } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
      return false;
    }
    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName && (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'input' || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const windowWidth = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
      const windowHeight = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].innerHeight;
      const swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      const swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
      ];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (
          point[0] >= 0 && point[0] <= windowWidth
          && point[1] >= 0 && point[1] <= windowHeight
        ) {
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if ((kc === 39 && !rtl) || (kc === 37 && rtl)) swiper.slideNext();
      if ((kc === 37 && !rtl) || (kc === 39 && rtl)) swiper.slidePrev();
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
      }
      if (kc === 40) swiper.slideNext();
      if (kc === 38) swiper.slidePrev();
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable() {
    const swiper = this;
    if (swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable() {
    const swiper = this;
    if (!swiper.keyboard.enabled) return;
    Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"]).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  },
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    },
  },
};

function isEventSupported() {
  const eventName = 'onwheel';
  let isSupported = eventName in ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"];

  if (!isSupported) {
    const element = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    && ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('', '') !== true
  ) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
const Mousewheel = {
  lastScrollTime: Utils.now(),
  event: (function getEvent() {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }()),
  normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;

    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) { // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else { // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = (pX < 1) ? -1 : 1;
    }
    if (pY && !sY) {
      sY = (pY < 1) ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  },
  handleMouseEnter() {
    const swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave() {
    const swiper = this;
    swiper.mouseEntered = false;
  },
  handle(event) {
    let e = event;
    const swiper = this;
    const params = swiper.params.mousewheel;

    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;

    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;

    const data$$1 = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY)) delta = data$$1.pixelX * rtlFactor;
        else return true;
      } else if (Math.abs(data$$1.pixelY) > Math.abs(data$$1.pixelX)) delta = data$$1.pixelY;
      else return true;
    } else {
      delta = Math.abs(data$$1.pixelX) > Math.abs(data$$1.pixelY) ? -data$$1.pixelX * rtlFactor : -data$$1.pixelY;
    }

    if (delta === 0) return true;

    if (params.invert) delta = -delta;

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) return true;
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) return true;
      }
      swiper.mousewheel.lastScrollTime = (new ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].Date()).getTime();
    } else {
      // Freemode or scrollContainer:
      if (swiper.params.loop) {
        swiper.loopFix();
      }
      let position = swiper.getTranslate() + (delta * params.sensitivity);
      const wasBeginning = swiper.isBeginning;
      const wasEnd = swiper.isEnd;

      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(() => {
          swiper.slideToClosest();
        }, 300);
      }
      // Emit event
      swiper.emit('scroll', e);

      // Stop autoplay
      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
      // Return page scroll on edge positions
      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
    }

    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    return false;
  },
  enable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable() {
    const swiper = this;
    if (!Mousewheel.event) return false;
    if (!swiper.mousewheel.enabled) return false;
    let target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.params.mousewheel.eventsTarged);
    }
    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  },
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
        lastScrollTime: Utils.now(),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy() {
      const swiper = this;
      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    },
  },
};

const Navigation = {
  update() {
    // Update Navigation Buttons
    const swiper = this;
    const params = swiper.params.navigation;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;

    let $nextEl;
    let $prevEl;
    if (params.nextEl) {
      $nextEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.nextEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.nextEl === 'string'
        && $nextEl.length > 1
        && swiper.$el.find(params.nextEl).length === 1
      ) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.prevEl);
      if (
        swiper.params.uniqueNavElements
        && typeof params.prevEl === 'string'
        && $prevEl.length > 1
        && swiper.$el.find(params.prevEl).length === 1
      ) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', (e) => {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      });
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', (e) => {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      });
    }

    Utils.extend(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0],
    });
  },
  destroy() {
    const swiper = this;
    const { $nextEl, $prevEl } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click');
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click');
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  },
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    fromEdge() {
      const swiper = this;
      swiper.navigation.update();
    },
    destroy() {
      const swiper = this;
      swiper.navigation.destroy();
    },
    click(e) {
      const swiper = this;
      const { $nextEl, $prevEl } = swiper.navigation;
      if (
        swiper.params.navigation.hideOnClick
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($prevEl)
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).is($nextEl)
      ) {
        if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    },
  },
};

const Pagination = {
  update() {
    // Render || Update Pagination bullets/items
    const swiper = this;
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    // Current/Total
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
        current -= (slidesLength - (swiper.loopedSlides * 2));
      }
      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
          if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }
        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
      if ($el.length > 1) {
        bullets.each((index$$1, bullet) => {
          const $bullet = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              $bullet
                .prev()
                .addClass(`${params.bulletActiveClass}-prev`)
                .prev()
                .addClass(`${params.bulletActiveClass}-prev-prev`);
            }
            if (bulletIndex === lastIndex) {
              $bullet
                .next()
                .addClass(`${params.bulletActiveClass}-next`)
                .next()
                .addClass(`${params.bulletActiveClass}-next-next`);
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          $firstDisplayedBullet
            .prev()
            .addClass(`${params.bulletActiveClass}-prev`)
            .prev()
            .addClass(`${params.bulletActiveClass}-prev-prev`);
          $lastDisplayedBullet
            .next()
            .addClass(`${params.bulletActiveClass}-next`)
            .next()
            .addClass(`${params.bulletActiveClass}-next-next`);
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
        const offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
      }
    }
    if (params.type === 'fraction') {
      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
    }
    if (params.type === 'progressbar') {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render() {
    // Render Container
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    const $el = swiper.pagination.$el;
    let paginationHTML = '';
    if (params.type === 'bullets') {
      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>`
        + ' / '
        + `<span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el) return;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if ($el.length === 0) return;

    if (
      swiper.params.uniqueNavElements
      && typeof params.el === 'string'
      && $el.length > 1
      && swiper.$el.find(params.el).length === 1
    ) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      swiper.pagination.dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
        e.preventDefault();
        let index$$1 = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index$$1 += swiper.loopedSlides;
        swiper.slideTo(index$$1);
      });
    }

    Utils.extend(swiper.pagination, {
      $el,
      el: $el[0],
    });
  },
  destroy() {
    const swiper = this;
    const params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    const $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off('click', `.${params.bulletClass}`);
    }
  },
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable', // NEW
      lockClass: 'swiper-pagination-lock',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
        dynamicBulletIndex: 0,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange() {
      const swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange() {
      const swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy() {
      const swiper = this;
      swiper.pagination.destroy();
    },
    click(e) {
      const swiper = this;
      if (
        swiper.params.pagination.el
        && swiper.params.pagination.hideOnClick
        && swiper.pagination.$el.length > 0
        && !Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).hasClass(swiper.params.pagination.bulletClass)
      ) {
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    },
  },
};

const Scrollbar = {
  setTranslate() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const { scrollbar, rtlTranslate: rtl, progress } = swiper;
    const {
      dragSize, trackSize, $dragEl, $el,
    } = scrollbar;
    const params = swiper.params.scrollbar;

    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
      } else {
        $dragEl.transform(`translateX(${newPos}px)`);
      }
      $dragEl[0].style.width = `${newSize}px`;
    } else {
      if (Support.transforms3d) {
        $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
      } else {
        $dragEl.transform(`translateY(${newPos}px)`);
      }
      $dragEl[0].style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(() => {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition(duration) {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize() {
    const swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

    const { scrollbar } = swiper;
    const { $dragEl, $el } = scrollbar;

    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    const divider = swiper.size / swiper.virtualSize;
    const moveDivider = divider * (trackSize / swiper.size);
    let dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = `${dragSize}px`;
    } else {
      $dragEl[0].style.height = `${dragSize}px`;
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbarHide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize,
      divider,
      moveDivider,
      dragSize,
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  setDragPosition(e) {
    const swiper = this;
    const { scrollbar, rtlTranslate: rtl } = swiper;
    const { $el, dragSize, trackSize } = scrollbar;

    let pointerPosition;
    if (swiper.isHorizontal()) {
      pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
    } else {
      pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
    }
    let positionRatio;
    positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart(e) {
    const swiper = this;
    const params = swiper.params.scrollbar;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;
    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove(e) {
    const swiper = this;
    const { scrollbar, $wrapperEl } = swiper;
    const { $el, $dragEl } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd(e) {
    const swiper = this;

    const params = swiper.params.scrollbar;
    const { scrollbar } = swiper;
    const { $el } = scrollbar;

    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEvents, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      if (Support.touch) {
        target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
      }
    }
  },
  disableDraggable() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const {
      scrollbar, touchEvents, touchEventsDesktop, params,
    } = swiper;
    const $el = scrollbar.$el;
    const target = $el[0];
    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
    if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      if (Support.touch) {
        target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
        ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
      }
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.scrollbar.el) return;
    const { scrollbar, $el: $swiperEl } = swiper;
    const params = swiper.params.scrollbar;

    let $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
    if ($dragEl.length === 0) {
      $dragEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
      $el.append($dragEl);
    }

    Utils.extend(scrollbar, {
      $el,
      el: $el[0],
      $dragEl,
      dragEl: $dragEl[0],
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy() {
    const swiper = this;
    swiper.scrollbar.disableDraggable();
  },
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null,
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate() {
      const swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate() {
      const swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy() {
      const swiper = this;
      swiper.scrollbar.destroy();
    },
  },
};

const Parallax = {
  setTransform(el, progress) {
    const swiper = this;
    const { rtl } = swiper;

    const $el = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(el);
    const rtlFactor = rtl ? -1 : 1;

    const p = $el.attr('data-swiper-parallax') || '0';
    let x = $el.attr('data-swiper-parallax-x');
    let y = $el.attr('data-swiper-parallax-y');
    const scale = $el.attr('data-swiper-parallax-scale');
    const opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if ((x).indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if ((y).indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(`translate3d(${x}, ${y}, 0px)`);
    } else {
      const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
    }
  },
  setTranslate() {
    const swiper = this;
    const {
      $el, slides, progress, snapGrid,
    } = swiper;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
      .each((index$$1, el) => {
        swiper.parallax.setTransform(el, progress);
      });
    slides.each((slideIndex, slideEl) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each((index$$1, el) => {
          swiper.parallax.setTransform(el, slideProgress);
        });
    });
  },
  setTransition(duration = this.params.speed) {
    const swiper = this;
    const { $el } = swiper;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
      .each((index$$1, parallaxEl) => {
        const $parallaxEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(parallaxEl);
        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
  },
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init() {
      const swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTranslate() {
      const swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (!swiper.params.parallax) return;
      swiper.parallax.setTransition(duration);
    },
  },
};

const Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    const x1 = e.targetTouches[0].pageX;
    const y1 = e.targetTouches[0].pageY;
    const x2 = e.targetTouches[1].pageX;
    const y2 = e.targetTouches[1].pageY;
    const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return distance;
  },
  // Events
  onGestureStart(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).closest('.swiper-slide');
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (Support.gestures) {
      swiper.zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
    }
    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  onGestureEnd(e) {
    const swiper = this;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (Device.android) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove(e) {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (
        swiper.isHorizontal()
        && (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
          || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
      ) {
        image.isTouched = false;
        return;
      } if (
        !swiper.isHorizontal()
        && (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
          || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
      ) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
    }
    if (image.currentX > image.maxX) {
      image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
    }
    if (image.currentY > image.maxY) {
      image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTouchEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture, image, velocity } = zoom;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
  },
  onTransitionEnd() {
    const swiper = this;
    const zoom = swiper.zoom;
    const { gesture } = zoom;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;

      zoom.scale = 1;
      zoom.currentScale = 1;
    }
  },
  // Toggle Zoom
  toggle(e) {
    const swiper = this;
    const zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in(e) {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture, image } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = (offsetX + (slideWidth / 2)) - touchX;
      diffY = (offsetY + (slideHeight / 2)) - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
  },
  out() {
    const swiper = this;

    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    const { gesture } = zoom;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
  disable() {
    const swiper = this;
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;

    swiper.zoom.enabled = false;

    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove);
  },
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
    },
  },
  create() {
    const swiper = this;
    const zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3,
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
      },
    };
    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom,
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy() {
      const swiper = this;
      swiper.zoom.disable();
    },
    touchStart(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd(e) {
      const swiper = this;
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap(e) {
      const swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
  },
};

const Lazy = {
  loadInSlide(index$$1, loadInDuplicate = true) {
    const swiper = this;
    const params = swiper.params.lazy;
    if (typeof index$$1 === 'undefined') return;
    if (swiper.slides.length === 0) return;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    const $slideEl = isVirtual
      ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index$$1}"]`)
      : swiper.slides.eq(index$$1);

    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) return;

    $images.each((imageIndex, imageEl) => {
      const $imageEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(imageEl);
      $imageEl.addClass(params.loadingClass);

      const background = $imageEl.attr('data-background');
      const src = $imageEl.attr('data-src');
      const srcset = $imageEl.attr('data-srcset');
      const sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
        if (background) {
          $imageEl.css('background-image', `url("${background}")`);
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(`.${params.preloaderClass}`).remove();
        if (swiper.params.loop && loadInDuplicate) {
          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load() {
    const swiper = this;
    const {
      $wrapperEl, params: swiperParams, slides, activeIndex,
    } = swiper;
    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    const params = swiperParams.lazy;

    let slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index$$1) {
      if (isVirtual) {
        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index$$1}"]`).length) {
          return true;
        }
      } else if (slides[index$$1]) return true;
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index');
      }
      return Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
        const index$$1 = isVirtual ? Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).attr('data-swiper-slide-index') : Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(slideEl).index();
        swiper.lazy.loadInSlide(index$$1);
      });
    } else if (slidesPerView > 1) {
      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
        const amount = params.loadPrevNextAmount;
        const spv = slidesPerView;
        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
        // Prev Slides
        for (let i = minIndex; i < activeIndex; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll() {
      const swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart() {
      const swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
  },
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

const Controller = {
  LinearSpline: function LinearSpline(x, y) {
    const binarySearch = (function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }());
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction(c) {
    const swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop
        ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
        : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate(setTranslate, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition(duration, byController) {
    const swiper = this;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          Utils.nextTick(() => {
            c.updateAutoHeight();
          });
        }
        c.$wrapperEl.transitionEnd(() => {
          if (!controlled) return;
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  },
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide', // or 'container'
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper),
      },
    });
  },
  on: {
    update() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate(translate, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition(duration, byController) {
      const swiper = this;
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    },
  },
};

const a11y = {
  makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey(e) {
    const swiper = this;
    const params = swiper.params.a11y;
    if (e.keyCode !== 13) return;
    const $targetEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
      $targetEl[0].click();
    }
  },
  notify(message) {
    const swiper = this;
    const notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation() {
    const swiper = this;

    if (swiper.params.loop) return;
    const { $nextEl, $prevEl } = swiper.navigation;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination() {
    const swiper = this;
    const params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
        const $bulletEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init() {
    const swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    const params = swiper.params.a11y;
    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

    let $nextEl;
    let $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
    }
  },
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
      },
    });
    Object.keys(a11y).forEach((methodName) => {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy() {
      const swiper = this;
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    },
  },
};

const History = {
  init() {
    const swiper = this;
    if (!swiper.params.history) return;
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history || !ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    const history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy() {
    const swiper = this;
    if (!swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState() {
    const swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues() {
    const pathArray = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return { key, value };
  },
  setHistory(key, index$$1) {
    const swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    const slide = swiper.slides.eq(index$$1);
    let value = History.slugify(slide.attr('data-history'));
    if (!ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].location.pathname.includes(key)) {
      value = `${key}/${value}`;
    }
    const currentState = ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState({ value }, null, value);
    } else {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.pushState({ value }, null, value);
    }
  },
  slugify(text$$1) {
    return text$$1.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  scrollToSlide(speed, value, runCallbacks) {
    const swiper = this;
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index$$1 = slide.index();
          swiper.slideTo(index$$1, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  },
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
  },
};

const HashNavigation = {
  onHashCange() {
    const swiper = this;
    const newHash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash() {
    const swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
    if (swiper.params.hashNavigation.replaceState && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history && ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
    } else {
      const slide = swiper.slides.eq(swiper.activeIndex);
      const hash = slide.attr('data-hash') || slide.attr('data-history');
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash = hash || '';
    }
  },
  init() {
    const swiper = this;
    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
    swiper.hashNavigation.initialized = true;
    const hash = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides.eq(i);
        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          const index$$1 = slide.index();
          swiper.slideTo(index$$1, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy() {
    const swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"]).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper),
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd() {
      const swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
  },
};

/* eslint no-underscore-dangle: "off" */

const Autoplay = {
  run() {
    const swiper = this;
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    swiper.autoplay.timeout = Utils.nextTick(() => {
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start() {
    const swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop() {
    const swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause(speed) {
    const swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
        onTransitionEnd(e) {
          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
          swiper.autoplay.paused = false;
          if (!swiper.autoplay.running) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.run();
          }
        },
      },
    });
  },
  on: {
    init() {
      const swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart(speed, internal) {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove() {
      const swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy() {
      const swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    },
  },
};

const Fade = {
  setTranslate() {
    const swiper = this;
    const { slides } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = swiper.slides.eq(i);
      const offset$$1 = $slideEl[0].swiperSlideOffset;
      let tx = -offset$$1;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade
        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, $wrapperEl } = swiper;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      slides.transitionEnd(() => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    },
  },
};

const Cube = {
  setTranslate() {
    const swiper = this;
    const {
      $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: `${swiperWidth}px` });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + (round * 4 * swiperSize);
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = (3 * swiperSize) + (swiperSize * 4 * round);
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = (slideIndex * 90) + (progress * 90);
        if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
      }
      $slideEl.transform(transform$$1);
      if (params.slideShadows) {
        // Set shadows
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
      'transform-origin': `50% 50% -${swiperSize / 2}px`,
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
        const multiplier = 1.5 - (
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
          + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        );
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset$$1 = params.shadowOffset;
        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
      }
    }
    const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
    $wrapperEl
      .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
  },
  setTransition(duration) {
    const swiper = this;
    const { $el, slides } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  },
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    },
  },
};

const Flip = {
  setTranslate() {
    const swiper = this;
    const { slides, rtlTranslate: rtl } = swiper;
    for (let i = 0; i < slides.length; i += 1) {
      const $slideEl = slides.eq(i);
      let progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      const offset$$1 = $slideEl[0].swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = -offset$$1;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
      $slideEl
        .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    }
  },
  setTransition(duration) {
    const swiper = this;
    const { slides, activeIndex, $wrapperEl } = swiper;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (let i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    },
  },
};

const Coverflow = {
  setTranslate() {
    const swiper = this;
    const {
      width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform$$1 = swiper.translate;
    const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const $slideEl = slides.eq(i);
      const slideSize = slidesSizesGrid[i];
      const slideOffset = $slideEl[0].swiperSlideOffset;
      const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);

      let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
      let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;

      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
      }
    }

    // Set correct perspective for IE10
    if (Support.pointerEvents || Support.prefixedPointerEvents) {
      const ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = `${center}px 50%`;
    }
  },
  setTransition(duration) {
    const swiper = this;
    swiper.slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
  },
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition(duration) {
      const swiper = this;
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    },
  },
};

const Thumbs = {
  init() {
    const swiper = this;
    const { thumbs: thumbsParams } = swiper.params;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Utils.extend(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
      Utils.extend(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      });
    } else if (Utils.isObject(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false,
      }));
      swiper.thumbs.swiperCreated = true;
    }
    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
  },
  onThumbClick() {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(dom7_dist_dom7_modular__WEBPACK_IMPORTED_MODULE_0__["$"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      let currentIndex = swiper.activeIndex;
      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix();
        // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }
      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
      else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
      else slideToIndex = prevIndex;
    }
    swiper.slideTo(slideToIndex);
  },
  update(initial) {
    const swiper = this;
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;

    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
      ? thumbsSwiper.slidesPerViewDynamic()
      : thumbsSwiper.params.slidesPerView;

    if (swiper.realIndex !== thumbsSwiper.realIndex) {
      let currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix();
          // eslint-disable-next-line
          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        }
        // Find actual thumbs index to slide to
        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
        else newThumbsIndex = prevThumbsIndex;
      } else {
        newThumbsIndex = swiper.realIndex;
      }

      if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    thumbsSwiper.slides.removeClass(thumbActiveClass);
    if (thumbsSwiper.params.loop) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
      }
    }
  },
};
var Thumbs$1 = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs',
    },
  },
  create() {
    const swiper = this;
    Utils.extend(swiper, {
      thumbs: {
        swiper: null,
        init: Thumbs.init.bind(swiper),
        update: Thumbs.update.bind(swiper),
        onThumbClick: Thumbs.onThumbClick.bind(swiper),
      },
    });
  },
  on: {
    beforeInit() {
      const swiper = this;
      const { thumbs } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate() {
      const swiper = this;
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition(duration) {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy() {
      const swiper = this;
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    },
  },
};

// Swiper Class

const components = [
  Device$1,
  Support$1,
  Browser$1,
  Resize,
  Observer$1,
  Virtual$1,
  Keyboard$1,
  Mousewheel$1,
  Navigation$1,
  Pagination$1,
  Scrollbar$1,
  Parallax$1,
  Zoom$1,
  Lazy$1,
  Controller$1,
  A11y,
  History$1,
  HashNavigation$1,
  Autoplay$1,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs$1
];

if (typeof Swiper.use === 'undefined') {
  Swiper.use = Swiper.Class.use;
  Swiper.installModule = Swiper.Class.installModule;
}

Swiper.use(components);

/* harmony default export */ __webpack_exports__["default"] = (Swiper);


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ */ "./components/index.js");
/* harmony import */ var _layouts___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ */ "./layouts/index.js");
var _jsxFileName = "/Users/kevenlefebvre/Sites/nevek/nevek.co/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["Welcome"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["LogoSlider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components___WEBPACK_IMPORTED_MODULE_1__["Services"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_2__["Engagement"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_2__["StrategeNumerique"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts___WEBPACK_IMPORTED_MODULE_2__["Faq"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_10edf27d814a728d21af":
/*!*******************************************!*\
  !*** external "dll_10edf27d814a728d21af" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_10edf27d814a728d21af;

/***/ })

},[[5,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map