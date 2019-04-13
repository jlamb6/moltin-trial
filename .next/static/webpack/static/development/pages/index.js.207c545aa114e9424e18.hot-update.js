webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\The Great Lambino\\Projects\\moltin\\moltin-trial\\pages\\index.js";

//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
var MoltinGateway = __webpack_require__(/*! @moltin/sdk */ "./node_modules/@moltin/sdk/dist/moltin.js").gateway;

var Moltin = MoltinGateway({
  client_id: '6PtJ8E3Z5xCetSOE3hx0VgMEzDOcTZWUNQdWIisBtw',
  client_secret: 'O70jqAfI5LuLecujoAWVknks8tutdxhmzGUh0nMizp'
});
/*
Moltin.Products.All().then(products => {
  console.log(products);
});
*/





function Home() {
  return _Home.apply(this, arguments);
} //}


function _Home() {
  _Home = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var products;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Moltin.Products.All().then(function (products) {
              return products.data;
            });

          case 2:
            products = _context.sent;
            return _context.abrupt("return", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              },
              __self: this
            }, "Moltin Ecommerce Site"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("link", {
              rel: "stylesheet",
              href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
              integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
              crossOrigin: "anonymous",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("link", {
              rel: "stylesheet",
              href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
              integrity: "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
              crossOrigin: "anonymous",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("script", {
              src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
              integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
              crossOrigin: "anonymous",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("script", {
              src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
              integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
              crossOrigin: "anonymous",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("script", {
              src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
              integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
              crossOrigin: "anonymous",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            })), console.log(this.props.products.data), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            }, "Hello World"), this.props.products.data.forEach(function (cur) {
              return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              }, cur.name);
            })));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _Home.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.207c545aa114e9424e18.hot-update.js.map