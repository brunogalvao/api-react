/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/starPlanetas */ \"./src/pages/components/starPlanetas.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/index.jsx\";\n\nvar __N_SSG = true;\nfunction Index(props) {\n  function renderPlaneta() {\n    var render = [];\n\n    for (var i = 0; i < 10; i++) {\n      render.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__.default, {\n        nome: props.planeta.results[i].name,\n        clima: props.planeta.results[i].climate,\n        img: props.planeta.results[i].name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this));\n    }\n\n    return render;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid v-center h-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-teal-100 text-3xl\",\n        children: \"Planetas StarWars\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: renderPlaneta()\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }, this);\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyZW5kZXJQbGFuZXRhIiwicmVuZGVyIiwiaSIsInB1c2giLCJwbGFuZXRhIiwicmVzdWx0cyIsIm5hbWUiLCJjbGltYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFFbkMsV0FBU0MsYUFBVCxHQUEwQjtBQUV4QixRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0JELFlBQU0sQ0FBQ0UsSUFBUCxlQUNFLDhEQUFDLDZEQUFEO0FBQ0UsWUFBSSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJJLElBRGpDO0FBRUUsYUFBSyxFQUFFUCxLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJLLE9BRmxDO0FBR0UsV0FBRyxFQUFFUixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkgsQ0FBdEIsRUFBeUJJO0FBSGhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EOztBQUNELFdBQU9MLE1BQVA7QUFDRDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBLDRCQUVFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRTtBQUFBLGdCQUVHRCxhQUFhO0FBRmhCLHFCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUQ7S0FqQ3VCRixLIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGFyUGxhbmV0YXMgZnJvbSBcIi4vY29tcG9uZW50cy9zdGFyUGxhbmV0YXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcblxyXG4gIGZ1bmN0aW9uIHJlbmRlclBsYW5ldGEgKCkge1xyXG5cclxuICAgIGNvbnN0IHJlbmRlciA9IFtdXHJcbiAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgcmVuZGVyLnB1c2goXHJcbiAgICAgICAgPFN0YXJQbGFuZXRhcyBcclxuICAgICAgICAgIG5vbWU9e3Byb3BzLnBsYW5ldGEucmVzdWx0c1tpXS5uYW1lfVxyXG4gICAgICAgICAgY2xpbWE9e3Byb3BzLnBsYW5ldGEucmVzdWx0c1tpXS5jbGltYXRlfVxyXG4gICAgICAgICAgaW1nPXtwcm9wcy5wbGFuZXRhLnJlc3VsdHNbaV0ubmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgdi1jZW50ZXIgaC1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXRlYWwtMTAwIHRleHQtM3hsXCI+UGxhbmV0YXMgU3RhcldhcnM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgIHtyZW5kZXJQbGFuZXRhKCl9XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICBjb25zdCBhcGkgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9zd2FwaS5kZXYvYXBpL3BsYW5ldHNcIilcclxuICAgICAgLnRoZW4oIChzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzZXJ2ZXIuanNvbigpO1xyXG4gICAgICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcGxhbmV0YTogYXBpLFxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});