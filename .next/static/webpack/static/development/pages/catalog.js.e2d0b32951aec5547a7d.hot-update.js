webpackHotUpdate("static\\development\\pages\\catalog.js",{

/***/ "./components/productTile.js":
/*!***********************************!*\
  !*** ./components/productTile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _moltin_react_shopkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @moltin/react-shopkit */ "./node_modules/@moltin/react-shopkit/dist/shopkit.cjs.js");
/* harmony import */ var _moltin_react_shopkit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_moltin_react_shopkit__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\The Great Lambino\\Projects\\moltin\\moltin-trial\\components\\productTile.js";



/*
<BuyButton id={this.props.id}>
    {({ addToCart }) => <button onClick={addToCart}>Add To Cart</button>}
</BuyButton>
*/

var MoltinGateway = __webpack_require__(/*! @moltin/sdk */ "./node_modules/@moltin/sdk/dist/moltin.js").gateway;

var Moltin = MoltinGateway({
  client_id: process.env.CLIENT_ID
});

var ProductTile =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductTile, _React$Component);

  function ProductTile(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductTile);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductTile).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductTile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-247271813" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-247271813" + " " + "container p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: this.props.imgSource,
        alt: "Card image cap",
        className: "jsx-247271813" + " " + "card-img-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-247271813" + " " + "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-247271813" + " " + "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.brand.brandName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-247271813" + " " + "card-subtitle mb-2 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-247271813" + " " + "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "$", this.props.price.toString().slice(0, -2).concat(".".concat(this.props.price.toString().slice(-2))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "247271813",
        __self: this
      }, ".card.jsx-247271813{cursor:pointer;-webkit-transition:.4s;transition:.4s;-webkit-transform-origin:50% 20%;-ms-transform-origin:50% 20%;transform-origin:50% 20%;}.card.jsx-247271813:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);z-index:5;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;}.card-body.jsx-247271813{white-space:nowrap;}.card-body.jsx-247271813 h6.jsx-247271813,.card-body.jsx-247271813 p.jsx-247271813{text-overflow:ellipsis;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGhlIEdyZWF0IExhbWJpbm9cXFByb2plY3RzXFxtb2x0aW5cXG1vbHRpbi10cmlhbFxcY29tcG9uZW50c1xccHJvZHVjdFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0I0QixBQUd3QyxBQUtPLEFBS0gsQUFHSSxlQVpSLElBVW5CLElBR29CLGdCQUNwQixjQWI2Qix5QkFJZixVQUN3QyxrREFDdEQsRUFMQSIsImZpbGUiOiJDOlxcVXNlcnNcXFRoZSBHcmVhdCBMYW1iaW5vXFxQcm9qZWN0c1xcbW9sdGluXFxtb2x0aW4tdHJpYWxcXGNvbXBvbmVudHNcXHByb2R1Y3RUaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV5QnV0dG9uIH0gZnJvbSAnQG1vbHRpbi9yZWFjdC1zaG9wa2l0JztcclxuLypcclxuPEJ1eUJ1dHRvbiBpZD17dGhpcy5wcm9wcy5pZH0+XHJcbiAgICB7KHsgYWRkVG9DYXJ0IH0pID0+IDxidXR0b24gb25DbGljaz17YWRkVG9DYXJ0fT5BZGQgVG8gQ2FydDwvYnV0dG9uPn1cclxuPC9CdXlCdXR0b24+XHJcbiovXHJcblxyXG5jb25zdCBNb2x0aW5HYXRld2F5ID0gcmVxdWlyZSgnQG1vbHRpbi9zZGsnKS5nYXRld2F5O1xyXG5cclxuY29uc3QgTW9sdGluID0gTW9sdGluR2F0ZXdheSh7XHJcbiAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5DTElFTlRfSURcclxufSk7XHJcblxyXG5jbGFzcyBQcm9kdWN0VGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3RoaXMucHJvcHMuaW1nU291cmNlfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dGhpcy5wcm9wcy5icmFuZC5icmFuZE5hbWV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIG1iLTIgdGV4dC1tdXRlZFwiPnt0aGlzLnByb3BzLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPiR7dGhpcy5wcm9wcy5wcmljZS50b1N0cmluZygpLnNsaWNlKDAsIC0yKS5jb25jYXQoYC4ke3RoaXMucHJvcHMucHJpY2UudG9TdHJpbmcoKS5zbGljZSgtMil9YCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC40cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDIwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIC41cmVtIDFyZW0gcmdiYSgwLDAsMCwuMTUpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJvZHkgaDYsIC5jYXJkLWJvZHkgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0VGlsZSJdfQ== */\n/*@ sourceURL=C:\\Users\\The Great Lambino\\Projects\\moltin\\moltin-trial\\components\\productTile.js */"));
    }
  }]);

  return ProductTile;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductTile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=catalog.js.e2d0b32951aec5547a7d.hot-update.js.map