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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/starPlanetas */ \"./src/pages/components/starPlanetas.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/brunogalvao/Documents/GitHub/api-react/src/pages/index.jsx\";\n\nvar __N_SSG = true;\nfunction Index(props) {\n  function renderPlaneta() {\n    var render = [];\n\n    for (var i = 0; i < 10; i++) {\n      render.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_starPlanetas__WEBPACK_IMPORTED_MODULE_1__.default, {\n        nome: props.planeta.results[i].name,\n        clima: props.planeta.results[i].climate,\n        img: props.planeta.results[i].name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this));\n    }\n\n    return render;\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container mx-auto\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-cols\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"titulo\",\n        children: \"Planetas StarWars\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"grid grid-flow-row\",\n      children: renderPlaneta()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }, this);\n}\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJyZW5kZXJQbGFuZXRhIiwicmVuZGVyIiwiaSIsInB1c2giLCJwbGFuZXRhIiwicmVzdWx0cyIsIm5hbWUiLCJjbGltYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVuQyxXQUFTQyxhQUFULEdBQTBCO0FBRXhCLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQkQsWUFBTSxDQUFDRSxJQUFQLGVBQ0UsOERBQUMsNkRBQUQ7QUFDRSxZQUFJLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxPQUFkLENBQXNCSCxDQUF0QixFQUF5QkksSUFEakM7QUFFRSxhQUFLLEVBQUVQLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxPQUFkLENBQXNCSCxDQUF0QixFQUF5QkssT0FGbEM7QUFHRSxXQUFHLEVBQUVSLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxPQUFkLENBQXNCSCxDQUF0QixFQUF5Qkk7QUFIaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBT0Q7O0FBQ0QsV0FBT0wsTUFBUDtBQUNEOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsNEJBRUU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQVdFO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsZ0JBQ0dELGFBQWE7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0JEO0tBcEN1QkYsSyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhclBsYW5ldGFzIGZyb20gXCIuL2NvbXBvbmVudHMvc3RhclBsYW5ldGFzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG5cclxuICBmdW5jdGlvbiByZW5kZXJQbGFuZXRhICgpIHtcclxuXHJcbiAgICBjb25zdCByZW5kZXIgPSBbXVxyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIHJlbmRlci5wdXNoKFxyXG4gICAgICAgIDxTdGFyUGxhbmV0YXMgXHJcbiAgICAgICAgICBub21lPXtwcm9wcy5wbGFuZXRhLnJlc3VsdHNbaV0ubmFtZX1cclxuICAgICAgICAgIGNsaW1hPXtwcm9wcy5wbGFuZXRhLnJlc3VsdHNbaV0uY2xpbWF0ZX1cclxuICAgICAgICAgIGltZz17cHJvcHMucGxhbmV0YS5yZXN1bHRzW2ldLm5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlclxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0dWxvXCI+UGxhbmV0YXMgU3RhcldhcnM8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogPD5cclxuXHJcblxyXG4gICAgICAgIDwvPiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3dcIj5cclxuICAgICAgICAgIHtyZW5kZXJQbGFuZXRhKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIGNvbnN0IGFwaSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL3N3YXBpLmRldi9hcGkvcGxhbmV0c1wiKVxyXG4gICAgICAudGhlbiggKHNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHNlcnZlci5qc29uKCk7XHJcbiAgICAgIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBwbGFuZXRhOiBhcGksXHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});