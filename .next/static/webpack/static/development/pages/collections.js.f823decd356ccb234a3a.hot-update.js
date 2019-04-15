webpackHotUpdate("static\\development\\pages\\collections.js",{

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
        className: "jsx-2410178027" + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2410178027" + " " + "container p-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: this.props.imgSource,
        alt: "Card image cap",
        className: "jsx-2410178027" + " " + "card-img-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-2410178027" + " " + "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
        className: "jsx-2410178027" + " " + "card-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, this.props.brand.brandName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-2410178027" + " " + "card-subtitle mb-2 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.name), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-2410178027" + " " + "card-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "$", this.props.price.toString().slice(0, -2).concat(".".concat(this.props.price.toString().slice(-2))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2410178027",
        __self: this
      }, ".card.jsx-2410178027{cursor:pointer;-webkit-transition:.4s;transition:.4s;-webkit-transform-origin:50% 20%;-ms-transform-origin:50% 20%;transform-origin:50% 20%;}.card.jsx-2410178027:hover{-webkit-transform:scale(1.15);-ms-transform:scale(1.15);transform:scale(1.15);z-index:5;box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important;}.card-body.jsx-2410178027{white-space:nowrap;overflow:hidden;}.card-body.jsx-2410178027 h6.jsx-2410178027,.card-body.jsx-2410178027 p.jsx-2410178027{text-overflow:ellipsis;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGhlIEdyZWF0IExhbWJpbm9cXFByb2plY3RzXFxtb2x0aW5cXG1vbHRpbi10cmlhbFxcY29tcG9uZW50c1xccHJvZHVjdFRpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0I0QixBQUd3QyxBQUtPLEFBS0gsQUFJSSxlQWJSLElBVUMsSUFJcEIsWUFIQSxrQkFWNkIseUJBSWYsVUFDd0Msa0RBQ3RELEVBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxUaGUgR3JlYXQgTGFtYmlub1xcUHJvamVjdHNcXG1vbHRpblxcbW9sdGluLXRyaWFsXFxjb21wb25lbnRzXFxwcm9kdWN0VGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1eUJ1dHRvbiB9IGZyb20gJ0Btb2x0aW4vcmVhY3Qtc2hvcGtpdCc7XHJcbi8qXHJcbjxCdXlCdXR0b24gaWQ9e3RoaXMucHJvcHMuaWR9PlxyXG4gICAgeyh7IGFkZFRvQ2FydCB9KSA9PiA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIFRvIENhcnQ8L2J1dHRvbj59XHJcbjwvQnV5QnV0dG9uPlxyXG4qL1xyXG5cclxuY29uc3QgTW9sdGluR2F0ZXdheSA9IHJlcXVpcmUoJ0Btb2x0aW4vc2RrJykuZ2F0ZXdheTtcclxuXHJcbmNvbnN0IE1vbHRpbiA9IE1vbHRpbkdhdGV3YXkoe1xyXG4gIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuQ0xJRU5UX0lEXHJcbn0pO1xyXG5cclxuY2xhc3MgUHJvZHVjdFRpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXt0aGlzLnByb3BzLmltZ1NvdXJjZX0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3RoaXMucHJvcHMuYnJhbmQuYnJhbmROYW1lfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj4ke3RoaXMucHJvcHMucHJpY2UudG9TdHJpbmcoKS5zbGljZSgwLCAtMikuY29uY2F0KGAuJHt0aGlzLnByb3BzLnByaWNlLnRvU3RyaW5nKCkuc2xpY2UoLTIpfWApfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjE1KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1ib2R5IGg2LCAuY2FyZC1ib2R5IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFRpbGUiXX0= */\n/*@ sourceURL=C:\\Users\\The Great Lambino\\Projects\\moltin\\moltin-trial\\components\\productTile.js */"));
    }
  }]);

  return ProductTile;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductTile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=collections.js.f823decd356ccb234a3a.hot-update.js.map