/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/components/starPlanetas",{

/***/ "./src/pages/components/starPlanetas.jsx":
/*!***********************************************!*\
  !*** ./src/pages/components/starPlanetas.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StarPlanetas; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/components/starPlanetas.jsx\";\nfunction StarPlanetas(props) {\n  var img = \"./images/\" + props.img + \".png\";\n  console.log(img);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      // backgroundImage: \"./images/\" + props.img + \".png\",\n      background: 'white',\n      width: '150px',\n      border: '1px solid white',\n      borderRadius: '1rem',\n      margin: '.5rem',\n      padding: '.5rem'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"texto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Nome\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: props.nome\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"texto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Clima\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: props.clima\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n_c = StarPlanetas;\n\nvar _c;\n\n$RefreshReg$(_c, \"StarPlanetas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzLmpzeD9iYTg0Il0sIm5hbWVzIjpbIlN0YXJQbGFuZXRhcyIsInByb3BzIiwiaW1nIiwiY29uc29sZSIsImxvZyIsImJhY2tncm91bmQiLCJ3aWR0aCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInBhZGRpbmciLCJub21lIiwiY2xpbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBRXhDLE1BQU1DLEdBQUcsR0FBRyxjQUFhRCxLQUFLLENBQUNDLEdBQW5CLEdBQXdCLE1BQXBDO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBRUEsc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFDUjtBQUNBRyxnQkFBVSxFQUFFLE9BRko7QUFHUkMsV0FBSyxFQUFFLE9BSEM7QUFJUkMsWUFBTSxFQUFFLGlCQUpBO0FBS1JDLGtCQUFZLEVBQUUsTUFMTjtBQU1SQyxZQUFNLEVBQUUsT0FOQTtBQU9SQyxhQUFPLEVBQUU7QUFQRCxLQUFaO0FBQUEsNEJBWUk7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFLVCxLQUFLLENBQUNVO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpKLGVBZ0JJO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxrQkFBS1YsS0FBSyxDQUFDVztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQkg7S0FqQ3VCWixZIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJQbGFuZXRhcyhwcm9wcykge1xuXG4gICAgY29uc3QgaW1nID0gXCIuL2ltYWdlcy9cIisgcHJvcHMuaW1nICtcIi5wbmdcIlxuXG5cbiAgICBjb25zb2xlLmxvZyhpbWcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IFwiLi9pbWFnZXMvXCIgKyBwcm9wcy5pbWcgKyBcIi5wbmdcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgICAgIG1hcmdpbjogJy41cmVtJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcuNXJlbSdcbiAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz17XCIuL2ltYWdlcy9cIisgcHJvcHMuaW1nICtcIi5wbmdcIn0gLz4gKi99XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dG9cIj5cbiAgICAgICAgICAgICAgICA8Yj5Ob21lPC9iPlxuICAgICAgICAgICAgICAgIDxwPnsgcHJvcHMubm9tZSB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvXCI+XG4gICAgICAgICAgICAgICAgPGI+Q2xpbWE8L2I+IFxuICAgICAgICAgICAgICAgIDxwPnsgcHJvcHMuY2xpbWEgfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/starPlanetas.jsx\n");

/***/ })

});