(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app.config.js":
/*!***********************!*\
  !*** ./app.config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  name: 'asd',
  port: 3000,
  apiKey: 'qgnqB4nG2qdm2Y8lqLOQfcs8PBzWaQeM'
}


/***/ }),

/***/ "./src/views/Index/Welcome.jsx":
/*!*************************************!*\
  !*** ./src/views/Index/Welcome.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config.js */ "./app.config.js");
/* harmony import */ var _app_config_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_config_js__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['api-key'] = _app_config_js__WEBPACK_IMPORTED_MODULE_2___default.a.apiKey;

var Welcome =
/*#__PURE__*/
function (_Component) {
  _inherits(Welcome, _Component);

  function Welcome(props) {
    var _this;

    _classCallCheck(this, Welcome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Welcome).call(this, props));

    _this.fetchName = function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/name').then(function (response) {
        _this.setState({
          name: response.data.name
        });
      })["catch"](function (error) {
        console.log(error);
      });
    };

    _this.componentDidMount = function () {
      _this.fetchName();
    };

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(Welcome, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "home"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to ", this.state.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Powered by React Express Starter Kit"));
    }
  }]);

  return Welcome;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9JbmRleC9XZWxjb21lLmpzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImFwcENvbmZpZyIsImFwaUtleSIsIldlbGNvbWUiLCJwcm9wcyIsImZldGNoTmFtZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsInNldFN0YXRlIiwibmFtZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnREaWRNb3VudCIsInN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLFNBQTlCLElBQTJDQyxxREFBUyxDQUFDQyxNQUFyRDs7SUFFTUMsTzs7Ozs7QUFDSixtQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQixpRkFBTUEsS0FBTjs7QUFEa0IsVUFPcEJDLFNBUG9CLEdBT1IsWUFBTTtBQUNoQlIsa0RBQUssQ0FBQ1MsR0FBTixDQUFVLFdBQVYsRUFBdUJDLElBQXZCLENBQTRCLFVBQUNDLFFBQUQsRUFBYztBQUN4QyxjQUFLQyxRQUFMLENBQWM7QUFDWkMsY0FBSSxFQUFFRixRQUFRLENBQUNHLElBQVQsQ0FBY0Q7QUFEUixTQUFkO0FBR0QsT0FKRCxXQUlTLFVBQUNFLEtBQUQsRUFBVztBQUNsQkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxPQU5EO0FBT0QsS0FmbUI7O0FBQUEsVUFpQnBCRyxpQkFqQm9CLEdBaUJBLFlBQU07QUFDeEIsWUFBS1YsU0FBTDtBQUNELEtBbkJtQjs7QUFFbEIsVUFBS1csS0FBTCxHQUFhO0FBQ1hOLFVBQUksRUFBRTtBQURLLEtBQWI7QUFGa0I7QUFLbkI7Ozs7NkJBZ0JTO0FBQ1IsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0Usc0ZBQWdCLEtBQUtNLEtBQUwsQ0FBV04sSUFBM0IsQ0FERixDQURGLEVBSUUsNkdBSkYsQ0FERjtBQVFEOzs7O0VBL0JtQk8sK0M7O0FBa0NQZCxzRUFBZixFIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdhc2QnLFxuICBwb3J0OiAzMDAwLFxuICBhcGlLZXk6ICdxZ25xQjRuRzJxZG0yWThscUxPUWZjczhQQnpXYVFlTSdcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi8uLi8uLi9hcHAuY29uZmlnLmpzJ1xuXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnYXBpLWtleSddID0gYXBwQ29uZmlnLmFwaUtleVxuXG5jbGFzcyBXZWxjb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnXG4gICAgfVxuICB9XG5cbiAgZmV0Y2hOYW1lID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnL2FwaS9uYW1lJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiByZXNwb25zZS5kYXRhLm5hbWVcbiAgICAgIH0pXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgdGhpcy5mZXRjaE5hbWUoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hvbWUnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8ge3RoaXMuc3RhdGUubmFtZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+UG93ZXJlZCBieSBSZWFjdCBFeHByZXNzIFN0YXJ0ZXIgS2l0PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGNvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=